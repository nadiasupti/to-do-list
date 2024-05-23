const taskInput = document.getElementById('task-input');
const listContainer = document.getElementById('list-container');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = taskText;
        /*
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
*/


        // Create a span for the edit button
        let editSpan = document.createElement("span");
        editSpan.innerHTML = "&#9998;";
        editSpan.className = "edit";
        li.appendChild(editSpan);

        // Create a span for the delete button
        let deleteSpan = document.createElement("span");
        deleteSpan.innerHTML = "\u00d7";
        deleteSpan.className = "delete";
        li.appendChild(deleteSpan);

        //li.appendChild(span);
        listContainer.appendChild(li);

        taskInput.value = ""; // Clear input 
        saveData();
    }
}
//adding task after i press  Enter key :)
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

taskInput.addEventListener('keypress', handleKeyPress);

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
