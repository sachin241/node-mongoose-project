const express=require("express");
const dotenv=require("dotenv");
const Task=require("./models/task");
const { default: mongoose } = require("mongoose");
const port=8000;
dotenv.config();
app=express();
app.use(express.json());
mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err.message);
});

app.use('/user',require('./routers/userRoute'));
app.listen(port,()=>{
    console.log(`the server is running at ${port}`);
});