const buttonAdd = document.querySelector('.add')
const listItemsToDo = document.querySelector('.list-items.toDo')

function createElement(element, className) {
    const newElement = document.createElement(element)
    newElement.classList.add(className)
    newElement.innerText = 'value'
    return newElement
}

function addNewTask(){
    const li = createElement('li','list-item')
    listItemsToDo.insertBefore(li,buttonAdd)
}

buttonAdd.addEventListener('click', addNewTask)