// document.addEventListener('DOMContentLoaded', () => {
//     const taskList = document.getElementById('task-list');
//     const newTaskInput = document.getElementById('new-task');
//     const addTaskButton = document.getElementById('add-task-button');

//     const saveTasks = (tasks) => {
//         localStorage.setItem('tasks', JSON.stringify(tasks));
        
//     }; // saving tasks at the end

//     const getSavedTasks = () => {
//         const tasks = localStorage.getItem('tasks');
//         return tasks ? JSON.parse(tasks) : [];
//     }; //getting tasks

//     const renderTasks = () => {
//         console.log("rendering")
//         const tasks = getSavedTasks();
//         console.log(tasks);
//         console.log(typeof tasks)
//         taskList.innerHTML = '';
//         console.log(tasks.length)
//         if(tasks.length) {
//             tasks.forEach((task, index) => {
//                 const li = document.createElement('li');
//                 const taskText = document.createElement('span');
//                 taskText.textContent = task;
//                 li.appendChild(taskText);

//                 const editButton = document.createElement('button');
//                 editButton.textContent = 'Edit';
//                 editButton.onclick = () => editTask(index);
//                 li.appendChild(editButton);
    
//                 const deleteButton = document.createElement('button');
//                 deleteButton.textContent = 'Delete';
//                 deleteButton.onclick = () => deleteTask(index);
//                 li.appendChild(deleteButton);
    
//                 taskList.appendChild(li);
//             });
//         }
//     };

//     const addTask = () => {
//         const task = newTaskInput.value.trim();
//         if (task) {
//             const tasks = getSavedTasks();
//             console.log(typeof tasks)
//             tasks.push(task);
//             saveTasks(tasks);
//             newTaskInput.value = '';
//             renderTasks();
//         }
//     };

//     const editTask = (index) => {
//         const tasks = getSavedTasks();
//         const newTask = prompt('Edit your task', tasks[index]);
//         if (newTask) {
//             tasks[index] = newTask;
//             saveTasks(tasks);
//             renderTasks();
//         }
//     };

//     const deleteTask = (index) => {
//         const tasks = getSavedTasks();
//         tasks.splice(index, 1);
//         saveTasks(tasks);
//         renderTasks();
//     };

//     addTaskButton.addEventListener('click', addTask);
//     renderTasks();
// });







document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');

    const saveTasks = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const getSavedTasks = () => {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    };

    const renderTasks = () => {
        const tasks = getSavedTasks();
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            const taskText = document.createElement('span');
            taskText.textContent = task;
            li.appendChild(taskText);

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = () => editTask(index);
            li.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteTask(index);
            li.appendChild(deleteButton);

            taskList.appendChild(li);
        });
    };

    const addTask = () => {
        const task = newTaskInput.value.trim();
        if (task) {
            const tasks = getSavedTasks();
            tasks.push(task);
            saveTasks(tasks);
            newTaskInput.value = '';
            renderTasks();
        }
    };

    const editTask = (index) => {
        const tasks = getSavedTasks();
        const newTask = prompt('Edit your task', tasks[index]);
        if (newTask) {
            tasks[index] = newTask;
            saveTasks(tasks);
            renderTasks();
        }
    };

    const deleteTask = (index) => {
        const tasks = getSavedTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
    };

    addTaskButton.addEventListener('click', addTask);
    renderTasks();
});