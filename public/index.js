deleteSVG='<button id="delete" class="btn btn-dark">Delete</button>'
editSVG=  '<button id="edit" class="btn btn-light">Edit</button>'
 updateSVG = ' <button id="update" class= "btn btn-danger">update</button>'


const userText=document.querySelector("#addcomment")
const addbtn=document.querySelector("#addbutton")
const commentsection=document.querySelector(".commentsection")

let arr=[]
let counter=0;
const uri='http://localhost:5500/testimonials'

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
      'Content-Type': 'application/json'
    }
  }
  try {
    const response = await fetch(uri, options)
    const data = await response.json()
    if (Array.isArray(data)) {
      data.forEach(t => {
        addlist(t.title, t._id)
      })
    }
  } catch(err) 
{
    console.error(err.message)
  }
})

const saveComment= async title =>{
  const options={
    method: 'POST',
    headers:{
      "Content-Type" : 'application/json'
    },
    body: JSON.parse(title)
  }

  try{
    const response = await fetch(uri, options)
    const data = await response.json()
  }
  catch(err){
    console.error(err.message)
  }
}


 //fuction for deleting Id from array
 deleteComment=(id)=>{
  const index= arr.findIndex(title=> title.id===id)
  if(index!== -1)
  arr.splice(index, 1)
  saveComment(arr)

}
const editComment = (id, newtext) => {
  const index = arr.findIndex(title => title.id === id)
  if (index !== -1) arr[index].title = newtext
  saveComment(arr)
}

const addlist = inputText=>{
    if (!inputText){
        alert("Comment section is Empty")
         return;}
    


const mainDiv=document.createElement("div")
    mainDiv.classList.add("list");
    
//updiv for commentbox repetition
 const updiv= document.createElement("li")
  updiv.innerText=inputText
  updiv.classList.add("newlist")
  mainDiv.appendChild(updiv);
 //const textId =mainDiv.getAttribute("id", getId())

  //span for edit and delete button repetition
 const edit  = document.createElement("span");
  edit.innerHTML= editSVG
  edit.classList.add("editbutton")
  mainDiv.appendChild(edit)

  edit.addEventListener("click", (event)=>{
    //userText.value=inputText
    updiv.focus()
    updiv.contentEditable="true"
    event.target.addEventListener("click",()=>{
      const updated=document.createElement("update")
      updated.innerHTML= updateSVG
      edit.replaceWith(updated)
      
      mainDiv.appendChild(updated)

      const newtext= document.getElementsByClassName("newlist")
      updated.addEventListener("click",()=>{
       updiv.newtext
       updated.replaceWith(edit);
      
    })
   
  })
   // mainDiv.remove
   updiv.addEventListener("blur", ()=>{
    updiv.contentEditable="false"
  })
  })
const deleted =   document.createElement("span")
 deleted.innerHTML= deleteSVG
 deleted.classList.add("deletebutton")
 mainDiv.appendChild(deleted)

 deleted.addEventListener("click", ()=>{
       mainDiv.remove(),
       deleteComment(id)
     
 })

commentsection.appendChild(mainDiv)
}

addbtn.addEventListener( 'click',(event) => {
    event.preventDefault()
    addlist(userText.value, getId())
  arr.push({
     id: getId(true),
   title: userText.value
  })
  userText.value=''
   saveComment(arr)
   
})
const getId=(isNew)=>{
  if(isNew){
     return (counter++).toString();}
     else{
       return counter;
     }
 } 
