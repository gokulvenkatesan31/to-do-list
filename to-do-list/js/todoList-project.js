let inputElement=document.querySelector(".js-input")
let dateinputElement=document.querySelector(".js-date-input")
let timeinputElement=document.querySelector(".js-time-input")

let todoList=JSON.parse(localStorage.getItem("todoList"))||[];
displayValues()
function displayValues(){
    let display='';
    for(let i=0;i<todoList.length;i++){
        const todoObject=todoList[i];
        const {name,date,time}=todoObject;
        let HTML=`<div class="col-5">${name}</div>
                <div class="col-4">${date}</div>
                <div class="col-2">${time}</div>
                <div  class="col-1 pb-1 "><button id="del-button" class="btn-danger js-delete" >delete</button></div>`;
        display+=HTML;
        
    }
    document.querySelector(".js-displayList").innerHTML=display;
    document.querySelectorAll(".js-delete")
    .forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            todoList.splice(index,1);
            displayValues()
        })
    })
        
    localStorage.setItem("todoList",JSON.stringify(todoList));    
    
}

function addTodoList(){
    
    name=inputElement.value;
    date=dateinputElement.value;
    time=timeinputElement.value;
    if(name===""){
        alert("please type a task!!!");
        return(0);
    }
    if(date===""){
        alert("please enter a date!!!");
        return(0);
    }
    if(time===""){
        alert("please enter a time!!!");
        return(0);
    }
    todoList.push({
        name,
        date,
        time
    })
    
    inputElement.value="";
    timeinputElement.value=""
    displayValues()
}

document.querySelector(".js-addBtn").addEventListener('click',()=>{
    addTodoList()
})
inputElement.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        addTodoList()
    }
})
timeinputElement.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        addTodoList()
    }
})
