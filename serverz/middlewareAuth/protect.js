const jwt = require("jsonwebtoken")
const {User} = require ("../models/user.js")
const asyncHandler = require ("express-async-handler")


const protect = asyncHandler(async(req, res,next) => {
    let token

    if(req.headers.authorization  && req.headers.authorization.startsWith('Bearer')){
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY)

            req.user = await User.findById(decoded.id).select("-password")
// since its a middleware we have to use next
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Not Authorized, wrong token")
        }
    }
    if(!token){
        res.status(401)
        throw new Error("Not authorized, no token")
    }
})

module.exports = {protect}
