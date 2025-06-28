function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
}
