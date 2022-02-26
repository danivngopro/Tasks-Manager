export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface GroupTask {
  id?: string;
  groupTaskName: string;
  content: string;
  tasks: [];
}

export interface SubTask {
  id?: string;
  content: string;
}

export interface Task {
  id?: string;
  taskName: string;
  content: string;
  subTasks: [];
} 