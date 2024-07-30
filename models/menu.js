const mongoose=require("mongoose");

const MenuListSchema=new mongoose.Schema({
   name: {
    type: String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   taste:{
    type:String,
    enum:['Sweet','Spicy','Salty'],
    required:true
   },
   isDrink:{
    type: Boolean,
    default: false
   },
   ingredients:{
    type:[String],
    default:[]
   },
   numSales:{
    type:Number,
    default:0
   }
})

const MenuItem=mongoose.model('MenuItem',MenuListSchema);

module.exports=MenuItem;