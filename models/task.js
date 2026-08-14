const { default: mongoose } = require("mongoose");
const user = require("./user");

const task =new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("task",task);