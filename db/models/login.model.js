const mongoose= require("mongoose")


const loginSchema = new mongoose.Schema({
   
    email: {
      type: String,
      required: [true, 'user email is required'],
      unique: true,
      min: 5,
      max: 128,
      match: [/^\S+@\S+$/g, 'invalid email format']
    },
    passwordHash: {
      type: String,
      required: [true, 'password is required'],
      min: 4,
      max: 128
    }
  })
  
  const Login = mongoose.model('Login', loginSchema)
  
  module.exports = Login