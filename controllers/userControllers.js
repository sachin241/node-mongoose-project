const user=require('../models/user');
const express=require("express");


exports.getUser=async(req,res)=>{
    const user1 =await user.find();
    return res.status(200).json({message:"successful",users:user1});
}

exports.createUser=async(req,res)=>{
    const data=req.body;
    await user.create(data);
    return res.status(201).json({message:"successfully created"});
}