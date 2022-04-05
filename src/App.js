
import './App.css';
import Buttons from './Components/Buttons'
import Timer from './Components/Timer'
import {useEffect, useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect( () => {
    let timer;
    if(start && !pause) {
      timer = setInterval(() => {
        setCount((prevState)=>prevState + 10)
      }, 10);
    }else {
      clearInterval(timer);
    }
    return ()=>clearInterval(timer)
  }, [start, pause]);


  return (
    <div className="App">
      <Timer count={count} />  
      <Buttons start={start}  setStart={setStart} setCount={setCount} pause={pause} setPause={setPause}/>
    </div>
  );
}

export default App;
