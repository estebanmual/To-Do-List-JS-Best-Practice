function clearCompletedTasks(tasks) {
  const completedTasks = tasks.filter((tasksCompleted) => tasksCompleted.completed === true);
  completedTasks.forEach((element) => {
    tasks.splice(element.index, 1);
    tasks.forEach((el, i) => {
      el.index = i;
    });
  });
  return tasks;
}
module.exports = clearCompletedTasks;