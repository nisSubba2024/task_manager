import { TaskManager } from "./taskManager.js";
import { ManageTasks } from "./manageTasks.js";
const getId = document.getElementById('id');
const getTitle = document.getElementById('title');
const getDescription = document.getElementById('description');
const getDate = document.getElementById('date');
const btn = document.getElementById('save-btn');
const output = document.getElementById('output');
const modelBtn = document.getElementById('model-btn');
const openModel = document.querySelector('.model');
const blurBackground = document.getElementById('blur');
const cancelBtn = document.getElementById('cancel-btn');
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
});
cancelBtn.addEventListener('click', () => {
    openModel.classList.add('model');
    blurBackground.classList.remove('blur-bg');
});
btn.addEventListener('click', () => {
    const id = parseInt(getId.value, 10);
    const title = getTitle.value;
    let description = getDescription.value;
    const date = new Date(getDate.value);
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
});
function createCard(task) {
    const oldCard = document.getElementById('card-grid');
    if (oldCard) {
        oldCard.remove();
    }
    const card = document.createElement('div');
    card.classList.add('card');
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = task.title;
    card.appendChild(cardTitle);
    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.textContent = task.description;
    card.appendChild(cardDescription);
    const cardDate = document.createElement('p');
    cardDate.classList.add('card-date');
    cardDate.textContent = `Due: ${task.date.toLocaleString()}`;
    card.appendChild(cardDate);
    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group');
    const cardComplete = document.createElement('button');
    cardComplete.classList.add('card-complete');
    cardComplete.textContent = 'Complete';
    cardComplete.addEventListener('click', () => {
        tasks.completeTask(task.id);
        displayAllTasks();
    });
    buttonGroup.appendChild(cardComplete);
    const cardDelete = document.createElement('button');
    cardDelete.classList.add('card-delete');
    cardDelete.textContent = 'Delete';
    cardDelete.addEventListener('click', () => {
        tasks.deleteTask(task.id);
        displayAllTasks();
    });
    buttonGroup.appendChild(cardDelete);
    card.appendChild(buttonGroup);
    return card;
}
function displayAllTasks() {
    const getGrid = document.querySelector('.card-grid');
    if (getGrid) {
        getGrid.remove();
    }
    const cardGrid = document.createElement('div');
    cardGrid.classList.add('card-grid');
    for (const task of tasks.tasks) {
        const card = createCard(task);
        cardGrid.appendChild(card);
    }
    output.appendChild(cardGrid);
}
