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

//******************get all the data****************
app.get('/getall',(req,res)=>{
 connection.query('Select * from angular where isActive=1', function(error,results){
    if(error){
        console.log(error);
    }
    console.log('The solution is:',results);
    res.json(results);
 })
})

//******************insert the data**************
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

//*********************delete the data*****************
app.put('/delete',(req,res)=>{
   connection.query('update angular set isActive=? where id=?',[0,req.body.id],function(error,results){
      if(error){
         console.log(error);
      }
      console.log('the solution is:',results);
      res.json(results);
   })
})

//********************edit the data*******************
app.get('/edit/:id',(req,res)=>{
   connection.query('select * from angular where id=?',[req.params.id],function(error,results){
      if(error){
         console.log(error);
      }
      console.log('The solution is:', results);
      res.json(results);
   })
})

//************************update the data******************
app.put('/update',(req,res)=>{
   connection.query('update angular set username=?,age=?,email=?,gender=? where id=?',[req.body.username,req.body.age,req.body.email,req.body.gender,req.body.id],function(error,results){
      if(error){
         console.log(error);
      }
      console.log(results);
      res.json(results);
   })
})





app.listen(4000,()=>{
console.log('listening on port 4000');
})