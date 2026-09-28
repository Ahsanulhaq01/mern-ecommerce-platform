import User from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiResponse} from './../utils/apiResponse.js'

const registerUser = asyncHandler(async (req, res)=>{
    const {userName , email , password} = req.body;

    const existingUser = await User.findOne({"email" : email});
    if(existingUser){
        return res.status(200).json(
            new ApiResponse(200 , null , "User Already Existed")
        )
    };

    const user = await User.create({
        userName , email , password
    });

    const createdUser = await User.findById(user._id).select("-password");


    return res.status(201).json(
        new ApiResponse(201 , createdUser  , "User SuccessFully Created")
    );




});

const logInUser = asyncHandler(async (req , res)=>{
    const {userName , email , password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        return res.status(404).json(
            new ApiResponse(404 , null , "User is not register")
        )
    }

    const isPasswordValid = user.isPasswordCorrect(password)

    if(!isPasswordValid){
        return res.status(401).json(
            new ApiResponse(404 , null ,"Invalid Credentials")
        )
    }

    const LoggedInUser = await User.findById(user._id).select('-password')

    return res.status(200).json(
        new ApiResponse(200 , LoggedInUser , "Logged In SuccessFully")
    )
}) 


export {registerUser , logInUser};