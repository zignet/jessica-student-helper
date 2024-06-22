// Add avent for when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    initToDo();
  }, false)

  // Add avent for when user clicks the Add ToDo button
document.querySelector('#push').onclick = function() {
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

        document.querySelector('#newtask input').value = "";

        setupClickDeleteEvents();
    }
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
    savedTasks = localStorage.getItem("tasks");

    if (savedTasks !== null) {
        tasks.innerHTML = savedTasks;
    }

    setupClickDeleteEvents();
}

function saveTasks () {
    var tasks = document.getElementById('tasks').innerHTML;
    localStorage.setItem("tasks", tasks);
}

function setupClickDeleteEvents() {
    const sounddel = document.getElementById('clickdeleteSound');

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            sounddel.play();
            sounddel.currentTime = 0;

            saveTasks();

            this.parentNode.remove();
        }
    }


}