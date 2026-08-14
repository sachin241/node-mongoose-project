const userModel=require('../models/user');
const userController=require('../controllers/userControllers');
const express=require('express');

apps=express.Router();

apps.use(express.json());

apps.get('/',userController.getUser);

apps.post('/',userController.createUser);

module.exports=apps;