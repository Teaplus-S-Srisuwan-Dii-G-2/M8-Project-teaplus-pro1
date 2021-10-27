const express = require('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express()


app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"m8_pro"
})

app.get('/menu',(req,res)=>{
    db.query("SELECT * FROM `menu`",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.table(result)
        }
    })
})

app.get('/ingredients',(req,res)=>{
    db.query("SELECT * FROM `ingredients`",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.table(result)
        }
    })
})


app.listen('8080',()=>{
    console.log('Server had been run on port 8080')
})

