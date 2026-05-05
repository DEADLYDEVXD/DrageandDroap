let taskIdCounter = 0;


function addTask() {
    // take input in from the box
    const input = document.getElementById("task-input");
    // to remove space
    const text = input.value.trim();
    // if no input retrun 0
    if (text === "") return;

    const task = createTaskElement(text);
    document.getElementById("todo").appendChild(task);

    input.value = "";
}


function createTaskElement(text) {
    const task = document.createElement("div");
    task.className = "task";
    task.textContent = text;

    const id = "task-" + taskIdCounter++;
    task.id = id;

    task.setAttribute("draggable", true);


    task.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", id);
    });

    return task;
}


const columns = document.querySelectorAll(".column");

columns.forEach((column) => {
    // Allow drop
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    // Handle drop
    column.addEventListener("drop", (e) => {
        e.preventDefault();

        const id = e.dataTransfer.getData("text/plain");
        const task = document.getElementById(id);

        column.appendChild(task);
    });
});