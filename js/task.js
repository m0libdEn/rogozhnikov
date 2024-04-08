export function Task(info) {
    this.info = info;
    this.status = false;
    this.id = id++;
    const { getHours, getMinutes, getDate, toLocaleString } = new Date();
    this.date = `${getHours()}:${getMinutes()} ${getDate()} ${toLocaleString('default',{month:'short'})}`;
}

let id = 0;
export let tasks = []

export const createTask = (el) => {  
    // Создание корневого контейнера задания
    let taskContainer= document.createElement('div')
    taskContainer.classList.add('root_task')
  
    // Создание кнопки завершения задания
    let completedButton = document.createElement('button');
    completedButton.classList.add('task__completed')
    completedButton.classList.add('task')
    completedButton.innerHTML = '✔'
  
    // Создание блока информации о задании
    let taskInfo = document.createElement('p')
    taskInfo.classList.add('task__info')
    taskInfo.innerHTML = el.info
  
    // Создание блока дополнительной информации о задании
    let additionalInfoContainer = document.createElement('div')
    additionalInfoContainer.classList.add('task__addintional')
  
    // Создание блока с кнопкой удаления задания
    let deleteButtonWrapper = document.createElement('div')
    deleteButtonWrapper.classList.add('task__button-wrapper')
    let deleteButton = document.createElement('button')
    deleteButton.classList.add('task__deleted');
    deleteButton.classList.add('task')
    deleteButton.innerHTML = 'X';
  
    // Создание блока с датой задания
    let taskDate = document.createElement('p')
    taskDate.classList.add('task__date')
    taskDate.textContent = el.date;
    additionalInfoContainer.appendChild(taskDate);
  
    // Добавление созданных элементов в DOM
    list.appendChild(taskContainer)
    taskContainer.appendChild(completedButton);
    taskContainer.appendChild(taskInfo);
    taskContainer.appendChild(additionalInfoContainer);
    additionalInfoContainer.appendChild(deleteButtonWrapper);
    deleteButtonWrapper.appendChild(deleteButton);
    additionalInfoContainer.appendChild(taskDate);
  
    // Добавление обработчиков событий
    completedButton.addEventListener('click', function(){
      el.status = true
      doneCouter()
      saveTask()
    })
    deleteButton.addEventListener('click', function(){
      el.status?doneCouter(-1):doneCouter(0)
      tasks=tasks.filter(task => task.id!==el.id)
      list.removeChild(taskContainer)
      taskCounter()
      doneCouter()
      saveTask()
    })
  }

export function cleanList() {
    while (list.firstChild) list.removeChild(list.firstChild);
}

export function loadTasks() {
    const storedTasks = getDate('todos');
    if (storedTasks) {
        tasks = storedTasks;
        tasks.forEach(task => createTask(task));
    }
}

export function saveTask() {
    setDate('todos', tasks);
}

function getDate(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setDate(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
