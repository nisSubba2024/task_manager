
# Task Manager

A simple Task Manager application built using TypeScript, which allows users to manage tasks by adding, deleting, completing tasks, and viewing them in a user-friendly interface. The application supports features such as task sorting, task completion, and a modal-based input interface for adding tasks.

## Features

- **Add Tasks**: Create new tasks with a title, description, and due date.
- **Delete Tasks**: Remove tasks from the active task list.
- **Complete Tasks**: Mark tasks as completed and remove them from the active list.
- **Task Sorting**: Tasks are automatically sorted by due date, ensuring tasks are displayed in chronological order.
- **Modal Input Interface**: A clean and intuitive modal interface for adding new tasks.
- **Responsive Design**: Ensures a pleasant user experience across different screen sizes.

## Files Overview

- **`main.ts`**: The entry point for the task manager application. Handles user input, UI interactions, and calls functions to manipulate tasks.
- **`taskManager.ts`**: Defines the `TaskManager` class which manages task data and includes methods for adding, completing, and deleting tasks.
- **`manageTasks.ts`**: Contains the `ManageTasks` class, which holds the task list, handles sorting, adding, and removing tasks, and displays tasks in the console for testing.
- **`task.ts`**: Defines the `Task` interface that each task object follows, including properties and methods for managing task data.
- **`test.ts`**: (Optional) Contains test data for testing purposes. Uncomment code to use this for mock task data instead of real user input.


## How to Use

1. **Adding Tasks**: Click on the "Add Task" button (model button) to open a modal, then fill in the task details (ID, title, description, and due date). Click "Save" to add the task to the list.
2. **Marking Tasks as Complete**: For any task, click the "Complete" button to mark it as completed. The task will be moved to the completed tasks list.
3. **Deleting Tasks**: You can delete any task by clicking the "Delete" button next to the task.
4. **View Tasks**: All tasks will be displayed in the main section with their titles, descriptions, and due dates. Completed tasks will be managed separately.

## Classes and Methods

### TaskManager

The `TaskManager` class handles individual tasks. It implements the `Task` interface, which includes methods for setting and getting the title, description, date, and completion status of the task.

#### Methods:
- **`getId()`**: Returns the task ID.
- **`getTitle()`**: Returns the task title.
- **`setTitle(title: string)`**: Sets the task title.
- **`setDescription(description: string)`**: Sets the task description.
- **`setDate(date: Date)`**: Sets the due date for the task.
- **`setComplete()`**: Marks the task as completed.
- **`toString()`**: Returns a string representation of the task.

### ManageTasks

The `ManageTasks` class manages a collection of `TaskManager` objects. It supports adding, deleting, sorting tasks, and displaying tasks in the console.

#### Methods:
- **`addTask(task: TaskManager)`**: Adds a new task to the task list.
- **`deleteTask(id: number)`**: Deletes a task by its ID.
- **`sortTasks()`**: Sorts tasks by their due date.
- **`completeTask(id: number)`**: Marks a task as completed and removes it from the active task list.
- **`displayTasks()`**: Displays all active tasks in the console.
- **`displayCompletedTasks()`**: Displays all completed tasks in the console.
