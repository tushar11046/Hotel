const express=require("express");
const router=express.Router();
const Person=require('./../models/person');

router.post('/', async (req,res)=>{

    try{
        const data=req.body;

        // Create a new person document using the Mongoose model
        const newPerson= new Person(data);
    
        //Save the new Person to Database
        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}
)

router.get('/',async (req,res)=>{
    try{
        const data=await Person.find();
        console.log("Data Fetched") ;
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/:workType',async (req,res)=>{

    try{

        const workType=req.params.workType;        // Extract the work type from the url parameter

       if(workType== 'chef' || work=='manager' || work=='waiter'){

        const response=await Person.find({work: workType});
        console.log("response fetched");
        res.status(200).json(response);

       }else{
        res.status(500).json({err:"Invalid Work Type"});
       }

    }catch(err){
        console.log(err);
        res.status(500).json({err:"Invalid Work Type"});
    }

})

router.put('/:id',async (req,res)=>{
    try{
        const personID=req.params.id; // Extract the id from url parameter
        const updatepersondata=req.body;  // updated data for the person

        const response=await Person.findByIdAndUpdate(personID,updatepersondata,{
        new:true, // Return Updated Document
        runValidators: true, // Run Mongoose validation
    })

    if(!response){
        return res.status(404).json({error:'Person not found'});
    }

    console.log("Updation Successfull!");
    res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.json({err: "Internal Server Error"});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const personID=req.params.id;

        const response=await Person.findByIdAndDelete(personID);

        if(!response){
            return res.status(404).json({error: "Person not found"});
        }
        console.log('Data Deleted');
        res.status(200).json({message:'person deleted successfullt'});
    }catch(err){
        console.log(err);
        res.json({err: "Internal Server Error"} );
    }
})

module.exports=router;