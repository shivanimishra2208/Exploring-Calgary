const commentModel = require("../db/models").UserComment
 
const getComment= async (req ,res) =>{

 try{  
  //const userId = req.loggedInUser._id.toString()
  //console.log(userId)
  const getComments= await commentModel.find({}).exec()
    res.send(getComments)
    //console.log(loggedInUser)
    return
}catch (err){
  res.status(500).send({message:"server not found"})
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
        //const userId = req.loggedInUser._id
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
      if (!_id) {res.status(404).send({message:'Not Found'})
      return
    }
      /*
      const commentInfo = await commentModel.findById(_id).exec()
      if (req.loggedInUser._id.toString() !== commentInfo?.userId?.toString()) {
        res
          .status(401)
          .send({ errorMsg: 'you do not have access to edit this comment' })
        return
      }*/
  
      await commentModel.updateOne({ _id }, {title }).exec()
      const updateComment= await commentModel.findById(_id).exec()
      res.send(updateComment)
    } catch (err) {
      res.status(500).send({message:'Server error'})
    }
  }
  
  const deleteComment = async(req,res)=>{
    try{
      const {_id}= req.params
      if(!_id) res.status(404).send("ID not Found")
      /*const commentInfo = await commentModel.findById(_id).exec()
      if (req.loggedInUser._id.toString() !== commentInfo?.userId?.toString()) {
        res
          .status(401)
          .send({ errorMsg: 'you do not have access to delete this comment' })
        return
      }*/
  

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









 