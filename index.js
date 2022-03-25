var express=require("express");
var app=express();
app.get("/",(req,res)=>{

    res.send("This is home page");
});

app.get("/for1",(req,res)=>{
    var fullname=req.query.fullname;
    res.send("Full name : "+fullname);
});

app.get("/form2/:email/:password",(req,res)=>{
    var email=req.params.email;
    var password=req.params.password;
    res.send("email: "+email+"  password: "+password);
    
});







app.listen(3000,(e)=>{
    console.log("Listening....");
})