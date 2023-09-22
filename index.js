const express = require("express");


const app = express();
app.use(express.urlencoded({extended : true}));

let user =[]

app.get("/",(req,res)=>{
    res.send("Welcome to Static-files  in express");
});
app.get("/login",(req,res)=>{
    console.log(req)
    res.sendFile(__dirname + "/index.html")
})
app.post("/login", (req,res)=>{
   let users={
    name : req.body.name,
    course : req.body.course,
    grId : req.body.grId,
    id : user.length + 1
   }
   user.push(users)
    res.send(user)
})

app.listen(8090, ()=>{
    console.log("Server is listen on port : http://localhost:8090")
})