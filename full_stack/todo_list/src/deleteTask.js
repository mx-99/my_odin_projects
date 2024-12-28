import { displayTask } from "./displayTask";
export function deleteTask(taskId) {
  const taskKey = `task_${taskId}`;
  const task = localStorage.getItem(taskKey);
  
  if (task) {
    localStorage.removeItem(taskKey); // Remove task from localStorage
    console.log(`Task with ID ${taskId} has been deleted.`);
    alert(`Task with ID ${taskId} has been deleted.`)
    displayTask(); 
  } else {
    console.log(`Task with ID ${taskId} not found.`);
  }
}

export function deleteAllTasks() {
  // Loop through all items in localStorage and remove those that start with "task_"
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).startsWith("task_")) {
      localStorage.removeItem(localStorage.key(i));
    }
  }
  console.log("All tasks have been deleted.");
}


export function displayDeleteTaskButton(){
  const deleteTaskDiv = document.getElementById("deleteTaskDiv")
  deleteTaskDiv.innerHTML =`
  <button class="delete">Delete Task</button>
  ` 
  const deleteTaskButton = document.querySelector(".delete")
      deleteTaskButton.addEventListener('click', (event) => {
      const taskId = prompt("Enter the task id to delete");

       if (taskId) {
        deleteTask(taskId);
      }
    });
}
