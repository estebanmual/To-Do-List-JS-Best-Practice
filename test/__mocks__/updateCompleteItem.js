function updateCompleted(tasks, id, checked) {
  tasks.forEach((element) => {
    if (checked === true) {
      if (id === element.index) {
        element.completed = true;
      }
    } else if (checked === false) {
      tasks.forEach((element) => {
        if (id === element.index) {
          element.completed = false;
        }
      });
    }
  });
  return tasks;
}

module.exports = updateCompleted();