const express = require('express')

const router = express.Router()


router.get('/logout',(req,res)=>{
   
    req.logout(function(err) {
      if (err) {
        return next(err);
      }
      res.send('User logged out')
    });
  
  }
)

const auth = (req,res,next)=>{
  if(req.user){
    next();
  }
  else{
    res.redirect('/');
  }
}

router.get('/success',auth,(req,res)=>{
  res.send(req.user)
})

router.get('/demo',(req,res)=>{

  console.log(req.cookies)
  const userCookie = req.user;

  if (userCookie) {
    res.send(`User cookie value: ${userCookie}`);
  } else {

    res.send('No user cookie found');
  }
})



module.exports  = router;