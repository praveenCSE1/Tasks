const mongoose = require('../Models/db')
const express = require('express')
const details = require('../Models/DetailsSchema')

const adduser = async(req,res)=>{
    try{   
      console.log(req.user)
      const newUser = new details({
        userId:req.user.userId,
        name: req.body.name,
        department: req.body.department,
        phn: req.body.mobileNumber,       
        dob: req.body.dateOfBirth
    });
    
  const savedUser = await newUser.save();
   console.log(savedUser);
   res.status(200).json({ message: 'Profile Added'});
    }
    catch(error){
      console.error(error);
      res.status(500).json({ message: 'Error while adding the user'});
                 
    }
    
}

const updateuser = async (req, res) => {
    try {
        
        console.log(req.user.userId)
        let current = await details.findOneAndUpdate(
          {userId:req.user.userId}, 
          {
            $set: {
              name: req.body.name,
              email: req.body.email,
              department: req.body.department,
              phn: req.body.phn,
              dob: req.body.dateOfBirth,
            },
          },
          { new: true} 
        );
  
      if (!current) {
        return res.status(404).json({ message: 'User not found' });
      }
           
        res.json({ message: 'User updated successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while updating the user' });
    }
  }

  const deleteuser = async (req, res) => {
    try {
      const db = mongoose.connection;
      const deleteUser = await details.findById(req.body._id);
  
      console.log(deleteUser);
  
      if (!deleteUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await deleteUser.deleteOne();
  
      res.json({ message: 'User deleted successfully', user: deleteUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error while deleting the user' });
    }
  }

  const users = async(req, res)=>{    
    try {
      const db = mongoose.connection;
      const all = await db.collection('students').find({});
      const arr = await all.toArray();
      res.json(arr);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal error' });
      
    }
  }

  const myprofile = async(req, res)=>{    
    try {
      const db = mongoose.connection;
      const profile = await db.collection('students').findOne({userId:req.user.userId});
   
      res.json(profile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Profile Not found' });
      
    }
  }

  module.exports = {adduser,deleteuser,updateuser,users,myprofile};

