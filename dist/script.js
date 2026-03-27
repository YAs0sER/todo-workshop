//states: ongoing, done
const tasks = [];

//adding task
//form event Listener
const addForm = document.getElementById("add");
addForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let task = createTask(getTitle());
  tasks.push(task);
  render();
});

function getTitle(){
  const input = document.getElementById("task-input");
  const title = input.value.trim();
  input.value = '';
  return title;
}
function createTask(title){
  let task = {
    title: title,
    state: "ongoing"
  }
  return task;
}

// render tasks
function render(){
  const tasksContainer = document.getElementById("task-container");

  
  tasks.forEach((tk)=>{
const taskHolder = document.createElement("div").classList.add("task");
taskHolder.innerHTML = `
      <input type="checkbox" class="done-marker checkbox-round" id="done-marker">
       <div class="task-content">
         <p class="task-text">${tk.title}</p>
       </div>
     <button class="delete" id="del-btn">
       <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 11V17" stroke="#FF5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11V17" stroke="#FF5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 7H20" stroke="#FF5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#FF5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#FF5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     </button>`;
tasksContainer.appendChild(taskHolder);
  });

}
