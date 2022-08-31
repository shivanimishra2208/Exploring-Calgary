const loginModel= require("../db/models").login
const  bcrypt= require('bcryptjs')
const jwt= require('jsonwebtoken')

console.log(loginModel)
const userLogin= async(req,res)=>{
     try{
        const { email , password }=  req.body
       
        const user= await loginModel.findOne({email}).exec()
       
        if(!user){
            res.status(401).send({message:'Invalid email or password'})
            return
        }
        const isValidPassword= await bcrypt.compare(password,user.passwordHash)
        if(!isValidPassword){
            res.status(401).send({message:'Invalid email or password'})
            return
        }
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: '1h'
          })
      
          const JWT_KEY = process.env.JWT_KEY_NAME || 'jwt'
          res
            .header({ JWT_KEY: token }) // inject jwt in headers
            .cookie(JWT_KEY, token) // inject jwt in cookies
            .send({ token }) // keep token in body
           
       
        //res.send("Login Successfully")
        
     }catch(err){
        console.error(err.message)
        res.status(500).send({message:'Something went wrong. Please try again later!'})
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
          res.send({message:'Registration successfully done.'})
          
} catch(err){
       res.status(500).send(err.message)
}
}
module.exports={
    userLogin,
    signUp
}