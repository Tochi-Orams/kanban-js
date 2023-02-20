const buttonAddNewTask = document.querySelector('.add')
const taskTilte = document.querySelector('#taskTitle')
const boxContainTaskComplete = document.querySelector('.task.complete')
const listTaskToDo = document.querySelector('.list-items.toDo')
const listTaskComplete = document.querySelector('.list-items.complete')
const buttonEdit = `<i class="fa-brands fa-github-square"></i>`


boxContainTaskComplete.classList.add('hidden')

let taskToDrop;

const dragstart_handler = (ev) => taskToDrop = ev.target

const dragover_handler = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

const drop_handler = (ev) => {
    ev.preventDefault()
    ev.target.parentElement.appendChild(taskToDrop);
}

const removeClassHidden = (element) => element.classList.remove('hidden')

const addClassHidden= (element) => element.classList.add('hidden')

const hiddenTwofirstElement = (params) => params.forEach((element, index) => index < 2 ? addClassHidden(element) : removeClassHidden(element));

const editTitleTask = () => {
    const firstGrandChildOfGrandsParent = event.target.parentElement.parentElement.firstElementChild.firstElementChild
    const lastGrandChildOfGrandsParent = event.target.parentElement.parentElement.firstElementChild.lastElementChild
    if(event.target.nextElementSibling) {
        lastGrandChildOfGrandsParent.value = firstGrandChildOfGrandsParent.innerHTML
        hiddenTwofirstElement([event.target, firstGrandChildOfGrandsParent, event.target.nextElementSibling, lastGrandChildOfGrandsParent])
    } else {
        firstGrandChildOfGrandsParent.innerHTML = lastGrandChildOfGrandsParent.value
        hiddenTwofirstElement([event.target, lastGrandChildOfGrandsParent, event.target.previousElementSibling, firstGrandChildOfGrandsParent])
    }
}

const moveToComplete = () => {
    listTaskComplete.append(event.target.parentElement)
    hiddenTwofirstElement([event.target, event.target.previousElementSibling.previousElementSibling, boxContainTaskComplete])
}

const deleteTask = () => {
    event.target.parentElement.remove()
    if(listTaskComplete.childElementCount === 0 ) boxContainTaskComplete.classList.add('hidden')
}

const createElement = (element, className) => {
    const newElement = document.createElement(element)
    newElement.classList.add( element === 'li' || element === 'div' ? className : element)
    if(element.includes('span') || element.includes('button') ) newElement.innerHTML = className
    return newElement
}

const createNewTask = () => {
    if(taskTilte.value != '') {
        const li = createElement('li', 'list-item')
        const containTaskTitle = createElement('div', 'contain')
        const span = createElement('span', taskTilte.value)
        const input = createElement('input', taskTilte.value)
        const buttonEdit = createElement('button', fontawesome)
        const buttonDelete = createElement('button', fontawesome)
        const buttonSave = createElement('button', fontawesome)


        // disposition of all element in the task and value default
        containTaskTitle.append(span, input)
        li.append(containTaskTitle, buttonEdit, buttonDelete, buttonSave)
        listTaskToDo.insertBefore(li, taskTilte)

        // task functionnality : delete, complete and edit
        buttonDelete.addEventListener('click', deleteTask)
        buttonSave.addEventListener('click', moveToComplete)
        buttonEdit.addEventListener('click', editTitleTask)
        
        //test of the draggable functionnality
        li.setAttribute("draggable","true")
    }
}

buttonAddNewTask.addEventListener('click', createNewTask)