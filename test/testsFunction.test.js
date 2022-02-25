const CRUD = require('./__mocks__/testFunctions.js');

const task = new CRUD();

let localStorage = [
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

beforeEach(() => {
  localStorage = [
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
});

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
});

describe(('Checking remove function'), () => {
  it(('Remove task 1 from list'), () => {
    expect((task.removeTaskOfList(localStorage, 0))).toEqual([
      {
        index: 0,
        completed: true,
        description: 'This task is complete 1',
      },
    ]);
  });
});

describe(('Checking edit description function'), () => {
  it(('Update second object'), () => {
    expect(task.updateTaskOfList(localStorage, 'This is my new description', 1)).toEqual([
      {
        index: 0,
        completed: false,
        description: 'Add your first task 0',
      },
      {
        index: 1,
        completed: true,
        description: 'This is my new description',
      },
    ]);
  });
});