const express = require('express')
const router = express.Router()
const controller = require('./controller')
const books = require('../data/books.json')
const update = require('../lib/update')
const deletee=require('../lib/deletee')

router.get('/',function(req,res){
    res.send('Started Yoo')
})



router.get('/books',function(req,res){
    const data=controller.getAll()
    res.send(data)
})


router.get('/books/:code',function(req,res){
    const {code} = req.params
    const data=controller.getOne(code)
    res.send(data)
})



router.get('/books/:code/:name',function(req,res){
    const {code} =req.params
    const {name} = req.params
    const data=update.makeUpdate(code,name)
    res.send(data)
})


router.get('/books/:code/:name/delete',function(req,res){
    const {code} = req.params
    const data=deletee.deleteBook(code)
    res.send(data)
})
// router.get('/saav',(req,res)=>{
//     // const {saav} = req.params
//     return books.filter(take=>take.saav == code)
// })

module.exports = router