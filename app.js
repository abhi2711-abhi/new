const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/ThroughBit'

const app = express()

mongoose.connect(url, {useNewUrlParser:true,})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected....')
})

app.use(express.json())

const apiRouter = require('./routes/api')
app.use('/api',apiRouter)

app.listen(9000, () => {
    console.log('server started')
})