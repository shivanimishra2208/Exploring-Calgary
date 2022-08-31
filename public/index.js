
deleteSVG='<button id="delete" class="btn btn-dark">Delete</button>'
editSVG=  '<button id="edit" class="btn btn-light">Edit</button>'
 //updateSVG = ' <button id="update" class= "btn btn-danger">update</button>'


const userText=document.querySelector("#addcomment")
const addbtn=document.querySelector("#addbutton")
const commentsection=document.querySelector(".commentsection")
const logout=document.querySelector(".logout")
let arr=[]
let counter=0;
const uri='http://localhost:5500/testimonials'
const JWT_KEY_NAME = 'jwt'

const getJWT = () => localStorage.getItem(JWT_KEY_NAME)
 /*
window.addEventListener('load', () => {
const savedComment= JSON.parse(localStorage.getItem(arr))
if(Array.isArray(savedComment)){
  arr=[...savedComment]
  arr.forEach(t=>{addlist(t.title,t.id)})
  counter= savedComment.length
}
})
  const saveComment=(arr)=>{
    localStorage.setItem("arr",JSON.stringify(arr))
  }*/
 window.addEventListener('load', async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
       //Authorization: getJWT()
    }
  }
  try {
    const response = await fetch(uri, options)
    const data = await response.json()
    if (Array.isArray(data)) {
      data.forEach(t => {
        addlist(t.title, t._id) })
        arr=data
    }
  } catch(err) 
{
    console.error(err.message)
  }
})

const saveComment= async titles =>{
  const options={
    method: 'POST',
    headers:{
      "Content-Type" : 'application/json',
      Authorization: getJWT()
    },
    body: JSON.stringify(titles)
  }

  try{
    const response = await fetch(uri, options)
    const data =  response.json()
    arr=data
    console.log("data", data)
  }
  catch(err){
    console.error(err.message)
  }
}

/*const updateText= async (titles,_id)=>{
  console.log(titles)
  const options={
    method: 'PATCH',
    headers:{
      "Content-Type" : 'application/json'
    },
    body: JSON.stringify(titles)
  }
  try{
    const response = await fetch(`${uri}/${titles._id}`, options)
    const data =  response.json()
      arr=data
      console.log(`${uri}/${titles._id}`)
  }
  catch(err){
    console.error(err.message)
  }
}*/
//function for deleting Id from array
 deleteComment=async id =>{
  const index= arr.findIndex(titles=> titles._id===id)
  if(index!== -1){
   const options={
    method:"DELETE",
    Headers:{
      "Content-Type": 'application/json',
      Authorization: getJWT()
     }
    }
 try {
  const response = await fetch(`${uri}/${id}`, options)
  const data= response.json()
} catch (err) {
  console.error(err.message)
  //arr.splice(index, 1)
  //saveComment(arr)
}
  }
 }

const editComment = async(id, newtext) => {
  const options={
    method: 'PATCH',
    headers:{
      "Content-Type" : 'application/json',
      Authorization: getJWT()
    },
    body: JSON.stringify({title:newtext})
  }

  try{
    const response = await fetch(`${uri}/${id}`, options)
    const data = await response.json()
      arr=data
      console.log(`${uri}/${id}`)
  }
  catch(err){
    console.error(err.message)
  }
}   


const addlist = (inputText,id)=>{
    if (!inputText){
        alert("Comment section is Empty")
         return;}
    
const mainDiv=document.createElement("div")
    mainDiv.classList.add("list");
//updiv for commentbox repetition
const updivtext= document.createElement("li")
updivtext.innerText=inputText
updivtext.setAttribute("id",id)
const textId= updivtext.getAttribute("id")
updivtext.classList.add("newlist")
mainDiv.appendChild(updivtext);
 //const textId =mainDiv.getAttribute("id", getId())

  //span for edit and delete button repetition
  const edit  = document.createElement("span");
  edit.innerHTML= editSVG
  edit.classList.add("editbutton")
  mainDiv.appendChild(edit)

  edit.addEventListener("click", (newtext)=>{
   updivtext.focus()
   updivtext.contentEditable= "true"
   editComment(textId,updivtext.innerText)
    })// mainDiv.remove

   updivtext.addEventListener("blur", ()=>{
    updivtext.contentEditable="false"
    //updateText(textId,updivtext)
  })
  
const deleted =   document.createElement("span")
 deleted.innerHTML= deleteSVG
 deleted.classList.add("deletebutton")
 mainDiv.appendChild(deleted)

 deleted.addEventListener("click", ()=>{
       mainDiv.remove(),
       deleteComment(textId)
         
     
 })

commentsection.appendChild(mainDiv)
}

addbtn.addEventListener( 'click',async(event) => {
    event.preventDefault()
    addlist(userText.value)
   await saveComment({title:{title:userText.value}  })
    .then(titles => {
      userText.value = ''
      arr.push({titles:userText.value,
        id:getId()
      })
     
    })
    .catch(err => console.log(err))
})
const getId=(isNew)=>{
  if(isNew){
     return (counter++).toString();}
     else{
       return counter;
     }
 } 

 
 //logout.addEventListener('submit', e => {
//e.preventDefault()
//localStorage.clear()
//clearCookies(JWT_KEY_NAME)
//window.location.href = 'http://localhost:5500/Login.html'
//// })