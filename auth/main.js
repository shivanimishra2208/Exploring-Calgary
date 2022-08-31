const loginModel = require('../db/models/login.model')
const jwt = require('jsonwebtoken')

const getToken = req => {
  const JWT_KEY = process.env.JWT_KEY_NAME || 'jwt'
  if (req.headers['Authorization']) return req.headers['Authorization']
  if (req.cookies[JWT_KEY]) return req.cookies[JWT_KEY]
  return null
}

const auth = async (req, res, next) => {
  const token = getToken(req)

  if (!token) {
   
    return res.status(401).send({ success: false, message: 'token unauthorized' })
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET)

  if (!payload) {
   
    return res.status(401).send({ success: false, message: 'unauthorized' })
  }

  const user = await loginModel.findOne({ email: payload?.email }).exec()

  if (!user) {
    return res.status(401).send({ success: false, message: 'user unauthorized' })
  }

  if (!req.loggedInUser) {
    Object.defineProperty(req, 'loggedInUser', {
      value: user,
      writable: true
    })   
  } else {
    throw new Error('loggedInUser property already exists')
  }

  next()
}

// unused in this app - carried over from the bookstore app
const adminAuth = async (req, res, next) => {
  if (!req.loggedInUser.isAdmin) {
    res.status(401).send({ success: false, message: 'admin unauthorized' })
    return
  }
  next()
}

module.exports = { auth, adminAuth }