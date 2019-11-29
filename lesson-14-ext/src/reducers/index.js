const all = [];

const initialState = {
  allItems:      all,
  items:         [...all],
  hideCompleted: false,
  input:         ''
};

let sequence = 0;
all.forEach(item => {
  if (item.id > sequence) sequence = item.id
});

const reducer = (state = initialState, action) => {
  let {items, allItems, hideCompleted, input} = state;
  const {payload, type} = action;
  switch (type) {
    case 'INPUT_CHANGED':
      return {
        ...state,
        input: payload
      };
    case 'ADD_TASK':
      if (!input) {
        return state;
      }
      const addTask = {
        name: input,
        done: false,
        id:   ++sequence
      };
      return {
        ...state,
        allItems: [...allItems, addTask],
        items:    [...items, addTask],
        input: ''
      };
    case 'TOGGLE_DONE':
      const id = payload;
      const taskIndex = allItems.findIndex(item => item.id === id);
      const task = allItems[taskIndex];
      const newTask = {...task, id: ++sequence, done: !task.done};
      allItems = [...allItems.slice(0, taskIndex), newTask, ...allItems.slice(taskIndex + 1)];
      return {
        ...state,
        allItems: allItems,
        items:    hideCompleted === true ? [...allItems.filter(item => !item.done)] : [...allItems]
      };
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        items:         hideCompleted !== true ? [...allItems.filter(item => !item.done)] : [...allItems],
        hideCompleted: !hideCompleted
      };
    default:
      return state;
  }
};

export default reducer;
