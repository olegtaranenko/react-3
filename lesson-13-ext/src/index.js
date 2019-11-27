import {createStore} from 'redux';
import DbService     from "./services/dbService";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'SET':
      return state = parseInt(action.payload);
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
const set = (value) => ({type: 'SET', payload: value});

const store = createStore(reducer);
const dbService = new DbService();
let sequence = 0;
dbService.getNumbers()
.then(response => {
  response.forEach(item => {
    if (item.id > sequence) {
      sequence = item.id;
    }
  })
});


document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('rst').addEventListener('click', () => {
  store.dispatch(rst());
});

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc())
});

document.getElementById('download').addEventListener('click', () => {
  dbService.getNumbers()
  .then(
    response => {
      const rndIndex = Math.floor(Math.random() * 3);
      let rndNumber = 0;
      response.some((item, index) => {
        if (item.const && index === rndIndex) {
          rndNumber = item.const;
          return true;
        }
      });
      if (rndNumber) {
        store.dispatch(set(rndNumber));
      }
    }
  )
  .catch(e => console.error(e));
});

const counterCt = document.getElementById('counter');

document.getElementById('upload').addEventListener('click', () => {
  const counter = parseInt(counterCt.textContent);
  dbService.saveNumber({
    saved: counter,
    id:    ++sequence
  })
  .then(response => response.json())
  .then(json => console.log(`Number ${counter} saved, message: ${json}`))
  .catch(e => console.error(e));
});


const updateCounter = () => {
  counterCt.textContent = store.getState();
};

store.subscribe(updateCounter);

