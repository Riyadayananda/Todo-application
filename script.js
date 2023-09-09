// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const completedList = document.getElementById('completedList');

// Function to edit a task
function editTask(li, taskText) {
    const editText = prompt('Edit task:', taskText);
    if (editText !== null) {
        taskText = editText.trim();
        li.querySelector('span').textContent = taskText;
    }
}

// Function to mark a task as completed
function markAsCompleted(li) {
    const taskText = li.querySelector('span').textContent;
    li.remove();
    const completedLi = document.createElement('li');
    completedLi.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">-</button>
    `;
    completedList.appendChild(completedLi);

    // Delete completed task
    const deleteButton = completedLi.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        completedLi.remove();
    });
}

// Add task to the list
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="edit">✎</button>
            <button class="complete">✔</button>
            <button class="delete">-</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';

        // Edit task
        const editButton = li.querySelector('.edit');
        editButton.addEventListener('click', () => {
            editTask(li, taskText);
        });

        // Mark task as completed
        const completeButton = li.querySelector('.complete');
        completeButton.addEventListener('click', () => {
            markAsCompleted(li);
        });

        // Delete task
        const deleteButton = li.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        const username = localStorage.getItem('username');

        if (username) {
            // Display the username in the welcome message
            const usernamePlaceholder = document.getElementById('usernamePlaceholder');
            usernamePlaceholder.textContent = username;

            // Add animation to the welcome message
            const welcomeMessage = document.getElementById('welcomeMessage');
            welcomeMessage.style.opacity = 1;
            welcomeMessage.style.transform = 'translateY(0)';
        }
    }
});
