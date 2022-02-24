const CRUD = require('./testFunctions.js');

const task = new CRUD();
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

describe('Checking the add fucntion', () => {
  it(('Check if a task is added to default list'), () => {
    expect((task.add('test 1', localStorage))).toEqual([{
      index: 0,
      completed: false,
      description: 'Add your first task 0',
    },
    {
      index: 1,
      completed: true,
      description: 'This task is complete 1',
    },
    {
      index: 2,
      completed: false,
      description: 'test 1',
    }]);
  });

  it(('Check if a task is added a new list'), () => {
    expect((task.add('test 2', localStorage))).toEqual([{
      index: 0,
      completed: false,
      description: 'Add your first task 0',
    },
    {
      index: 1,
      completed: true,
      description: 'This task is complete 1',
    },
    {
      index: 2,
      completed: false,
      description: 'test 1',
    },
    {
      index: 3,
      completed: false,
      description: 'test 2',
    }]);
  });
});

describe(('Checking remove function'), () => {
  it(('Remove test 1 from list'), () => {
    expect((task.removeTaskOfList(localStorage, 2))).toEqual([{
      index: 0,
      completed: false,
      description: 'Add your first task 0',
    },
    {
      index: 1,
      completed: true,
      description: 'This task is complete 1',
    },
    {
      index: 2,
      completed: false,
      description: 'test 2',
    }]);
  });
});