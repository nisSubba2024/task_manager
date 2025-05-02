export class TaskManager {
    constructor(id, title, description, date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.isComplete = false;
    }
    getId() {
        return this.id;
    }
    setDescription(description) {
        this.description = description;
    }
    setDate(date) {
        this.date = date;
    }
    setComplete() {
        this.isComplete = true;
        console.log(`${this.title} is complete.`);
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    toString() {
        return `Task ${this.id}:\nTitle: ${this.title}\nDescription: ${this.description}\nDate: ${this.date.toLocaleString()}\nisComplete: ${this.isComplete}`;
    }
}
