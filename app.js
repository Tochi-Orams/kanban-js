const buttonAddNewTask = document.querySelector('.add')
const taskTilte = document.querySelector('#taskTitle')
const boxContainTaskComplete = document.querySelector('.task.complete')
const listTaskToDo = document.querySelector('.list-items.toDo')
const listTaskComplete = document.querySelector('.list-items.complete')
const buttonEdit = `<svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="svg edit">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                    </svg>`
const buttonDelete = `<svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="svg delete">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>`
const buttonSave = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svg save">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>`


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
    newElement.classList.add( element == 'li' || element == 'div' || element == 'button' ? className : element)
    if(element.includes('span') || element.includes('svg')) newElement.innerHTML = className
    return newElement
}

const createNewTask = () => {
    if(taskTilte.value != '') {
        const li = createElement('li', 'list-item')
        const containTaskTitle = createElement('div', 'contain')
        const span = createElement('span', taskTilte.value)
        /*
        TO DO :  Refactor this code by using fontawesome
        const input = createElement('input', taskTilte.value)
        const editContainer = createElement('button', 'contain')
        const svgEdit = createElement('svg', buttonEdit)
        const svgEditSave = createElement('svg', buttonSave)
        const svgDelete = createElement('svg', buttonDelete)
        const svgSave = createElement('svg', buttonSave)


        // disposition of all element in the task and value default
        editContainer.append(svgEdit,svgEditSave)
        containTaskTitle.append(span, input)
        hiddenTwofirstElement([svgEditSave, input])
        li.append(containTaskTitle, editContainer, svgDelete, svgSave)
        listTaskToDo.insertBefore(li, taskTilte)

        // task functionnality : delete, complete and edit
        svgDelete.addEventListener('click', deleteTask)
        svgSave.addEventListener('click', moveToComplete)
        svgEdit.addEventListener('click', editTitleTask)
        svgEditSave.addEventListener('click', editTitleTask)
        */
        //test of the draggable functionnality
        li.setAttribute("draggable","true")
    }
}

buttonAddNewTask.addEventListener('click', createNewTask)