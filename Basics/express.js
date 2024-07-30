const express=require('express')
const app=express();

app.get('/', function(req,res){
    res.send("Welcome to the server")
})

app.get('/chicken',(req,res)=>{
    res.send("Chicken Order Succesfull!");
})
app.get('/pakora',(req,res)=>{
    var customizd_pakora={
        is_pyaz:true,
        is_chutney:true,
        quantity:'10'
    }
    res.send(customizd_pakora);
})
app.post('/items',(req,res)=>{
    
}
)
app.listen(3000,()=>{
    console.log('server is live at 3000');
}) 