export interface TaskModel {
  id: number;
  title: string;
  description: string;
  status: string;
  assignedTo: string;
}

export const TaskStatuses = ['To Do', 'In Progress', 'Done', 'Review'];

export const TaskStatusColors: { [key: string]: string } = {
  'To Do': '#f44336', // Red
  'In Progress': '#2196f3', // Blue
  Done: '#4caf50', // Green
  Review: '#ff9800', // Orange
};
