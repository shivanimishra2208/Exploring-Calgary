require("dotenv").config()
const express=require("express")
require("./db")()


const app=express()
const uuid=require("uuid")
var cors = require('cors')
const cookieparser= require('cookie-parser')
const { getOneComment, deleteComment, updateComment, getComment, postComment } = require("./controllers/comment.controller")
const postMessage= require("./controllers/contactus.controllers")
const PORT= process.env.PORT  || 3000
const comments= require('./data/comment.json')
const { userLogin,signUp } = require("./controllers/login.controllers")
const { auth, adminAuth } = require("./auth/main")

app.use(express.json())
app.set("view engine", "pug")
app.use(cookieparser())
//app.set('views','./view
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.post('/ContactUs',postMessage)

 app.post('/Login', userLogin) 

 app.post("/SignUp",signUp)

 
 app.route("/testimonials")
.get(getComment)
.post(postComment)

//app.use(auth)
//app.use(adminAuth)
app.route('/testimonials/:_id')
.get(getOneComment)
.patch(updateComment)
.delete(deleteComment)






  /*  const { id }= req.params
    const filtermessages= comments.filter(comment=>comment.id==id)
if (filtermessages.length===0){
res.status(404).send(`No comment found for this ${id}`)
return
}
res.send(filtermessages[0])
console.log(filtermessages)
})/*

app.post("/testimonials",(req,res)=>{
    const comment=req.body
    comment.id=uuid.v4
    comments.push(comment)
    res.send(comment)

})*/

app.get('*',(req,res)=>{
    res.status(404).send('Not Found')
    })
    
app.listen(PORT, ()=>{
    console.log( `server started on port ${PORT} `)

})
//http://localhost:5500/testimonials