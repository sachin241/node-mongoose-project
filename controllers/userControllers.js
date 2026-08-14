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
exports.updateUser=async(req,res)=>{
    const username=req.params.username;
    const data=req.body;
    const updateUser=await user.findOneAndUpdate({username},data);
    return res.status(200).json({message:"successfully updated",user:updateUser});
}


exports.deleteUser=async(req,res)=>{
    const username=req.params.username;
    const deleteUser=await user.findOneAndDelete(username);
    return res.status(200).json({message:"deleted successfully"});
}