// /src/displayTask.js
import { deleteTask } from "./deleteTask";
import { toggleTaskCompletion } from "./togglecompletion";
export function displayTask() {
  const tasks = [];
  
  // Loop through localStorage to get all tasks
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("task_")) {
      const task = JSON.parse(localStorage.getItem(key));
      tasks.push(task);
    }
  }

  // Display tasks in the UI
  const taskContent = document.getElementById("taskcontent");
  taskContent.innerHTML = tasks.map(task => `
    <div class="task" id="task_${task.id}">
    <h1><strong>Task ID:</strong> ${task.id}</h1>
      <h3>Task title: ${task.title}</h3>
      <p>Desc: ${task.description}</p>
      <p>Due: ${task.dueDate}</p>
      <p>Priority: ${task.priority}</p>
      <p>Notes: ${task.notes}</p>
      <p>Created: ${task.createdAt}</p>
      <label>
        Completed:
        <input type="checkbox" class="complete-checkbox" data-task-id="${task.id}" ${task.isCompleted ? 'checked' : ''}>
      </label>
      <button class="delete-button" data-task-id="${task.id}">Delete Task</button>    
      </div>
  `).join('');

  // Add event listeners to checkboxes for toggling task completion
  document.querySelectorAll(".complete-checkbox").forEach(checkbox => {
    checkbox.addEventListener("change", (event) => {
      const taskId = event.target.getAttribute("data-task-id");
      toggleTaskCompletion(taskId, event.target.checked);
    });
  });

    document.querySelectorAll(".delete-button").forEach(button => {
    button.addEventListener("click", (event) => {
      const taskId = event.target.getAttribute("data-task-id");
      deleteTask(taskId); // Delete task from localStorage
      const taskElement = document.getElementById(`task_${taskId}`);
      if (taskElement) {
        taskElement.remove(); // Remove task element from the UI
      }
    });
  });
}
