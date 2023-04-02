let darkmode = document.querySelector('#darkmode');
let lightmode = document.querySelector('#lightmode');
let newTask = document.querySelector('#new-task');
let taskAdded = document.querySelector('.task-added');
let container = document.querySelector('.container');

// add dark and light mode 

darkmode.addEventListener('click', darkTheme);
lightmode.addEventListener('click', lightTheme)

function darkTheme() {
    container.classList.add('darkmode');
}

function lightTheme() {
    container.classList.remove('darkmode');
} 


// create new task

newTask.addEventListener('keydown', (e) => {

    if(e.keyCode === 13) {

        // create elements

        let taskBox = document.createElement('div');
        taskBox.classList = 'task-box';

        let checkBox = document.createElement('div');
        checkBox.id = 'check-box';

        let checkIcon = document.createElement('img');
        checkIcon.classList = 'check-icon';
        checkIcon.src = './images/icon-check.svg';
        checkBox.appendChild(checkIcon);

        let taskDts = document.createElement('p');
        taskDts.id = 'task-dts';
        taskDts.innerHTML = e.target.value;

        let deleteBtn = document.createElement('img');
        deleteBtn.classList = 'deletebtn';
        deleteBtn.src = './images/icon-cross.svg';

        // append elements
        if(newTask != '') {
            taskBox.appendChild(checkBox);
            taskBox.appendChild(taskDts);
            taskBox.appendChild(deleteBtn);
            taskAdded.appendChild(taskBox);
        }
        
        

        // clear the input box for a new input
        newTask.value = '';
    }

   

    // add complete view to task
    let taskBox = document.querySelectorAll('.task-box');
    taskBox.forEach(function(task)  {
        task.addEventListener('click', taskComplete);

        function taskComplete(e) {
            if(e.target.matches('#check-box')) {
                task.classList.toggle('complete'); 
                console.log(1)
            }
        }
    });


    // remove task mobile

    let deleteBtn = Array.from(document.querySelectorAll('.deletebtn'));

    deleteBtn.forEach(function(btn) {
        btn.addEventListener('click', removeTask);

        function removeTask(e) {
            let task = e.target.parentElement;
            let taskAdded = document.querySelector('.task-added')

            taskAdded.removeChild(task)
        }
        // task count
        let taskCount = document.querySelector('#all-items');
        taskCount.innerText = taskBox.length + ' items left';
    }) 
    



    // clear completed task 
    let clearCompleted = document.querySelector('#clear-completed');
    clearCompleted.addEventListener('click', removeCompleted);

    function removeCompleted() {
        let taskBox = Array.from(document.querySelectorAll('.task-box'));
        taskBox.forEach(function(task) {
            if(task.classList.contains('complete')) {
                let taskAdded = document.querySelector('.task-added');
                taskAdded.removeChild(task);

            }
        })

        let taskCount = document.querySelector('#all-items');
        taskCount.innerText = taskBox.length + ' items left';

    }


    // filter all task

    let allTask = document.querySelector('#all');
    allTask.addEventListener('click', filterAll);
    function filterAll() {
    let taskBox = Array.from(document.querySelectorAll('.task-box'));
    taskBox.forEach(function(task) {
        task.style.display = 'flex';
    })
    let taskCount = document.querySelector('#all-items');
    taskCount.innerText = taskBox.length + ' items left';
    }



    // filter active task

    let activeTask = document.querySelector('#active');
    activeTask.addEventListener('click', filterActive);
    function filterActive() {
        let taskBox = Array.from(document.querySelectorAll('.task-box'));
        taskBox.forEach(function(task) {
            if(task.classList.contains('complete')) {
                taskBox.id = 'taskcomplete';
                task.style.display = 'none';
            } else {
                task.style.display = 'flex'
            }
        })
    }



    //filter completed

    let completedTask= document.querySelector('#completed');
    completedTask.addEventListener('click', filterComplete );
    function filterComplete() {
        let taskBox = Array.from(document.querySelectorAll('.task-box'));
        taskBox.forEach(function(task) {
            if(task.classList.contains('complete')) {
                task.style.display = 'flex';
               
            } else {
                task.style.display = 'none'
            }

            // task count
            let taskCount = document.querySelector('#all-items');
            taskCount.innerText = taskBox.length + ' items left';
        })
       
    }


    
 
     
 
   
})





   //let checkBox = Array.from(document.querySelectorAll('#check-box'));
    
