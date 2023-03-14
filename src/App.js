
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const texts = [
  "нет",
  'да',
  'мб',
  'возможно'

]



function App() {
  const [count, setCount] = useState(0);


  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <Counter count={count} />

      <Button onClick={incrementCount} text="нет" />
      <Button onClick={incrementCount} text="нет" />
      <Button onClick={incrementCount} text="нет" />
      <Reset count={count} onClick={resetCounter} />
    </div>
  );

 <Counter count = {count}/>
 
 {texts.map((text, index) => {
  return <Button onClick={incrementCount} text = {text} key = {index}/>
 })}
  </div>
  )

}

export default App;
