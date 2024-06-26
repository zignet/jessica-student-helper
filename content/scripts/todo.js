// Add avent for when the page is loaded
document.addEventListener('DOMContentLoaded', initToDo, false)

function initToDo () {
    savedTasks = getLocalStorage("tasks");

    if (savedTasks !== null) {
        var tasks = document.getElementById('tasks');
        tasks.innerHTML = savedTasks;
    }
}

function addToDo () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Kindly Enter Task Name!!!!")
        return
    }

    document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete" onclick="deleteTask(this)">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

    saveTasks();
    document.querySelector('#newtask input').value = "";

    playSound('clickaddSound');
}

function saveTasks () {
    var tasks = document.getElementById('tasks').innerHTML;
    setLocalStorage("tasks", tasks);
}

function deleteTask(sender) {
    sender.parentNode.remove();
    saveTasks();

    playSound('clickdeleteSound');
}
