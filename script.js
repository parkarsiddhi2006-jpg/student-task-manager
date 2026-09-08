const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Load saved tasks when the page opens
loadTasks();

addButton.addEventListener("click", function () {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    createTask(task, false);

    taskInput.value = "";
});

function createTask(task, completed) {

    const listItem = document.createElement("li");

    listItem.style.listStyleType = "none";
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    // Bullet
    const bullet = document.createElement("span");
    bullet.textContent = "•";

    // Task text
    const taskText = document.createElement("span");
    taskText.textContent = task;

    // If task was already completed
    if (completed) {
        taskText.classList.add("complete");
    }

    // Checkbox functionality
    checkbox.addEventListener("change", function () {
        taskText.classList.toggle("complete");

        saveTasks();
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "auto";

    deleteButton.addEventListener("click", function () {
        listItem.remove();

        saveTasks();
    });

    // Add everything
    listItem.appendChild(checkbox);
    listItem.appendChild(bullet);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    // Save tasks
    saveTasks();
}


// Save all tasks
function saveTasks() {

    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(function (listItem) {

        const checkbox = listItem.querySelector('input[type="checkbox"]');
        const taskText = listItem.querySelectorAll("span")[1];

        tasks.push({
            text: taskText.textContent,
            completed: checkbox.checked
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// Load saved tasks
function loadTasks() {

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(function (task) {
        createTask(task.text, task.completed);
    });
}