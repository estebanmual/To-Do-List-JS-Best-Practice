const updateCompleted = require('./__mocks__/updateCompleteItem.js');

const localStorage = [
  {
    index: 0,
    completed: false,
    description: 'Add your first task 0',
  },
  {
    index: 1,
    completed: true,
    description: 'This task is complete 1',
  },
];

describe(('Check if completed propertie of task change'), () => {
  it(('Check if I can change completed boolean of task index 0 to true'), () => {
    expect((updateCompleted(localStorage, 0, true))).toEqual([
      {
        index: 0,
        completed: true,
        description: 'Add your first task 0',
      },
      {
        index: 1,
        completed: true,
        description: 'This task is complete 1',
      },
    ]);
  });
});