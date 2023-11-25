import Rectangle from './Rectangle';
import Input from './Input';
import './App.css';
import { useState } from 'react';

function App() {
  const [ colorValue, setColorValue] = useState('')

  return (
    <div className="App">
      <Rectangle 
      colorValue={colorValue}/>
      <Input 
      colorValue={colorValue}
      setColorValue={setColorValue}/>
    </div>
  );
}

export default App;
