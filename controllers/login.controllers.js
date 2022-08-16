const loginModel= require("../db/models").login
const  bcrypt= require('bcryptjs')

console.log(loginModel)
const userLogin= async(req,res)=>{
     try{
        const { email , password }=  req.body
       
        const user= await loginModel.findOne({email}).exec()
       
        if(!user){
            res.status(401).send('Invalid email or password')
            return
        }
        const isValidPassword= await bcrypt.compare(password,user.passwordHash)
        if(!isValidPassword){
            res.status(401).send('Invalid email or password')
            return
        }
        res.send("Login Successfully")
        
     }catch(err){
        console.error(err.message)
        res.status(500).send('Something went wrong. Please try again later!')
     }
  
}
const signUp= async(req,res)=>{
try{
       const {email, password}= req.body
       if(!email||!password){
        res.send('Wrong email or passsword')
       }
     const passwordHash= await bcrypt.hash(password, 10)
       const response= await loginModel.create({email,passwordHash})
          res.send('Registration successfully done.')
} catch(err){
       res.status(500).send(err.message)
}
}
module.exports={
    userLogin,
    signUp
}