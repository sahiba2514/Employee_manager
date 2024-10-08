document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value;

    if (taskValue) {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskValue;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        // Add event listener for delete functionality
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        // Append delete button to the list item
        li.appendChild(deleteButton);

        // Add the new task to the task list
        document.getElementById('taskList').appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});
const attendanceList = document.getElementById('attendanceList');
const taskList = document.getElementById('taskList');

// Event listener for login button
document.getElementById('loginButton').addEventListener('click', function() {
    const employeeName = document.getElementById('employeeName').value;

    if (employeeName) {
        // Record attendance
        const attendanceItem = document.createElement('li');
        attendanceItem.textContent = `${employeeName} logged in on ${new Date().toLocaleString()}`;
        attendanceList.appendChild(attendanceItem);

        // Clear the input field
        document.getElementById('employeeName').value = '';
    } else {
        alert('Please enter your name.');
    }
});

// Event listener for add task button
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value;

    if (taskValue) {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskValue;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        // Add event listener for delete functionality
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        // Append delete button to the list item
        li.appendChild(deleteButton);

        // Add the new task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});
