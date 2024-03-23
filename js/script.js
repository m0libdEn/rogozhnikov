const deleteAll = document.getElementById('deleteAll')
const deleteLast = document.getElementById('deleteLast')
const input = document.getElementById('input')
const add = document.getElementById('add')
const all = document.getElementById('all')
const completed = document.getElementById('completed')
const showAll = document.getElementById('showAll')
const showCompleted = document.getElementById('showCompleted')
const search = document.getElementById('search')

const list = document.getElementById('list')
 
let id = 0
let tasks = [] // массив всех заданий\
let done = 0 // значение выполнененных заданий 
let taskCounter = () => all.innerHTML = tasks.length // cчетчик всех заданий
let doneCouter = () => {
  let counter = 0
  tasks.forEach(el=>el.status===true?counter++:counter+=0)
  completed.innerHTML = counter
}

let cleanList = () => {while(list.firstChild) list.removeChild(list.firstChild)}

function Task(info){
    this.info = info
    this.status = false // задание по дефолту не выполнено
    this.id = id++
}

const createTask = (el) => {  
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
  let currentDate = new Date();
  let formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
  taskDate.textContent = formattedDate;
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
  })
  deleteButton.addEventListener('click', function(){
    el.status?doneCouter(-1):doneCouter(0)
    tasks=tasks.filter(task => task.id!==el.id)
    list.removeChild(taskContainer)
    taskCounter()
    doneCouter()
  })
}



add.addEventListener('click',function(){
    let task = new Task(input.value)
    tasks.push(task)
    createTask(task)
    taskCounter()
})

deleteAll.onclick = () => {
    tasks.length = 0
    cleanList()
    done=0
    doneCouter()
    taskCounter()

}
deleteLast.onclick = () => {
    tasks[tasks.length-1].status?doneCouter(-1):doneCouter(0) 
    tasks.pop()
    list.removeChild(list.lastChild)
    taskCounter()
    doneCouter()
}

showCompleted.addEventListener('click', function(){
  cleanList()
  const completedTasks = tasks.filter(task => task.status)
  completedTasks.forEach(el => createTask(el))
})

showAll.addEventListener('click', function(){
  cleanList()
  tasks.forEach(el=>createTask(el))
})

search.addEventListener('keyup', function(el){
  if (el.code === 'Enter') {
    cleanList()
    const searchTasks = tasks.filter(task => task.info.toLowerCase().includes(search.value.toLowerCase()))
    searchTasks.forEach(el=>createTask(el))
  }
})



