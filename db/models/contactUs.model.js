const mongoose= require("mongoose")


const contactUSSchema = new mongoose.Schema({

name:{
    type:String,
    required:[true, "Name is required"],
    min :3,
    max:512
},
email:{
    type: String,
    required: [true, 'user email is required'],
    min: 5,
    max: 128,
    match: [/^\S+@\S+$/g, 'invalid email format']
},
message:{
    type:String,
    required:[true, "Message is required"],
    min :3,
    max:512
}
})
const ContactUs=mongoose.model("Contactus",contactUSSchema)

module.exports= ContactUs