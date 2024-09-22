const  inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask()
{
    if(inputBox.value === '')
    {
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}

listContainer.addEventListener("click", function(e){
     if(e.target.tagName === "LI"){
        e.target.ClassList.toggle("checked");
        saveData();
     }
     else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
      }
}, false);

// function to save the data
function saveData()
{  // the data literal is storing the current data of the listcontainer 
   localStorage.setItem("data", listContainer.innerHTML);
}

// funciton to again display the previously saved data
function displayTaskData()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

displayTaskData();