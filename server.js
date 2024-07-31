const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();

const PORT=process.env.PORT || 3000;

const bodyParser=require('body-parser');
app.use(bodyParser.json()); // stores in req.boy

// Middleware function
const logRequest= (req,res,next)=>  {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.orignalUrl}`);
    next(); // Move to next phase
}

app.get('/', logRequest, function(req,res){
    res.send("Welcome to the Hotel!");
})

app.get('/chicken',(req,res)=>{
    res.send("Chickne Order Succesfull!");
})

// const data=req.body;

// // Create a new person document using the Mongoose model
// const newPerson= new Person(data);

// //Save the new Person to Database
// newPerson.save((error,savedperson)=>{
//     if(error){
//         console.log("Can not be pushed to DB",error);
//         res.status(500).json({error: 'Internal Server Error'});
//     }else{
//         console.log("Data Saved Successfully");
//         res.status(200).json(savedperson);
//     }
// })

// Import Router files

const personRoutes=require('./Routes/personRoutes');
const menuRoutes=require('./Routes/menuRoutes');

// Use the routes
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);



app.listen(PORT,()=>{
    console.log("Listening to port 3000");
})

// Testing purpose