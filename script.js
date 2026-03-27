//states: ongoing, done
const tasks = [];

//adding task
//form event Listener
const addForm = document.getElementById("add");
addForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let task = createTask(getTitle());
  tasks.push(task);
  render(tasks);
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
function render(tasks){
  const tasksContainer = document.getElementById("task-container");
  tasksContainer.innerHTML = '';

  
  tasks.forEach((tk)=>{
const taskHolder = document.createElement("div");
taskHolder.classList.add("task");    

    

taskHolder.innerHTML = `
      <input type="checkbox" class="done-marker checkbox-round" id="done-marker" ${tk.state==='done'?'checked':''}>
       <div class="task-content">
         <p class="task-text ${tk.state==='done'?'done':''}">${tk.title}</p>
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

//done marker
const tasksContainer = document.getElementById("task-container");

tasksContainer.addEventListener("click", (e)=>{
  if(e.target.classList.contains("done-marker")){
    //find parent text content
    let task = e.target.parentElement.querySelector(".task-text");
    //change style
    task.classList.toggle("done");
    //find it in tasks
    let idx = tasks.findIndex((tk)=> tk.title === task.textContent);
    if(idx !== -1){
      if(tasks[idx].state === "ongoing") tasks[idx].state = "done";
      else tasks[idx].state = "ongoing";
    }
  }
});

//Filtering system
const allBtn = document.getElementById("all");
const ongoingBtn = document.getElementById("on-going");
const doneBtn = document.getElementById("done");

allBtn.addEventListener('click', ()=>{
  //render all tasks
  render(tasks);
});
ongoingBtn.addEventListener('click', ()=>{
  const ongoingtasks = tasks.filter((tk)=> tk.state === 'ongoing');
  render(ongoingtasks);
});
doneBtn.addEventListener('click', ()=>{
  const donetasks = tasks.filter((tk)=> tk.state === 'done');
  render(donetasks);
});