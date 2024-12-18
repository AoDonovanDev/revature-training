import './App.css';
import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-dom';
import { WrappedWithFancy } from './components/withFancyText';
import Counter from './components/Counter';

function App() {

  const ref = useRef(0);

  const [text, setText] = useState ("");

  function increment(){
    ref.current = ref.current +1;
    alert(ref.current);
  }

  function handleChange(e){
    setText(e.target.value)
  }

  return (
    <div className="App">
      <button onClick={increment}>ref count button</button>
      <Counter/>
      <h1>{text}</h1>
      <input type="text" value={text} onChange={(e)=>handleChange(e)}/>
      <WrappedWithFancy />
      <a href="">learn react</a>
    </div>
  );
}

export default App;
