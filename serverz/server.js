const path = require('path')
const express = require('express')
const cors = require ('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const signupRoutes = require("./routes/signup.js")
const loginRoutes = require("./routes/login.js")
const getRoutes = require("./routes/get.js")
const app = express();
const PORT = process.env.PORT || 4000


dotenv.config()
mongoose.connect(process.env.URL, () => console.log('database connected'))

app.use(express.json())
app.use(cors())
app.use("/api", getRoutes)
app.use("/api", signupRoutes)
app.use("/api", loginRoutes)

//server frontend
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
    })
} else{
    app.get('/', (req,res)=>{
        res.send('please set to production')
    })
}


app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})