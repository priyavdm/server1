const express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password123',
    database : 'project'
  });

var cors =require('cors') 
   
app=express()
app.use(express.json())
app.use(cors())
connection.connect();

//**********get all the data*************
app.get('/getall',(req,res)=>{
 connection.query('SELECT id,username,age,email,gender from angular', function(error,results){
    if(error){
        console.log(error);
    }
    console.log('The solution is:',results);
    res.json(results);
 })
})


app.post('/insert',(req,res)=>{
connection.query('insert into angular (username,age,email,gender) values(?,?,?,?)',[req.body.username,req.body.age,req.body.email,req.body.gender],function(error,results){
   if(error){
    console.log(error);
   }
   console.log('The solution is:', results);
   res.json(results);
}
)
})



app.listen(4000,()=>{
console.log('listening on port 4000');
})