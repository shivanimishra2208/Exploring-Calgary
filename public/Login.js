/*const errorMsg = document.querySelector('.danger')
const errorMsgText = document.querySelector('.text-error')

const showErrorMsg = message => {
    errorMsgText.innerText = message 
    errorMsg.style.display = 'block'
  }
  const hideErrorMsg = () => (errorMsg.style.display = 'none')

   const uri= 'http://localhost:5500/Login'

 const userLogin = async (uri, user) => {
    try {
      const loginOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
         // Authorization: localStorage.getItem('jwt')
        },
        body: JSON.stringify(user)
      }
      const response = await fetch(uri, loginOptions)
  
      if (response.status !== 200) {
        const error = response.json()
        return { error: error.message, value: null }
      } else {
        const { token } = await response.json()
        return { error: null, value: token }
      }
    } catch (error) {
      console.log('Error in loginUser' ,error.message)
      return ({ error: error.message, value: null })
    }
  }*/
 
/*
  const email = document.querySelector('[name = "email"]')
 const password = document.querySelector('[name = "password"]')
 const loginForm = document.querySelector('.loginbox')

 loginForm.addEventListener('click', async e => {
    try {
      e.preventDefault()
      const { error: loginUserError, value: token } = await userLogin(
      uri,
        {
          email: email.value,
          password: password.value
        }
      )
      console.log(loginUserError)
      if (loginUserError) {
        alert('Error while logging')
        console.log(loginUserError)
        //showErrorMsg(err.message)
        return // window.location='http://localhost:5500/Login.html'
      }  
        //hideErrorMsg()
      if (token) {
       // console.log('🚀 ~ file: login.js ~ line 54 ~ token', token)
        //hideErrorMsg()
        localStorage.setItem('jwt', token)
        localStorage.setItem('userEmail', email.value)
       //window.location = 'http://localhost:5500/index.html'
      }
      
    } catch (error) {
      console.error('Error in user log in', error)
     
      window.location='http://localhost:5500/Login.html'
    }
  })*/
  const uri= 'http://localhost:5500/Login'

  const loginUser = async (uri, fields) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
         //Authorization :localStorage.getItem('jwt')
          },
        body: JSON.stringify(fields)
      }
      const response = await fetch(uri, options)
      if (response.status !== 200) {
        const error = await response.json()
        return { error: error.message, value: null }
      } else {
        const { token } = await response.json()
        return { error: null, value: token }
      }
    } catch (error) {
      console.log('Error in loginUser', error.message)
      return { error: error.message, value: null }
    }
  }
  const email = document.querySelector('[name = "email"]')
  const password = document.querySelector('[name = "password"]')
  const loginForm = document.querySelector('.login_form')
  
  loginForm.addEventListener('submit', async e => {
    try {
      e.preventDefault()
      const { error: loginUserError, value: token } = await loginUser(uri,
        {
          email: email.value,
          password: password.value
        }
      )
    if (loginUserError) {
        alert('Incorrect Email or Password')
        return window.location='http://localhost:5500/Login.html'
      }
      if (token) {
        alert('You have successfully logged in, Redirecting')
        localStorage.setItem('jwt', token)
        localStorage.setItem('userEmail', email.value)
        window.location.href ='http://localhost:5500/index.html' // BUG we need to redirect with headers authorization set to token
      }
    } catch (error) {
      console.error('Error in user log in', error)
      alert('Error while logging')
    }
  })
