
const mongoose = require('../Models/db.js')
const user = require('../Models/RegistrationSchema.js')
const {generateToken}=require('../controllers/jwtControllers.js')
const bcrypt = require('bcrypt')


const SECRET_KEY = process.env.SECRET_KEY;


const signup = async (req,res)=>{
    
    const{email,password}=req.body;

    const existingUser = await user.findOne({ email });
    if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

    const hpassword = await bcrypt.hash(password,10)
    console.log(hpassword);
    const n_user = new user({email,password:hpassword});
    n_user.save();
     res.status(200).json({message:'user saved successfully'})  
}

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const db = mongoose.connection; 
      const user = await db.collection('registers').findOne({email});

      //check whether the user with this email exist or not.
      if (user) {

        const u_password = await bcrypt.compare(password, user.password);

        //check whether the email and password matches
        if(u_password){
          console.log(user._id)

          const token = generateToken(user._id,user.role)
          
          res.status(200).json({ message: 'Login successful', token: token });
        }
        else{
          return res.status(401).json({ message: 'Invalid Credentials' });
        }
      } else {
        return res.status(401).json({ message: 'Invalid Credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error'});
    }
  }

  module.exports = {signup,login}