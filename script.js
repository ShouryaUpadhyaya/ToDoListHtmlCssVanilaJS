let addTaskButtons = document.getElementsByClassName("add");
const mainTask = document.getElementById("mainTask");
const subtaskTemplate = document.getElementById("templateSubtask");
const list = document.getElementById("taskList");
const removeTasklist = document.querySelectorAll(".remove");
let addTaskArray = Array.from(addTaskButtons);
let newaddButtonIndex = 0;
addTaskArray.forEach((addTaskButton) => {
  addTaskButton.addEventListener("click", (e) => {
    addTaskList();
    checkForNewerAddButtons();
  });
});
function checkForNewerAddButtons() {
  let addTaskButtons = document.getElementsByClassName("add");
  let addTaskArray = Array.from(addTaskButtons);
  let newaddButton = addTaskArray[newaddButtonIndex];
  newaddButtonIndex = newaddButtonIndex + 1;
  newaddButton.addEventListener("click", (e) => {
    let li = e.target.parentNode;
    addSubTask(li);
  });
}
function addTaskList(addTaskButton) {
  let mainTaskDiv = mainTask.cloneNode(true);
  let tempLi = mainTaskDiv.firstElementChild;
  tempLi.classList.remove("hidden");
  list.appendChild(mainTaskDiv);
}

function addSubTask(li) {
  console.log(subtaskTemplate);
  let mainTaskDiv = li.parentNode;
  console.log(mainTaskDiv);
  let subtask = subtaskTemplate.cloneNode(true);
  subtask.classList.remove("hidden");
  console.log(subtask);
  // mainTaskDiv.appendChild(subtask);
  // tempLi.classList.remove("hidden");
  mainTaskDiv.appendChild(subtask);
}
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentNode.remove();
  }
});
// add subtasks
// add event listner to new add button after addition of list
// add drag and change positions
// add a pomodoro at the bottom
// add save progress to text
