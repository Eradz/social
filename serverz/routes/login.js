const {User, validate} = require("../models/user.js")
const route = require("express").Router()
const bcrypt = require("bcrypt")
const token = require("../models/generateTokens.js")
const asyncHandler = require ("express-async-handler")

route.post("/login", asyncHandler( async(req, res)=>{
    const {email, password} = req.body

    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))){
        res.json({
            id : user.id,
            firstname : user.firstname,
            email: user.email,
            password: user.password,
            token: token(user._id)
        })
    }else{
        res.status(400)
        throw new Error("invalid email or password")
    }
}))
module.exports = route