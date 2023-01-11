const buttonAdd = document.querySelector('.add')
const listItemsToDo = document.querySelector('.list-items.toDo')

function createElement(element, className) {
    const newElement = document.createElement(element)
    if(className) newElement.classList.add(className)
    if(element != 'li') newElement.innerText = className
    return newElement
}

function deleteTask() {
    this.parentElement.remove()
}

function addNewTask(){
    const li = createElement('li', 'list-item')
    const span = createElement('sapn', 'span')
    const a = createElement('a', 'delete')
    li.append(span, a)
    listItemsToDo.insertBefore(li,buttonAdd)
    a.addEventListener('click', deleteTask)
}


buttonAdd.addEventListener('click', addNewTask)

//const buttonDelete = document.querySelector('.delete')
console.log(listItemsToDo.childNodes)
//buttonDelete.addEventListener('click', deleteTask)