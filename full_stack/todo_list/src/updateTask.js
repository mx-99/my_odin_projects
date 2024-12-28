export function updateTask(taskId, newDetails) {
  const taskKey = `task_${taskId}`;  // Ensure the task key is correctly formatted
  const task = localStorage.getItem(taskKey);

  if (!task) {
    console.log(`Task with ID ${taskId} not found.`);
    return null;  // If the task doesn't exist, return null
  }

  const parsedTask = JSON.parse(task);

  // Update fields only if newDetails contains them
  if (newDetails.title) parsedTask.title = newDetails.title;
  if (newDetails.description) parsedTask.description = newDetails.description;
  if (newDetails.dueDate) parsedTask.dueDate = newDetails.dueDate;
  if (newDetails.priority) parsedTask.priority = newDetails.priority;
  if (newDetails.notes) parsedTask.notes = newDetails.notes;

  // Save the updated task back to localStorage
  localStorage.setItem(taskKey, JSON.stringify(parsedTask));
  console.log(`Task with ID ${taskId} has been updated.`);
  return parsedTask;
}

export function displayupdateTaskButton() {
  const updateTaskDiv = document.querySelector("#updateTaskDiv");

  updateTaskDiv.innerHTML = `
    <button class="update">Update Task</button>
    <dialog>
      <form method="dialog">
        <input type="text" id="title" placeholder="Task Title" required>
        <input type="text" id="desc" placeholder="Add Task description" required>
        <input type="date" id="dueDate" required>
        <input type="text" id="priority" placeholder="Add priority low - high" required>
        <input type="text" id="notes" placeholder="Add task notes" required>
        <button type="submit" id="save">Save</button>
      </form>
    </dialog>
  `;

  const updateTaskButton = document.querySelector(".update");
  const dialog = document.querySelector("dialog");
  const closeButton = document.querySelector("#save");

  updateTaskButton.addEventListener('click', (event) => {
    const taskId = prompt("Enter the task id to update");

    // Fetch the task from localStorage and populate the form fields
    const taskKey = `task_${taskId}`;
    const task = localStorage.getItem(taskKey);

    if (task) {
      const parsedTask = JSON.parse(task);

      // Populate the fields with existing task data
      document.getElementById("title").value = parsedTask.title || '';
      document.getElementById("desc").value = parsedTask.description || '';
      document.getElementById("dueDate").value = parsedTask.dueDate || '';
      document.getElementById("priority").value = parsedTask.priority || '';
      document.getElementById("notes").value = parsedTask.notes || '';

      // Show the dialog
      dialog.showModal();

      // Handle form submission for updating the task
      closeButton.addEventListener("click", (event) => {
        event.preventDefault();

        const updatedTask = {
          title: document.getElementById("title").value,
          description: document.getElementById("desc").value,
          dueDate: document.getElementById("dueDate").value,
          priority: document.getElementById("priority").value,
          notes: document.getElementById("notes").value
        };

        // Update the task in localStorage
        updateTask(taskId, updatedTask);

        // Close the dialog
        dialog.close();
      });
    } else {
      alert(`Task with ID ${taskId} not found.`);
    }
  });
}
