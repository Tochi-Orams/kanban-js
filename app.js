const buttonAdd = document.querySelector('.add')
const taskTilte = document.querySelector('#taskTitle')
const listItemsToDo = document.querySelector('.list-items.toDo')
const listItemsComplete = document.querySelector('.list-items.complete')


function createElement(element, className) {
    const newElement = document.createElement(element)
    if(element != 'span') newElement.classList.add(className)
    if(element != 'li') newElement.innerText = className
    return newElement
}

function moveToComplete(taskComplete){
    listItemsComplete.append(taskComplete)
}

function deleteTask() {
    this.parentElement.remove()
}

function addNewTask(){
    if(taskTilte.value != '') {
        const li = createElement('li', 'list-item')
        const span = createElement('span', taskTilte.value)
        const a = createElement('a', 'delete')
        li.append(span, a)
        listItemsToDo.insertBefore(li, taskTilte)
        a.addEventListener('click', deleteTask)
    }
}

buttonAdd.addEventListener('click', addNewTask)
