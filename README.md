### What I've Learned

Every element of the DOM is an object and it display only in single place.

For example let's take this code in app.js :

Here we want to displat the taskComplete in the list of the task complete : 

``function moveToComplete(taskComplete){
    listItemsComplete.append(taskComplete)
}``

But in the code below, we delete it after, 

``function deleteTask() {
    moveToComplete(this.parentElement)
    this.parentElement.remove()
}``

So, the task complete doesn't appear in the list of task completed

## TO DO 
[ ] : add features for editing task
[ ] : remove svgEdit and svgSave when task is complete
[ ] : stylized the card-container, list-item