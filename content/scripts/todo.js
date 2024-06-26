//
// Javascripts for to-do list page
//

// Adds event for when the page is loaded
document.addEventListener('DOMContentLoaded', initToDo, false)

// retreaves tasks saved in local storage and displays them
function initToDo () {
    savedTasks = getLocalStorage("tasks");

    if (savedTasks !== null) {
        var tasks = document.getElementById('tasks');
        tasks.innerHTML = savedTasks;
    }
}

function addTask () {
    // if a task is added without content a pop up is displayed
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Kindly Enter Task Name!!!!")
        return
    }

    // adding a new task to the list on the page
    document.querySelector('#tasks').innerHTML = document.querySelector('#tasks').innerHTML + `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete" onclick="deleteTask(this)">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>`;
    // saves  task and clears input box
    saveTasks();
    document.querySelector('#newtask input').value = "";

    playSound('clickaddSound');
}


function saveTasks () {
    var tasks = document.getElementById('tasks').innerHTML;
    setLocalStorage("tasks", tasks);
}

// called from the delete button and will remove the whole html relating to the corresponding task
function deleteTask(button) {
    button.parentNode.remove();
    saveTasks();

    playSound('clickdeleteSound');
}
