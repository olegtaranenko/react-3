import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [data, refreshData] = useState([{name: 'Oleg', gender: 'male'}]);

  const updateChar = () => {

  };

  useEffect(() => {
    updateChar();
    let timerId = setInterval(updateChar, 15000);
    return () => {
      clearInterval(timerId);
    }
  });

  return (
    <>
      <h1>Hello World!</h1>
      <div>
        <p>Вы кликнули {count} раз</p>
        <button
          onClick={() => setCount(count + 1)}
        >Press me</button>
      </div>
      {data.map(item => {
        return <div>Name: {item.name}, gender: {item.gender}</div>
      })}

      <button onClick={() => refreshData(data => ([...data, {name: 'Egle', gender: 'female'}]))}
      >Add data</button>
    </>
  );
}

export default App;
