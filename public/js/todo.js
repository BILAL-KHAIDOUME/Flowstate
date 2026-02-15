let inputvalue = document.getElementById("inputvalue");
let addtaskbtn = document.getElementById("addtask");
let taskslist = document.getElementById("taskslist");
let notasks = document.getElementById("notasks");

let tasks = [];

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')); 
  if (savedTasks) {
    tasks = savedTasks;  
  }
  rendertasks();  
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));  
}

function rendertasks(){
    taskslist.innerHTML = '';

    if (tasks.length === 0) {
    notasks.classList.remove("hidden") 
  } else {
    notasks.classList.add("hidden") 
  }

    tasks.forEach((task , index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('flex', 'justify-between', 'items-center', 'p-4', 'border', 'border-gray-300', 'rounded-lg', 'mb-3', 'shadow-md');

        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        if (task.completed) {
      taskText.classList.add('line-through', 'text-red-500' );
    }

        const deleteButton = document.createElement('button');
         deleteButton.textContent = 'Delete';
         deleteButton.classList.add('text-red-500', 'ml-4', 'px-3', 'py-2', 'border', 'border-red-500', 'rounded-md', 'hover:bg-red-100');
         deleteButton.addEventListener('click', () => deletetask(index));

         const modifyButton = document.createElement('button');
    modifyButton.textContent = 'Modify';
    modifyButton.classList.add('text-blue-500', 'ml-4', 'px-3', 'py-2', 'border', 'border-blue-500', 'rounded-md', 'hover:bg-blue-100', 'transition-colors');
    modifyButton.addEventListener('click', () => modifyTask(index));

         taskItem.appendChild(taskText);
         taskItem.appendChild(modifyButton);
         taskItem.appendChild(deleteButton);

          taskslist.appendChild(taskItem);

    });
};

    function addtask() {
        const taskText = inputvalue.value.trim();
        if(taskText) {
            const newTask = {text: taskText, completed: false};
            tasks.push(newTask);
            inputvalue.value = '';
            saveTasks(); 
            rendertasks();
        };
    };

    function deletetask(index) {
        tasks.splice(index, 1);
        saveTasks(); 
        rendertasks();
    };

    function modifyTask(index) {
  const newTaskText = prompt('Edit task:', tasks[index].text);  

  if (newTaskText !== null && newTaskText.trim() !== '') {
    tasks[index].text = newTaskText.trim(); 
    saveTasks();  
    rendertasks();  
  }
}

    addtaskbtn.addEventListener('click' , addtask);

    loadTasks();