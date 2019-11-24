import React     from 'react';
import './App.css';
import Wrapper   from "./components/wrapper";
import MyContext from "./components/context";

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={{
        name: 'Oleg',
        age:  54
      }}>
        <Wrapper/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
