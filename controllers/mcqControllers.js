const mcq = require('../Models/McqSchema')


const display_mcq = async(req,res)=>{
    try{

        const mcqs = await mcq.find({});
        res.json(mcqs);
        
    }
    catch(error){

        console.error(error);
        res.status(500).json({ message: 'Error while fetching the mcq' });
                   
      }
}

const add_mcq = async(req,res)=>{
    try{
        const newMcq= new mcq({
            question:req.body.question,
            options:req.body.options,
            correct:req.body.correct,       
        });
        const savedUser = await newMcq.save();
        res.status(200).json({ message: 'mcq added successfully'});

    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'Error while add the mcq'})
    }
}

module.exports = {display_mcq,add_mcq};