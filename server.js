require("dotenv").config()
const express=require("express")
require("./db")()



const app=express()
const uuid=require("uuid")
const { getOneComment, deleteComment, updateComment, getComment, postComment } = require("./controllers/comment.controller")
const postMessage= require("./controllers/contactus.controllers")
const PORT= process.env.PORT  || 3000
const comments= require('./data/comment.json')

app.set("view engine", "pug")
//app.set('views','./views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.route("/testimonials/:_id")
.get(getOneComment)
.patch(updateComment)
.delete(deleteComment)

app.route("/testimonials")
.get(getComment)
.post(postComment)



app.post('/ContactUs',postMessage)

    
//app.get("/testimonials" ,(req ,res) =>{ 
//res.send(comments)



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