const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    fee:{
        type:String
    },
    active:{
        type:Boolean
    },
    ismarket:{
        type:Boolean
    }
})

const abhi = new mongoose.model('Product',productSchema)
module.exports = abhi