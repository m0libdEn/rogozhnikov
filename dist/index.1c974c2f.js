const deleteAll = document.getElementById("deleteAll");
const deleteLast = document.getElementById("deleteLast");
const input = document.getElementById("input");
const add = document.getElementById("add");
const all = document.getElementById("all");
const completed = document.getElementById("completed");
const showAll = document.getElementById("showAll");
const showCompleted = document.getElementById("showCompleted");
const search = document.getElementById("search");
const list = document.getElementById("list");
let id = 0;
let tasks = [] // массив всех заданий\
;
let done = 0 // значение выполнененных заданий 
;
let taskCounter = ()=>all.innerHTML = tasks.length // cчетчик всех заданий
;
let doneCouter = ()=>{
    let counter = 0;
    tasks.forEach((el)=>el.status === true ? counter++ : counter += 0);
    completed.innerHTML = counter;
};
let cleanList = ()=>{
    while(list.firstChild)list.removeChild(list.firstChild);
};
function Task(info) {
    this.info = info;
    this.status = false // задание по дефолту не выполнено
    ;
    this.id = id++;
}
const createTask = (el)=>{
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("root_task");
    let completedButton = document.createElement("button");
    completedButton.classList.add("task__completed");
    completedButton.innerHTML = "\u2714";
    let taskInfo = document.createElement("p");
    taskInfo.classList.add("task__info");
    taskInfo.innerHTML = el.info;
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("task__deleted");
    deleteButton.innerHTML = "X";
    list.appendChild(taskContainer);
    taskContainer.appendChild(completedButton);
    taskContainer.appendChild(taskInfo);
    taskContainer.appendChild(deleteButton);
    completedButton.addEventListener("click", function() {
        el.status = true;
        doneCouter();
    });
    deleteButton.addEventListener("click", function() {
        el.status ? doneCouter(-1) : doneCouter(0);
        tasks = tasks.filter((task)=>task.id !== el.id);
        list.removeChild(taskContainer);
        taskCounter();
        doneCouter();
    });
};
add.addEventListener("click", function() {
    let task = new Task(input.value);
    tasks.push(task);
    createTask(task);
    taskCounter();
});
deleteAll.onclick = ()=>{
    tasks.length = 0;
    cleanList();
    done = 0;
    doneCouter();
    taskCounter();
};
deleteLast.onclick = ()=>{
    tasks[tasks.length - 1].status ? doneCouter(-1) : doneCouter(0);
    tasks.pop();
    list.removeChild(list.lastChild);
    taskCounter();
    doneCouter();
};
showCompleted.addEventListener("click", function() {
    cleanList();
    const completedTasks = tasks.filter((task)=>task.status);
    completedTasks.forEach((el)=>createTask(el));
});
showAll.addEventListener("click", function() {
    cleanList();
    tasks.forEach((el)=>createTask(el));
});
search.addEventListener("keyup", function(el) {
    if (el.code === "Enter") {
        cleanList();
        const searchTasks = tasks.filter((task)=>task.info.toLowerCase().includes(search.value.toLowerCase()));
        searchTasks.forEach((el)=>createTask(el));
    }
});

//# sourceMappingURL=index.1c974c2f.js.map
