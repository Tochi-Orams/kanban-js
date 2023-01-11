const buttonAdd = document.querySelector('.add')
const listItemsToDo = document.querySelector('.list-items.toDo')

function addNewTask(){
    const li = document.createElement('li')
    li.classList.add('list-item')
    li.innerText = 'Task'
    listItemsToDo.insertBefore(li,buttonAdd)
}

buttonAdd.addEventListener('click', addNewTask)