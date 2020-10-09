
document.addEventListener('DOMContentLoaded', function() {
    var tasklist = new Array();
    document.querySelector('input[type="submit"]').onclick = function(){
 
  var tsktitle = document.getElementById("taskTitle").value;
  var priority = document.getElementById("priority");
  var status = document.getElementById("Status");
 
  const tsk = new Object();
  tsk.title = tsktitle;
  tsk.priority =priority;
  tsk.status = status;
  tsk.id = tasklist.length;
    
  
  tasklist.push(tsk)
  document.getElementById("taskTitle").value = "";
  document.getElementById("priority").value = 4 ;
  document.getElementById("Status").value ="";

  const list_item = document.createElement('li') 
    let arrayId = tsk.id;
    let inputValue = tsk.title;
    let html_to_apprend = `
             <span id ="${arrayId}">  ${inputValue} </span>
            <button class="remove"> \u00D7 </button>
    `
 list_item.innerHTML = html_to_apprend;
 document.querySelector("#todo").append(list_item);
 
  

}
}

)