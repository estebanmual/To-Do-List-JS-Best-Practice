function updateCompleted(tasks, id, checked) {
  if (checked === true) {
    tasks.forEach((element) => {
      if (id === element.index) {
        element.completed = true;
      }
    });
  } else if (checked === false) {
    tasks.forEach((element) => {
      if (id === element.index) {
        element.completed = false;
      }
    });
  }

  return tasks;
}

module.exports = updateCompleted;