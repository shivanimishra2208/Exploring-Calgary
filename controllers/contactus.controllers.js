const contactusModel= require("../db/models").contactUs


const postMessage= async (req,res)=>{
    try{
        const message= req.body
        const newMessage= await contactusModel.create(message)
        res.send(newMessage)
        return
    }catch (err){
        res.status(500).send(err.message)
    }
  }
   module.exports = postMessage
  
