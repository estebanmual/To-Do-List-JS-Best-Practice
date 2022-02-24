import getTasks from './tasks.js';
import checkMark from '../../assets/check-mark.svg';
import editIcon from '../../assets/editIcon.svg';

function Task(index, completed, description) {
  this.index = index;
  this.completed = completed;
  this.description = description;
}

export default class CRUD {
  static add(inputAdd, e) {
    const tasks = getTasks();
    const tasksLength = tasks.length;
    const indexNewTask = tasksLength;
    const completedNewTask = false;
    const task = new Task(indexNewTask, completedNewTask, inputAdd.value);
    if (inputAdd.value !== '') {
      e.preventDefault();
      tasks.push(task);
      localStorage.clear();
      localStorage.setItem('localTasks', JSON.stringify(tasks));
      inputAdd.value = '';
    }
  }

  static removeTaskOfList(f) {
    const tasks = getTasks();
    const tasksIndex = f.target.id;
    f.preventDefault();
    tasks.splice(tasksIndex, 1);
    tasks.forEach((el, i) => {
      el.index = i;
    });
    localStorage.clear();
    localStorage.setItem('localTasks', JSON.stringify(tasks));
  }

  static updateTaskOfList() {
    const taskDescriptionEdit = document.querySelectorAll('.edit-icon');
    taskDescriptionEdit.forEach((element) => {
      element.addEventListener('click', (e) => {
        const tasks = getTasks();
        const taskToSave = e.target.parentElement.previousElementSibling.lastChild;
        const descriptionToSave = e.target.parentElement.previousElementSibling.textContent;
        const saveId = Number(e.target.id);
        tasks.forEach((el) => {
          if (saveId === el.index) {
            el.description = descriptionToSave;
            localStorage.setItem('localTasks', JSON.stringify(tasks));
          }
        });
        taskToSave.toggleAttribute('contenteditable');
        if (taskToSave.hasAttribute('contenteditable')) {
          e.target.src = checkMark;
        } else {
          e.target.src = editIcon;
        }
      });
    });
  }
}
