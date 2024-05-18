//add fuctionality top add new task
let addTaskButtons = document.getElementsByClassName("add");
const liTemplate = document.getElementById("tempLi");
const list = document.getElementById("taskList");
const removeTasklist = document.querySelectorAll(".remove");
// console.log(removeTasklist);
let addTaskArray = Array.from(addTaskButtons);
addTaskArray.forEach((addTaskButton) => {
  console.log(addTaskButton);
  addTaskButton.addEventListener("click", (e) => {
    let tempLi = liTemplate.cloneNode(true);
    tempLi.classList.remove("hidden");
    console.log(e.target);
    list.appendChild(tempLi);
    checkForNewerAddButtons();
  });
});
function checkForNewerAddButtons() {
  let addTaskButtons = document.getElementsByClassName("add");
  let addTaskArray = Array.from(addTaskButtons);
}
function addTaskList(addTaskButton) {
  let tempLi = liTemplate.cloneNode(true);
  tempLi.classList.remove("hidden");
  console.log(addTaskButton.parentNode);
  list.appendChild(tempLi);
}

function deleteTask() {
  let lastLi = ol.lastChild;
  console.log();
  list.removeChild(lastLi);
}
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentNode.remove();
  }
});
// add subtasks
// add drag and change positions
// add a pomodoro at the bottom
// add save progress to text
