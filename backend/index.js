const express = require('express');
const bodyparser = require('body-parser');
const cors = require ('cors');
const mysql = require('mysql2');


const app = express();

app.use(cors());
app.use(bodyparser.json());





//connect to mysql db
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'surveydata',
    port:3306
});




//check db connection
db.connect(err=>{
    if(err){console.log('err');}
    console.log('database connected');
})



//get all data







app.listen(3000,()=>{
    console.log('server running..');
})