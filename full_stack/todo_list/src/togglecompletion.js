export function toggleTaskCompletion(taskId, isCompleted) {
    const taskKey = `task_${taskId}`;
    const task = localStorage.getItem(taskKey);
  
    if (task) {
      const parsedTask = JSON.parse(task);
      parsedTask.isCompleted = isCompleted; // Update the completion status
  
      // Save the updated task back to localStorage
      localStorage.setItem(taskKey, JSON.stringify(parsedTask));
      alert(`Task with ID ${taskId} has been marked as ${isCompleted ? 'completed' : 'incomplete'}.`);
    } else {
      console.log(`Task with ID ${taskId} not found.`);
    }
  }
  