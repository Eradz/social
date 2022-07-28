const {User, validate} = require("../models/user.js")
const route = require("express").Router()
const bcrypt = require("bcrypt")
const token = require("../models/generateTokens.js")
const asyncHandler = require ("express-async-handler")

route.post("/signup", asyncHandler( async (req,res) =>{
   const { firstname, lastname, email, password} = req.body

   if(!firstname || !lastname || !email || !password){
      res.status(400)
      throw new Error("missing details")
     }

     const userExists = await User.findOne({email})
     if (userExists){
      res.status(400)
      throw new Error("user already exists")
     }

     const salt = await bcrypt.genSalt(10)
     const securePassword = await bcrypt.hash(password,salt)

     const user = await User.create({
      firstname, lastname, email, password: securePassword
     })
     if (user){
       res.status(200).json({
         _id: user.id,
         message:"user created",
         token: token(user._id)
      })
     }else{
      res.status(400)
      throw new Error("invalid user data")
     }
    

}))

module.exports = route