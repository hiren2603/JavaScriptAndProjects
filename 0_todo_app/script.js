const main = document.querySelector('#main')
const inputContainer = document.querySelector('#input_container') 
const title = document.getElementById('todo');
const descContainer = document.querySelector('.description_container')
const description = document.getElementById('description')

descContainer.addEventListener('click', function(){
  title.style.visibility = 'visible';
  description.style.display = "flex";
  // todo.focus()
})
// main.addEventListener('click', function(){
//   todo.style.visibility = 'hidden'
// })
const clearIcon = document.querySelector('.fa-xmark');
console.log(clearIcon)
  clearIcon.addEventListener('click', function(event){
  document.getElementById('search').value =""
})

const notes_list = document.querySelector("#notes_list")
const todoList = [];

todo.addEventListener("keyup", (event)=>{
  if(event.key == 'Enter' && event.target.value !=''){
    todoList.push(event.target.value)
    const todoContainer = document.createElement('div');
    const todoTitle = document.createElement('h4');
    todoContainer.classList.add("todo_container")
    todoTitle.innerText = event.target.value;
    todoContainer.appendChild(todoTitle)
    notes_list.appendChild(todoContainer)
    console.log(todoList)
    todo.value =""
  }
})

const showTodos = ()=>{
  todoList.forEach(item => {
    const todoContainer = document.createElement('div');
    const todoTitle = document.createElement('h4');
    todoContainer.classList.add("todo_container")
    todoTitle.innerText = item;
    todoContainer.appendChild(todoTitle)
    notes_list.appendChild(todoContainer)
  });
}



