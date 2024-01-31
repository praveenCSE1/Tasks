const mcq = require('../Models/McqQuestionSchema')
const mcqStore = require('../Models/McqStoreSchema')
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

const display_result = async(req,res)=>{
    try{
        console.log(req.params.id)

        // ///////////////////////
        // const id_ = req.params.id.split("=");        
        // ////////////////////////////

        const result = await mcqStore.findById(req.params.id)
        console.log(result+'d')
        res.status(200).json(result) 
    }
    catch(error){
        res.status(500).json({message:'Error while fetching the mcq result'})
    }
}


const result_store = async(req,res)=>{
    try{

        const newResult = new mcqStore({
            username:req.body.username,
            TotalAttempts:req.body.TotalAttempts,
            Date:Date.now()
        });
        const saveresult = await newResult.save();
        
        res.status(200).json({message:saveresult})

    }
    catch(error){
        res.status(500).json({message: 'Error while adding the mcq result'})
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

module.exports = {display_mcq,add_mcq,result_store,display_result};