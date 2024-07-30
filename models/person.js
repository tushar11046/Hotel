const mongoose=require('mongoose');

// Define the person Schema
const personSchema= new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type:Number,
        require:true
    },
    work:{
        type: String,
        enum: ['chef','waiter','manager'],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    adress:{
        type: String
    },
    salary:{
        type:Number
    }
});

// Create Person Model

const Person= mongoose.model('Person', personSchema);
module.exports= Person;