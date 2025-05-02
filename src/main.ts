import { TaskManager } from "./taskManager.js";
import { ManageTasks } from "./manageTasks.js";
import { testTasks } from './test.js'


const getId: HTMLInputElement = <HTMLInputElement>document.getElementById('id');
const getTitle: HTMLInputElement = <HTMLInputElement>document.getElementById('title');
const getDescription: HTMLInputElement = <HTMLInputElement>document.getElementById('description');
const getDate: HTMLInputElement = <HTMLInputElement>document.getElementById('date');
const btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('save-btn');
const output: HTMLDivElement = <HTMLDivElement>document.getElementById('output');
const modelBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('model-btn');
const openModel: HTMLDivElement = <HTMLDivElement>document.querySelector('.model');
const blurBackground: HTMLDivElement = <HTMLDivElement>document.getElementById('blur');
const cancelBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('cancel-btn');


const tasks = new ManageTasks();
const todayDate = new Date();

getDate.setAttribute('min', todayDate.toISOString().slice(0, 16));

// To test Tasks, uncomment code below
// const tasks = testTasks;
// displayAllTasks();
// end test


modelBtn.addEventListener('click', () => {
    openModel.classList.toggle('model');
    blurBackground.classList.toggle('blur-bg');
})

cancelBtn.addEventListener('click', () => {
    openModel.classList.add('model');
    blurBackground.classList.remove('blur-bg');
})

btn.addEventListener('click', () => {
    const id: number = parseInt(getId.value, 10);
    const title: string = getTitle.value;
    let description: string = getDescription.value;
    const date: Date = new Date(getDate.value);

    if (id && title && date) {
        if (!description) {
            description = '';
        }

        const task = new TaskManager(id, title, description, date);
        tasks.addTask(task);

        tasks.displayTasks();

        displayAllTasks();
    }

    openModel.classList.add('model');
    blurBackground.classList.remove('blur-bg');

})

function createCard(task: TaskManager): HTMLElement {
    const oldCard: HTMLDivElement = <HTMLDivElement>document.getElementById('card-grid');
    if (oldCard) {
        oldCard.remove();
    }

    const card: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    card.classList.add('card');

    const cardTitle: HTMLHeadingElement = <HTMLHeadingElement>document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = task.title;
    card.appendChild(cardTitle);

    const cardDescription: HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.textContent = task.description;
    card.appendChild(cardDescription);

    const cardDate: HTMLParagraphElement = <HTMLParagraphElement>document.createElement('p');
    cardDate.classList.add('card-date');
    cardDate.textContent = `Due: ${task.date.toLocaleString()}`;
    card.appendChild(cardDate);

    const buttonGroup: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    buttonGroup.classList.add('button-group');
    const cardComplete: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    cardComplete.classList.add('card-complete');
    cardComplete.textContent = 'Complete';
    cardComplete.addEventListener('click', () => {
        tasks.completeTask(task.id);
        displayAllTasks();
    })

    buttonGroup.appendChild(cardComplete);

    const cardDelete: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    cardDelete.classList.add('card-delete');
    cardDelete.textContent = 'Delete';

    cardDelete.addEventListener('click', () => {
        tasks.deleteTask(task.id);
        displayAllTasks();
    })

    buttonGroup.appendChild(cardDelete);


    card.appendChild(buttonGroup);

    return card;
}

function displayAllTasks() {

    const getGrid: HTMLDivElement = <HTMLDivElement>document.querySelector('.card-grid');

    if (getGrid) {
        getGrid.remove();
    }

    const cardGrid: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    cardGrid.classList.add('card-grid');

    for (const task of tasks.tasks) {
        const card: HTMLElement = createCard(task);
        cardGrid.appendChild(card);
    }

    output.appendChild(cardGrid);


}





