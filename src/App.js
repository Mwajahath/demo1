import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Login from './components/Login';

function App() {
  
  const [count ,setCount] = useState(0);


  return (
    <div className="App">
     
      <Login/>
    </div>
  );
}

export default App;
