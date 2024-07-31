const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Person=require('./models/person');

passport.use(new LocalStrategy(async(username,password,done)=>{
    // Authentication Logic

    try{
        console.log('Recieved Credentials: ',username,password);
        const user=await Person.findOne({username:username});

        if(!user){
            console.log("Incorrect username");
            return done(null,false,{message:'Incorrect Username'}); // done(error,user,message or info)
        }
        console.log("Username valid");

        const passwordmatch=await user.comparePassword(password);

        if(passwordmatch){
            return done(null,user);
        }else{
            return done(null,false,{message:'Invalid Password'});
        }
    }catch(err){
        return done(err);
    }
}))

module.exports=passport;