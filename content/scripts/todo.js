document.addEventListener('DOMContentLoaded', function() {
    var tasks = document.getElementById('tasks');
    savedTasks = localStorage.getItem("tasks");

    if (savedTasks !== null) {
        tasks.innerHTML = savedTasks;
    }

    setupClickEvents();

  }, false)

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
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

        setupClickEvents();

    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('push');
    const sound = document.getElementById('clickaddSound');

    button.addEventListener('click', () => {
        sound.play();
        // Re-cue the sound to the beginning (so that you can play it again):
        sound.currentTime = 0;
        saveTasks();
    });
});

function saveTasks () {
    var tasks = document.getElementById('tasks').innerHTML;
    // localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("tasks", tasks);
}

function setupClickEvents() {
    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }

    const sounddel = document.getElementById('clickdeleteSound');
    for (const button of document.getElementsByClassName('delete')){
        button.addEventListener('click', () => {
            sounddel.play();
            sounddel.currentTime = 0;

            saveTasks();
        });
    }

}