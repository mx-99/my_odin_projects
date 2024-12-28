export function getTaskById(taskId) {
  const task = localStorage.getItem(`task_${taskId}`);
  
  if (task) {
    return JSON.parse(task);
  } else {
    console.log(`Task with ID ${taskId} does not exist.`);
    return null;
  }
}
