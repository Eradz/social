const route = require("express").Router()
const jwt = require("jsonwebtoken")
const {User} = require ("../models/user.js")
const asyncHandler = require ("express-async-handler")
const{ protect }= require ("../middlewareAuth/protect.js")


route.get("/me", protect, asyncHandler(async(req, res,next) => {
    const {id, email,firstname} =await User.findById(req.user.id)

    res.status(200).json({
        id: id,
        firstname,
        email
    })
}))



module.exports = route