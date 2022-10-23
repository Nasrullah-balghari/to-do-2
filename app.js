let text = document.getElementById("text");
var li;
function add(){
    if(text.value !== ""){
    let list = document.getElementById("list");
    let li = document.createElement("li");
    let node = document.createTextNode(text.value);
    let delet = document.createElement("button");
    let edit = document.createElement("button");
    let deleteNode = document.createTextNode("delete")
    let editNode = document.createTextNode("edit")
    delet.appendChild(deleteNode);
    edit.appendChild(editNode);
    li.appendChild(node);
    li.appendChild(delet)
    li.appendChild(edit)
    list.appendChild(li)
    text.value = ""  
    text.focus();
    delet.setAttribute("onclick","delett()")
    edit.setAttribute("onclick","editt()")
    li.className = "liClass"
    delet.className = "li_btn"
    edit.className = "li_edit_btn"
    }else {
        swal("Please write something!");
    }
}
function delett(){
    event.target.parentNode.remove();
    
}
function editt(){
    let oldValue = prompt("Enter updated value");
    event.target.parentNode.firstChild.nodeValue = oldValue;
    console.log(oldValue)
}


function deleteall(){
list.innerHTML ="";
}
// console.log(list)