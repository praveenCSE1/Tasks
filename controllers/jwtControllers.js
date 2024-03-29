const jwt = require('jsonwebtoken')
require('dotenv').config();
const {SECRET_KEY} = process.env;



function generateToken(userId,userRole){
    const payload = {userId,role:userRole}
    const token = jwt.sign(payload,SECRET_KEY,{ expiresIn: '45m' })
    return token
}

function verifyToken(req, res, next) {
 
    const tok = req.headers['authorization'];
    const token = tok.split(' ')[1]
  
    if (!token) {
      return res.status(403).json({ message: 'Token is required' });
    }
  
    jwt.verify(token, SECRET_KEY, { algorithms: ['HS256'] }, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      
      req.user = decoded;
      next();
    });
  }
  function isAdmin(req, res, next){
    console.log(req.user)
    if (req.user.role !== 'ADMIN') {

        return res.status(401).json({ message: 'Requires Admin access for this page' });       
      }
      next();
}

module.exports = {generateToken,verifyToken,isAdmin}