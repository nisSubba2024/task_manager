import { ManageTasks} from "./manageTasks.js";
import { TaskManager } from "./taskManager.js";

export const testTasks = new ManageTasks();

interface Task {
    id: number;
    title: string;
    description: string;
    date: string;
}

const data: Task[] = [
    {
        id: 1,
        title: "Go to store",
        description: "Buy milk, banana",
        date: "2025-02-01T08:30:00"
    },
    {
        id: 2,
        title: "Morning workout",
        description: "30-minute cardio session",
        date: "2025-02-01T06:00:00"
    },
    {
        id: 3,
        title: "Team meeting",
        description: "Discuss project milestones",
        date: "2025-02-01T10:00:00"
    },
    {
        id: 4,
        title: "Code review",
        description: "Review PRs in GitHub",
        date: "2025-02-01T11:15:00"
    },
    {
        id: 5,
        title: "Lunch with Sarah",
        description: "At downtown cafe",
        date: "2025-02-01T12:30:00"
    },
    {
        id: 6,
        title: "Client call",
        description: "Update on Q1 deliverables",
        date: "2025-02-01T14:00:00"
    },
    {
        id: 7,
        title: "Write blog post",
        description: "Topic: Async in JavaScript",
        date: "2025-02-01T16:00:00"
    },
    {
        id: 8,
        title: "Grocery shopping",
        description: "Eggs, spinach, chicken",
        date: "2025-02-01T17:30:00"
    },
    {
        id: 9,
        title: "Dinner prep",
        description: "Cook pasta and salad",
        date: "2025-02-01T18:30:00"
    },
    {
        id: 10,
        title: "Read book",
        description: "Continue 'Atomic Habits'",
        date: "2025-02-01T20:00:00"
    }
]

for (const task of data) {
    const {id, title, description, date} = task;
    const newTask = new TaskManager(id, title, description, new Date(date))
    testTasks.addTask(newTask);
}

testTasks.displayTasks();
