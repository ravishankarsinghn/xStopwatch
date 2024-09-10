import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isRunning, setIsrunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isReset, setIsReset] = useState(false);

  useEffect(()=>{
    let counter;
    if(isRunning) {
    counter = setInterval(()=>{
      setSeconds(prevSec=>prevSec+1);
    
    },1000)
  }else {
    clearInterval(counter);
  }

  return ()=>clearInterval(counter);
  },[isRunning])

  const handleStartAndStop = ()=>{
    setIsrunning(prevStat=>!prevStat);
    setIsReset(false);
  }

  const handleReset = ()=>{
    setIsReset(true);
    setSeconds(0);
  }

  const formatTime = (secs)=>{
    const minutes = Math.floor(secs/60);
    const seconds = secs % 60;

    return `${minutes}:${seconds.toString().padStart(2,"0")}`

  }



  return (
  <div className='container'>
    <h1>Stopwatch</h1>

    <p className='time'>Time: {formatTime(seconds)}</p>

    <div className='btn_container'>
      <button onClick={handleStartAndStop}>{!isRunning?"Start":"Stop"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  </div>
  );
}


export default App
