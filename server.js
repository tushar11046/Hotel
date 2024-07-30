const express=require('express');
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json()); // stores in req.boy

app.get('/', function(req,res){
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

app.listen(3000,()=>{
    console.log("Listening to port 3000");
})

// Testing purpose