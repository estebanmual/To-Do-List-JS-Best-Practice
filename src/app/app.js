import displayTasks from './utils/display-task.js';
import CRUD from './utils/crud.js';
import clearCompletedTasks from './utils/clear-all-completed.js';

displayTasks();
const inputAdd = document.getElementById('add-input');
inputAdd.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    CRUD.add(inputAdd, e);
    displayTasks();
  }
});

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
  clearCompletedTasks();
  displayTasks();
});