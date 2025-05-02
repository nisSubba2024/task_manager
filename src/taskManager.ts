import { Task } from './task.js';

export class TaskManager implements Task {
    id: number;
    title: string;
    description: string;
    date: Date;
    isComplete: boolean;

    constructor(id: number, title: string, description: string, date: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.isComplete = false;
    }

    getId(): number {
        return this.id;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setDate(date: Date): void {
        this.date = date;
    }

    setComplete(): void {
        this.isComplete = true;
        console.log(`${this.title} is complete.`);
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    toString() {
        return `Task ${this.id}:\nTitle: ${this.title}\nDescription: ${this.description}\nDate: ${this.date.toLocaleString()}\nisComplete: ${this.isComplete}`;
    }
}

