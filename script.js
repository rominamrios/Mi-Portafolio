document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        if (task === '') return;

        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
    }
});
