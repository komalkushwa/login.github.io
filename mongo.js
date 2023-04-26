const mongoose = require("mongoose") 
mongoose.connect("mongodb://127.0.0.1:27017/feedback")
.then(()=>{
    console.log("mongodb is connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    

})

const collection = mongoose.model("collection", newSchema)

module.exports = collection