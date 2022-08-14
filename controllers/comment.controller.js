const commentModel = require("../db/models").UserComment
 
const getComment=(req ,res) =>{ 
    res.send("to get")
}
const getOneComment = async (req, res) => {
    try {
      const oneComment = await commentModel.find().exec()
      res.send(oneComment)
      return
    } catch (err) {
      res.status(500).send(err)
    }
  }
  const postComment= async (req,res)=>{
    try{
        const comm= req.body
        console.log(comm)
        const newComm= await commentModel.create(comm)
        res.send(newComm)
        return
    }catch (err){
        res.status(500).send(err.message)
    }
  }
  const updateComment= (req,res)=>{
    res.send("update")
  }
  const deleteComment =(req,res)=>{
    res.send("delete")
  }


module.exports={
    getComment,
    getOneComment,
    postComment,
    updateComment,
    deleteComment
}









 