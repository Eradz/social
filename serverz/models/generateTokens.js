const jwt = require("jsonwebtoken")

const generateAuthToken = (id) =>{
    
    return jwt.sign({id}, process.env.JWTPRIVATEKEY, {expiresIn:"30d"})
}
module.exports = generateAuthToken
