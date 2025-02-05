const apiUrl = '/tasks';

// Carrega as tarefas ao abrir a página
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('task-list');
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.classList.add('task-item');
                if (task.completed) li.classList.add('completed');
                li.innerHTML = `
          <span>${task.description}</span>
          <div>
            <button onclick="deleteTask(${task.id})">Delete</button>
          </div>
        `;
                taskList.appendChild(li);
            });
        });
}

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const task = { description: taskInput.value, completed: false };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }).then(() => {
        taskInput.value = '';
        loadTasks();
    });
});

function deleteTask(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    }).then(() => loadTasks());
}
