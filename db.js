const mongoose = require("mongoose");


var mongoURL = 'mongodb+srv://dhsachani:Dh05072001@cluster0.fzgti.mongodb.net/CaptainsQuartersHotel'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser : true})

var connection = mongoose.connection


connection.on('error' , ()=>{
    console.log('Mongodb Connection Failed')
})

connection.on("connected" , ()=>{
    console.log('Mongodb Connection Succesful')
})


module.exports = mongoose