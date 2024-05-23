const taskInput = document.getElementById('task-input');
const listContainer = document.getElementById('list-container');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = taskText;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        taskInput.value = ""; // Clear input field after adding task
        saveData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    if (localStorage.getItem("data")) {
        listContainer.innerHTML = localStorage.getItem("data");
    }
}

function clearAllTasks() {
    listContainer.innerHTML = "";
    localStorage.removeItem("data");
}
showTask();
