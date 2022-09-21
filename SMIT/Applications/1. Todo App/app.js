function addTodo() {
    var todo_item = document.getElementById("todo-item");

    // Create li tag with text node 
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    var list = document.getElementById("list")
    list.appendChild(li)

    // Create edit Btn
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")
    li.appendChild(editBtn)



    // Create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.appendChild(delText)
    delBtn.setAttribute("onclick", "deleteItem(this)")
    li.appendChild(delBtn)



    todo_item.value = ""
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter edit value", val)
    e.parentNode.firstChild.nodeValue = editValue
}


function deleteItem(e) {
    e.parentNode.remove()
}

// Create delete all btn
function deleteAll() {
    list.innerHTML = ""
}


