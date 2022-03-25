const http=require("http");
const fs=require("fs");



const myserver=http.createServer((req,res)=>{
    const myurl=req.url;
    if(myurl === "/"){
        let htmlfile=fs.readFileSync("./htmlpage/home.html");
        res.write(htmlfile);
        

    }else if(myurl === "/about"){
        let htmlfile=fs.readFileSync("./htmlpage/about.html");
        res.write(htmlfile);
        
    }else if(myurl === "/contact"){
        let htmlfile=fs.readFileSync("./htmlpage/contact.html");
        res.write(htmlfile);
        


    }else{
        res.write("<h1>404 PAGE NOT FOUND</h1>");
        
    }
res.end();

})


myserver.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Listning...");
    }
});

myserver.on("connection",()=>{
    console.log("Connection Established");
})

