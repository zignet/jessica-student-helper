// Add avent for when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    initToDo();
  }, false)

  // Add avent for when user clicks the Add ToDo button
document.querySelector('#push').onclick = function() {
    addToDo();

}


function initToDo () {
    const button = document.getElementById('push');
    const sound = document.getElementById('clickaddSound');

    button.addEventListener('click', () => {
        sound.play();
        sound.currentTime = 0;
        saveTasks();
    });

    var tasks = document.getElementById('tasks');
    savedTasks = getLocalStorage("tasks");

    if (savedTasks !== null) {
        tasks.innerHTML = savedTasks;
    }

    setupClickDeleteEvents();
}

function addToDo () {
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        setupClickDeleteEvents();

        saveTasks();

        document.querySelector('#newtask input').value = "";
    }
}

function saveTasks () {
    var tasks = document.getElementById('tasks').innerHTML;
    setLocalStorage("tasks", tasks);
}

function setupClickDeleteEvents() {
    var todo_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<todo_tasks.length; i++){
        todo_tasks[i].onclick = function() {
            const sounddel = document.getElementById('clickdeleteSound');
            sounddel.play();
            sounddel.currentTime = 0;

            this.parentNode.remove();
            saveTasks();
        }
    }


}