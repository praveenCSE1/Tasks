const express = require('express')
const mongoose = require('../model/db.js')
const user = require('../model/schema.js')


const signup = (req,res)=>{
    
    const{email,password}=req.body;
    console.log(req.body);
    const n_user = new user({email,password});
    n_user.save();
     res.status(200).json({message:'user saved successfully'})  
}

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const db = mongoose.connection; 
      const user = await db.collection('registers').findOne({ email, password });
      if (user) {
        console.log("login Successfull");
        res.status(200).json({message:'login successfull'})
      } else {     
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  module.exports = {signup,login}