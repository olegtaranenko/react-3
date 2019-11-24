import {createStore} from 'redux';


const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RST':
      return 0;
    default:
      return state;
  }
};

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rst = () => ({type: 'RST'});

const store = createStore(reducer);

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('rst').addEventListener('click', () => {
  store.dispatch(rst());
});

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc())
});

const updateCounter = () => {
  document.getElementById('counter').textContent = store.getState();
};

store.subscribe(updateCounter);

