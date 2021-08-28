const express = require('express')
const router = express.Router()
const products = require('../models/db')

router.get('/ping', (req, res) => {
    try{
            res.send("pong")
    }catch(err){
        res.send('error ' + err)
    }
})

router.get('/add/:a/:b', (req, res) => {
    try{
            const num1 = req.params.a
            const num2 = req.params.b
            const ans = (num1 + num2)
            res.send(ans)
    }catch(err){
        res.send('error ' + err)
    }
})

router.get('/configs', async(req, res) => {
    try{
        const al = await products.find()
        res.json(al)
    }catch(err){
        res.send('error ' + err)
    }
})

router.get('/config/:id', async(req, res) => {
    try{
        const al = await products.findById(req.params.id)
        res.json(al)
    }catch(err){
        res.send('error ' + err)
    }
})


router.post('/config/:coin', async(req,res) => {
    try {
        const addproduct = new products ({
            name : req.params.coin,
            fee : req.body.fee,
            active : req.body.active,
            ismarket : req.body.ismarket
        })

        const a1 = await addproduct.save()
        res.json(a1)

    }catch(error) {
        res.send('error ' + err)
    }
})



module.exports = router