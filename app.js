// creating require package
const express = require('express')
// calling function on a varialbe
const app = express()
// const userRouter = require('./user')
// var cors = require("cors");

const user = require('./user.js')

// app.get('/',(request,response) =>{
    
//     response.send("Get Router on Home Page")

// })
// app.use('/user', user)

// app.use(express.static('public'))

app.set('view engine','ejs')

app.use(express.urlencoded({extend:true}))

app.get('/',(request,response) =>{
    response.render("index")
})
app.use('/user',user)
//app.use(cors())

app.listen(3000)
