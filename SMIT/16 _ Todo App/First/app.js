var field = document.getElementById('field')
var ul = document.getElementById('ul')

function addbtn() {
    var list = document.createElement('li')
    var text = document.createTextNode(field.value)
    list.appendChild(text)
    ul.appendChild(list)
    var attrlist = list.setAttribute('style', 'font-size:25px')
    var attrliststyle = list.setAttribute('style','list-style:none')
    field.value = ''

    // Edit btn in li
    var editbtn = document.createElement('button')
    var edittext = document.createTextNode('Edit')
    editbtn.appendChild(edittext)
    list.appendChild(editbtn)
    var attredit = editbtn.setAttribute('onclick', 'editbtn(this)')

    // Delete btn in li
    var delbtn = document.createElement('button')
    var deltext = document.createTextNode("Delete")
    delbtn.appendChild(deltext)
    list.appendChild(delbtn)
    var attrdel = delbtn.setAttribute('onclick', 'deletebtn(this)')
}

function editbtn(e) {
    var val = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
}

function deletebtn(e) {
    e.parentNode.remove()
}

function deleteallbtn() {
    ul.innerHTML = ''
}