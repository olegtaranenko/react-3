export const toggleDone = id => ({type: 'TOGGLE_DONE', payload: id});
export const toggleCompleted = () => ({type: 'TOGGLE_COMPLETED'});
export const addTask = () => ({type: 'ADD_TASK'});
export const inputChanged = e => ({type: 'INPUT_CHANGED', payload: e.target.value});
