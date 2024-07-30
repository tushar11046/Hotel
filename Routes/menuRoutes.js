const express=require("express");
const menurouter=express.Router();
const MenuItem=require("./../models/menu");

menurouter.post('/',async (req,res)=>{

    try{
        const data=req.body;

        const newMenuItem=new MenuItem(data);

        const response=await newMenuItem.save();
        console.log('Data Saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Interna Server Error"});
    }

})

menurouter.get('/', async (req,res)=>{

    try{
        const data=await MenuItem.find();
        console.log("Data Saved in Menu!");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Internal Server Error"});
    }

})

menurouter.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;

        if(tasteType=='Spicy' || tasteType=='Salty' || tasteType=='Sweet'){
            const response=await MenuItem.find({taste: tasteType});
            console.log("Response Fetched");
            res.status(200).json(response);
        }else{
            res.status(500).json("Invalid Taste");
        }
    }catch(err){
        res.status(500).json({err:"Invalid Taste"});
    }
})

module.exports=menurouter;