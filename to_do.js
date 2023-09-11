btn1.addEventListener("click",add_task);
clear.addEventListener("click",clear_list);
list.addEventListener("click",remove_item)



function add_task(){
    if (input.value==="") {
        alert("input can't be empty");
        return 1;
    }
   let new_li = document.createElement("li");
   new_li.innerHTML=`<p>${input.value}</p><div><button class="btn2">delete</button> <button class="btn3">completed</button></div>`;
  list.appendChild(new_li);
  input.value="";
  saveData();
  return 1;
}


function clear_list(){

    list.innerHTML="";
    saveData();
    return 1;
}

function remove_item(e){
  // console.log(e.target.parentElement.previousElementSibling);

  if (e.target.className==="btn2") {
    e.target.parentElement.parentElement.remove();
    saveData();
  } else if (e.target.className==="btn3") {
    e.target.parentElement.previousElementSibling.classList.toggle("checked");
    saveData()
  }
}


function saveData(){

  localStorage.setItem("data",list.innerHTML);

}

function showTasks (){
  list.innerHTML=localStorage.getItem("data")
}

showTasks();