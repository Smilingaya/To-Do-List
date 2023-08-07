const inputBox=document.getElementById('input-boox');
const listContainer=document.getElementById('list-container');
function addTask(){
    if(inputBox.value===''){
        alert('you must write somthing');
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    dataSave();//save the updated content in the browser//
}
listContainer.addEventListener("click",function(e){

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("cheked");
        dataSave();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        dataSave();
    }
},false)
function dataSave(){
    localStorage.setItem("data",listContainer.innerHTML) //in set item we have to add name so the name is data and aftar that we have to add the value that we want save in our browser//
    //so we have to save a list-container//
}
//next we have to call this save data every time we will add any changes//
//next we have to dusplay this data whenever we will open the website again so to do that we need this function//
function ShowList(){
    listContainer.innerHTML=localStorage.getItem("data");//so it will give all the content stored  in the browser with the name of data//
}
ShowList(); //call the function to work//