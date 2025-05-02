import { TaskManager } from './taskManager.js';

export class ManageTasks {
    tasks: Array<TaskManager>;
    completedTasks: Array<TaskManager>;

    constructor() {
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(task: TaskManager) {
        for (const oldTask of this.tasks) {
            if (oldTask.id === task.id) {
                console.log(`${task.id} already exists, please add a new task.`)
                return;
            }
        }

        this.tasks.push(task);
        this.sortTasks();
        console.log(`${task.id} added to the tasks list`);
    }

    displayTasks(): void {
        console.log("\n================== Incomplete tasks ====================");
        for (const task of this.tasks) {
            console.log(task.toString());
            console.log("**************************************************");
        }
        console.log("================== End ====================");
    }

    deleteTask(id: number): boolean {
        for (const task of this.tasks) {
            if (task.id === id) {
                const taskIndex = this.tasks.indexOf(task);
                this.tasks.splice(taskIndex, 1);
                console.log(`${id} deleted from tasks.`);
                this.completedTasks.push(task);
                return true;
            }
        }
        console.log(`${id} is not in the tasks.`);
        return false;
    }

    sortTasks(): void {
        for (let i: number = 0; i < this.tasks.length; i++) {
            for (let j: number = 0; j < this.tasks.length - 1; j++) {
                if (this.tasks[j].date > this.tasks[j + 1].date) {
                    const tempTask: TaskManager = this.tasks[j];
                    this.tasks[j] = this.tasks[j + 1];
                    this.tasks[j + 1] = tempTask;
                }
            }
        }
    }

    taskExist(id: number): number {
        for (const task of this.tasks) {
            if (task.id === id) {
                return this.tasks.indexOf(task);
            }
        }

        return -1;
    }

    completeTask(id: number): void {
        const index = this.taskExist(id);
        if (index !== -1) {
            this.tasks[index].setComplete();
            this.deleteTask(id);
        } else {
            console.log(`${id} is not in the tasks.`);
        }
    }

    isEmpty(): boolean {
        return this.tasks.length === 0;
    }

    displayCompletedTasks(): void {
        console.log("\n================== Completed Task ====================");
        for (const task of this.completedTasks) {
            console.log(task.toString());
            console.log("**************************************************");
        }
        console.log("================== End ====================");
    }
}

// const tasks = new ManageTasks();
// const task1 = new TaskManager(1, 'Go to store', 'Buy milk, banana', new Date(2025, 1, 1, 8, 30));
// const task4 = new TaskManager(4, '20', 'Same old task', new Date(2025, 1, 1, 3, 30));
// const task5 = new TaskManager(5, '20', 'Same old task', new Date(2024, 1, 1, 3, 30));
// const task6 = new TaskManager(7, 'Go to store', 'Buy milk, banana', new Date(2025, 1, 1, 8, 30));
//
// tasks.addTask(task1);
// tasks.addTask(task4);
// tasks.addTask(task5);
// tasks.addTask(task6);
//
// tasks.displayTasks();
//
// tasks.completeTask(5);
//
// tasks.displayTasks();
//
// tasks.displayCompletedTasks();