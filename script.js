//Greetings Header custom with username
const greetings=document.querySelector(".Greetings");
const addButton=document.querySelector(".addButton")
const taskList=document.querySelector(".taskList")
const input=document.querySelector(".input")

//Creating Greetings
document.addEventListener("DOMContentLoaded",()=>{
    let username=window.prompt("Enter your name");
    const userElement=document.createElement("h1");
    userElement.textContent=`Welcome ${username}`;
    greetings.appendChild(userElement);    
})

//making input color 
input.addEventListener("click",()=>{input.style.border="3px solid yellow"});
input.addEventListener("blur",()=>{input.style.border=""});


//making custimizable button function
function buttonColor(button,fontColor,buttonColor){
    button.style.backgroundColor=buttonColor;
    button.style.color=fontColor;
}


// if condition is added to check that RUN only if addButton element exist in the DOM
if(addButton){
    //making button mouseover effect
addButton.addEventListener("mouseover",()=>buttonColor(addButton,"white","blue"))
addButton.addEventListener("mouseout",()=>buttonColor(addButton,"black","white"))



// To add  input value to the list
function listInputTask(){
    if(input && taskList){
        li=document.createElement("li");
        value=input.value;
        if(input.value!=="") //avoid empty list 
        {
            li.textContent=value;
            taskList.appendChild(li);
            deletebutton(li);
            input.value="";    //clear input after enter
        }
        else{
            alert("Please enter a task!"); 
        }
    }
}
//Execute listInputTask() when either user presses Enter or Add button
addButton.addEventListener("click",listInputTask);
input.addEventListener("keypress",(e)=>{
    if(e.key==="Enter")
    {
        e.preventDefault()
        listInputTask()
    }
})


//Now creating edit button 
//you have to pass "li" so that it deletes the specific row
function deletebutton(li){
    const delButton=document.createElement("button");
    delButton.textContent="Delete"
    li.style.display="flex"
    li.style.alignItems="center"
    li.style.justifyContent="space-between" 
    li.appendChild(delButton);
    
    //execute delButton
    delButton.addEventListener("click",()=>{
        li.remove();});
    delButton.addEventListener("mouseover",()=>buttonColor(delButton,"white","red"))
    delButton.addEventListener("mouseout",()=>buttonColor(delButton,"black","white"))
}

}





