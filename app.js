// var http = require('http');

// const start=http.createServer(function(req,res)
// {
//     res.write("Hiii Boyss")
//     res.end()
// })
// start.listen(3000,'localhost',function()
// {
//     console.log('Server is runningg')
// })




const express=require('express')
const app=express()
const port=process.env.PORT || 5000
const route=require('./routes/route')

app.use('/',route)

app.listen(port,console.log('Server started at '))