import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Components/Login/Login'
import Home from "./Components/Home/Home";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLogged') === '1') {
      setIsLogged(true);
    }
  }, [])

  const loginHandler = () => {
    setIsLogged(true);
    localStorage.setItem('isLogged', '1');
  }
  const logoutHandler = () => {
    setIsLogged(false);
    localStorage.setItem('isLogged', '0');
  }

  return (
    <div className="app">
      <header>
        Typical header :D
        {isLogged && <button onClick={logoutHandler}>Logout</button>}
      </header>
      {!isLogged && <Login onLogin={loginHandler}/>}
      {isLogged && <Home/>}
    </div>
  );
}

export default App;
