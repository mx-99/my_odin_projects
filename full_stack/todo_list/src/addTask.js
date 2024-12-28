import {createTask} from "./createTask.js"
import { displayTask } from "./displayTask.js";

export function addTask(title, description, dueDate, priority, notes) {
  const task = createTask(title, description, dueDate, priority, notes);
  const taskId = task.id; // Use uniqueId for task ID
  localStorage.setItem(`task_${taskId}`, JSON.stringify(task)); // Store the task in localStorage
  console.log("Task added successfully!");
  displayTask();
  return task;
}

 export function displayAddTaskButton(){
  const taskDiv = document.querySelector("#addTaskDiv");
    taskDiv.innerHTML = `
      <button class="add">Add Task</button>
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

    const addTaskButton = document.querySelector(".add");

    const dialog = document.querySelector("dialog");
    const closeButton = document.querySelector("#save");

    addTaskButton.addEventListener("click", () => {
      dialog.showModal();
    });

    closeButton.addEventListener("click", (event) => {
      event.preventDefault();
      
      const title = document.getElementById("title").value;
      const description = document.getElementById("desc").value;
      const dueDate = document.getElementById("dueDate").value;
      const priority = document.getElementById("priority").value;
      const notes = document.getElementById("notes").value;

      addTask(title, description, dueDate, priority, notes);

      dialog.close();
    });

  }


 

// Add Task 1
addTask("Buy Groceries", 
        "Purchase vegetables, fruits, and milk from the supermarket.", 
        "2024-12-30", 
        "High", 
        "Make sure to buy organic vegetables.");

// Add Task 2
addTask("Complete Project Report", 
        "Finish writing the final report for the ongoing project.", 
        "2024-12-28", 
        "Medium", 
        "Include the recent data analysis in the report.");

// Add Task 3
addTask("Call the Doctor", 
        "Schedule a doctor's appointment for a check-up.", 
        "2024-12-29", 
        "Low", 
        "Ask about available dates for next week.");

// Add Task 4
addTask("Plan Birthday Party", 
        "Organize the birthday party for John on 2025-01-05.", 
        "2024-12-31", 
        "High", 
        "Book the venue and order cake in advance.");

// Add Task 5
addTask("Prepare for Presentation", 
        "Prepare a 15-minute presentation for the team meeting.", 
        "2024-12-29", 
        "Medium", 
        "Add charts and graphs from the latest results.");

// Add Task 6
addTask("Clean the House", 
        "Do a deep clean of the entire house, including windows and carpets.", 
        "2024-12-30", 
        "Low", 
        "Focus on the living room and kitchen.");

// Add Task 7
addTask("Finish Reading Book", 
        "Complete the current book for the book club discussion.", 
        "2024-12-28", 
        "Medium", 
        "Take notes on the main themes and characters.");

// Add Task 8
addTask("Update Resume", 
        "Update resume with the latest job experience and skills.", 
        "2024-12-31", 
        "High", 
        "Tailor it for the new job opening in marketing.");

// Add Task 9
addTask("Organize Digital Files", 
        "Clean up and categorize all digital files into respective folders.", 
        "2025-01-02", 
        "Low", 
        "Delete old files that are no longer needed.");

// Add Task 10
addTask("Write Blog Post", 
        "Write a blog post about the latest trends in technology.", 
        "2024-12-30", 
        "Medium", 
        "Include statistics and examples from industry leaders.");

// Add Task 11
addTask("Respond to Emails", 
        "Reply to all unread and urgent emails in the inbox.", 
        "2024-12-29", 
        "Medium", 
        "Prioritize emails from clients and supervisors.");

// Add Task 12
addTask("Buy New Laptop", 
        "Research and purchase a new laptop for work.", 
        "2025-01-05", 
        "High", 
        "Focus on laptops with good battery life and performance for coding.");
