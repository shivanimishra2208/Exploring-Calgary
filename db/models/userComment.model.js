const mongoose= require("mongoose")

const commentSchema= new mongoose.Schema({

title:{
    type:String,
    required: [true, 'Comment text is required'],
    min: 3,
    max: 512

}
})
const CommentSchema= mongoose.model("CommentSchema",commentSchema)


module.exports=CommentSchema
