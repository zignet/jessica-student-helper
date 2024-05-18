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
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('push');
    const sound = document.getElementById('clickaddSound');
    
    button.addEventListener('click', () => {
        sound.play();
    });    
});