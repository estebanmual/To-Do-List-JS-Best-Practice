import getTasks from './tasks.js';
import threeDots from '../../assets/three-dots.svg';
import deleteIcon from '../../assets/delete.svg';
import editIcon from '../../assets/editIcon.svg';
import CRUD from './crud.js';
import checkboxesFunc from './update-completed.js';

function addTaskToHTML(task) {
  const tasksList = document.querySelector('.tasks-list');
  const taskElement = document.createElement('li');

  taskElement.innerHTML = `
  <span><input type="checkbox" name="checkbox" class="checkbox" id="${task.index}"><p class="task-description" id="${task.index}">${task.description}</p></span> <span><img src="${editIcon}" class="edit-icon" id="${task.index}" alt="edit icon"><img src="${deleteIcon}" class="delete-icon" id="${task.index}" alt="delete icon"><img src="${threeDots}" alt="three dots"><span>
  `;

  tasksList.appendChild(taskElement);
}

export default function displaytasks() {
  const tasks = getTasks();
  const tasksList = document.querySelector('.tasks-list');
  tasksList.innerHTML = '';
  tasks.forEach((element) => {
    addTaskToHTML(element);
  });

  const deleteIcon = document.querySelectorAll('.delete-icon');
  deleteIcon.forEach((element) => {
    element.addEventListener('click', (f) => {
      CRUD.removeTaskOfList(f);
      f.target.parentElement.parentElement.remove();
    });
  });

  CRUD.updateTaskOfList();
  checkboxesFunc();
}