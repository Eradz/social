const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const joi = require("joi")
const passwordcomplexity= require ("joi-password-complexity")

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    joined:{
        type: Date,
        default: new Date()
    }
})

userSchema.method.generateAuthToken = function () {
    const token = jwt.sign({id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return token
}
const User = mongoose.model("users", userSchema);
 
const validate = (data) => {
    const schema = joi.object({
        firstname: joi.string().required().label("First Name"),
        lastname: joi.string().required().label("Last Name"),
        email: joi.string().required().label("Email"),
        password:passwordcomplexity().required().label("Password"),
    })
    return schema.validate(data)
}

module.exports = {User, validate}