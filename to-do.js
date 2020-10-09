var tasklist = new Array();
document.addEventListener('DOMContentLoaded', function() {
 
    document.querySelector('input[type="submit"]').onclick = function(){
 
  var tsktitle = document.getElementById("taskTitle").value;
  var priority = document.getElementById("priority").value;
  var status = document.getElementById("Status");
 
  const tsk = new Object();
  tsk.title = tsktitle;
  tsk.priority =priority;
  tsk.status = status;
  tsk.id = tasklist.length;
    
  
  tasklist.push(tsk)
  document.getElementById("taskTitle").value = "";
  document.getElementById("priority").value = "priority4" ;
  document.getElementById("Status").value ="";

  const list_item = document.createElement('li') 
    let arrayId = tsk.id;
    let inputValue = tsk.title;
    let html_to_apprend = `
             <span id ="${arrayId}">  ${inputValue} </span>
            <button id ="${arrayId}" class="remove"> \u00D7 </button>
    `
 list_item.innerHTML = html_to_apprend;
 list_item.classList.toggle(`${priority}`);
 document.querySelector("#todo").append(list_item);
 return false

}
//monitor clicks form here on
document.addEventListener('click',function(event){
  element=event.target;
  if(element.className === 'remove'){
    tbdelete = element.id;
    delete tasklist[tbdelete];
    element.parentElement.remove();
  } else if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }

})




return false
}

)