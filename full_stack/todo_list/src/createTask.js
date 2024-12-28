import { format } from 'date-fns';
let uniqueId = parseInt(localStorage.getItem("uniqueId")) || 0;

export function createTask(title, description, dueDate, priority, notes) {
  localStorage.setItem("uniqueId", uniqueId);
  uniqueId++; 
  const formattedDueDate = format(new Date(dueDate), 'yyyy-MM-dd');
  const formattedCreatedAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  return {
    id: uniqueId,
    title: title,
    description: description,
    dueDate: formattedDueDate,
    priority: priority,
    notes: notes,
    createdAt: formattedCreatedAt,
    isCompleted: false,
    markAsCompleted() {
      this.isCompleted = true;
    },
    updateNotes(newNotes) {
      this.notes = newNotes;
    },
    getTaskDetails() {
      return {
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        priority: this.priority,
        notes: this.notes,
        createdAt: this.createdAt,
        isCompleted: this.isCompleted,
      };
    },
  };
}

