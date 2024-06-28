document.getElementById('add-button').addEventListener('click',addTask);
document.getElementById('todo-input').addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
      addTask
    }
})
function addTask(){
    const taskText = document.getElementById('todo-input').value;
    if(taskText === '')
        return;

const taskItem = document.createElement('li');
taskItem.className = 'todo-item';
taskItem.textContent = taskText;
const deleteButton = document.createElement('button');
deleteButton.className = 'delete-button';
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', function(){
    taskItem.remove()
})
taskItem.appendChild(deleteButton)
document.getElementById('todo-list').appendChild(taskItem)
document .getElementById('todo-input').value = '';
}