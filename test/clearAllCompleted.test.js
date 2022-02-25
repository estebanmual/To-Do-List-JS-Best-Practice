const clearCompletedTasks = require('./__mocks__/clearAllCompleted.js');

const localStorage = [
  {
    index: 0,
    completed: false,
    description: 'Add your first task false',
  },
  {
    index: 1,
    completed: true,
    description: 'This task is complete true',
  },
  {
    index: 2,
    completed: false,
    description: 'Add your first task false',
  },
  {
    index: 3,
    completed: true,
    description: 'This task is complete true',
  },
];

describe(('check if clearAllCompleted function'), () => {
  it.only(('check if all tasks that has the property completed = true are removed'), () => {
    expect(clearCompletedTasks(localStorage)).toEqual([{
      index: 0,
      completed: false,
      description: 'Add your first task false',
    },
    {
      index: 1,
      completed: false,
      description: 'Add your first task false',
    },
    ]);
  });
});