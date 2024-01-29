const mongoose = require('../model/db')
const express = require('express')
const details = require('../model/dschema')
a=0;
b=0;
a=b;
const adduser = async(req,res)=>{
    try{   
      const newUser = new details({
        userid:req.body.name+req.body.dateOfBirth,
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        phn: req.body.mobileNumber,
        dob: req.body.dateOfBirth
    });



    const savedUser = await newUser.save();
   console.log(savedUser);
    res.redirect('/users')
    }
    catch(error){

      console.error(error);
      res.status(500).json({ message: 'Error while adding the user' });
                 
    }
    
}

const updateuser = async (req, res) => {
    try {
        const db = mongoose.connection; 
        console.log(req.body._id)
        let current = await details.findByIdAndUpdate(
          req.body._id, 
          {
            $set: {
              
              name: req.body.name,
              email: req.body.email,
              department: req.body.department,
              phn: req.body.mobileNumber,
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
      const all = await db.collection('details').find({});
      const arr = await all.toArray();
      console.log(arr);
      res.json(arr);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal error' });
      
    }
  }

  module.exports = {adduser,deleteuser,updateuser,users};

