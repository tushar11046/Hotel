const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

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
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

// Create Person Model

personSchema.pre('save',async function(next){
    const person=this;
    //Hash the password

    if(!person.isModified('password'))  return next();

    try{
        //hash password generation

        const salt=await bcrypt.genSalt(10);

        //hash password

        const hashedPassword=await bcrypt.hash(person.password,salt);
        person.password=hashedPassword;

        next();
    }catch(err){
        return next(err);
    }
})

personSchema.methods.comparePassword=async function(candidatePassword){
    try{
        const isMatch=await bcrypt.compare(candidatePassword,this.password/*stored Hash Password*/); // extracts salt then hashes it with entered pasword then checks with this.password
        return isMatch;
    }catch(err){
    }
}

const Person= mongoose.model('Person', personSchema);
module.exports= Person;