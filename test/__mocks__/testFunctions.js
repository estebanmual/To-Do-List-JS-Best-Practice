/* eslint-disable class-methods-use-this */

export default class CRUD {
  constructor(index, completed, description) {
    this.index = index;
    this.completed = completed;
    this.description = description;
  }

  add(description, tasks) {
    const tasksLength = tasks.length;
    const completedNewTask = false;
    const task = new CRUD(tasksLength, completedNewTask, description);
    if (description !== '') {
      tasks.push(task);
    }
    return tasks;
  }

  removeTaskOfList(tasks, id) {
    tasks.splice(id, 1);
    tasks.forEach((el, i) => {
      el.index = i;
    });
    return tasks;
  }
}

module.exports = CRUD;