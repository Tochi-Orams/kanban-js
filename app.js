const buttonAdd = document.querySelector('.add')
const taskTilte = document.querySelector('#taskTitle')
const taskComplete = document.querySelector('.task.complete')
const listItemsToDo = document.querySelector('.list-items.toDo')
const listItemsComplete = document.querySelector('.list-items.complete')
const buttonEdit = `<svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="svg edit">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                    </svg>`
const buttonDelete = `<svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="svg delete">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>`
const buttonSave = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svg save">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>`


taskComplete.classList.add('hidden')

function createElement(element, className) {
    const newElement = document.createElement(element)
    element == 'li' ? newElement.classList.add(className) : newElement.classList.add(element)
    if( ! (element.includes('li' || 'input'))) newElement.innerHTML = className
    return newElement
}

function editTitleTask() {
    if(this == svgEdit ) {
        edit.classList.remove('hidden')
        text.classList.add('hidden')
    } else {
        edit.classList.add('hidden')
        text.classList.remove('hidden')
    }
}

function moveToComplete(){
    taskComplete.classList.remove('hidden')
    listItemsComplete.append(this.parentElement)
}

function deleteTask() {
    this.parentElement.remove()
    if(listItemsComplete.childElementCount === 0 ) taskComplete.classList.add('hidden')
}

function addNewTask(){
    if(taskTilte.value != '') {
        const li = createElement('li', 'list-item')
        const span = createElement('span', taskTilte.value)
        const input = createElement('input', taskTilte.value)
        const svgEdit = createElement('svg', buttonEdit)
        const svgDelete = createElement('svg', buttonDelete)
        const svgSave = createElement('svg', buttonSave)
        li.append(span, svgEdit, svgDelete, svgSave)
        listItemsToDo.insertBefore(li, taskTilte)
        svgDelete.addEventListener('click', deleteTask)
        svgSave.addEventListener('click', moveToComplete)
        svgEdit.addEventListener('click', editTitleTask)
    }
}

buttonAdd.addEventListener('click', addNewTask)

/* Just a test

function hidden(){
    if(this == btn1 ) {
        btn2.classList.remove('hidden')
        btn1.classList.add('hidden')
        text.classList.add('hidden')
        edit.classList.remove('hidden')
    } else {
        btn1.classList.remove('hidden')
        btn2.classList.add('hidden')
        edit.classList.add('hidden')
        text.classList.remove('hidden')
    }
}

const btn1 = document.querySelector('#text')
const btn2 = document.querySelector('#edit')
const text = document.querySelector('.text')
const edit = document.querySelector('.edit')


btn2.classList.add('hidden')
edit.classList.add('hidden')

btn1.addEventListener('click', hidden)
btn2.addEventListener('click', hidden)

*/
