const commentModel = require("../db/models").UserComment
 
const getComment= async (req ,res) =>{ 
 try{ const getComments= await commentModel.find().exec()
    res.send(getComments)
    return
}catch (err){
  res.status(500).send("sever not found")
}
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
        const {title}= req.body
        console.log(title)
        const newComm= await commentModel.create(title)
        res.send(newComm)
        return
    }catch (err){
        res.status(500).send(err.message)
    }
  }
  const updateComment= async (req,res)=>{
    try {
      const { _id } = req.params
      const {title } = req.body
      if (!_id) res.status(404).send('Not Found')
  
      await commentModel.updateOne({ _id }, {title }).exec()
      const updateComment= await commentModel.findById(_id).exec()
      res.send(updateComment)
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
  
  const deleteComment = async(req,res)=>{
    try{
      const {_id}= req.params
      if(!_id) res.status(404).send("ID not Found")
      await commentModel.findByIdAndDelete(_id).exec()
      res.send ({message:`Comment with ID ${_id} has been deleted.`})
    }catch (err){
      res.status(500).send("Some error with Server")
    }
  
  }


module.exports={
    getComment,
    getOneComment,
    postComment,
    updateComment,
    deleteComment
}









 