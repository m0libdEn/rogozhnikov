import {Task, createTask, saveTask, loadTasks, cleanList, tasks} from './task.js'
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
let done = 0 // значение выполнененных заданий 
let taskCounter = () => all.innerHTML = tasks.length // cчетчик всех заданий
let doneCouter = () => {
  let counter = 0
  tasks.forEach(el=>el.status===true?counter++:counter+=0)
  completed.innerHTML = counter
}
function getDate(key){
  return JSON.parse(localStorage.getItem(key))
}
function setDate(key,data){
  localStorage.setItem(key, JSON.stringify(data))
}

add.addEventListener('click',function(){
    let task = new Task(input.value)
    tasks.push(task)
    createTask(task)
    taskCounter()
    saveTask()
})

deleteAll.onclick = () => {
    tasks.length = 0
    cleanList()
    done=0
    doneCouter()
    taskCounter()
    saveTask();

}
deleteLast.onclick = () => {
    tasks[tasks.length-1].status?doneCouter(-1):doneCouter(0) 
    tasks.pop()
    list.removeChild(list.lastChild)
    taskCounter()
    doneCouter()
    saveTask();
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

window.addEventListener('load', function() {
  loadTasks(tasks);
});