import React, { useRef, useState } from 'react'

function Main() {
    const [startTime,setStartTime]=useState(null)
    const[now,setNow]=useState(null)
    const intervalRef=useRef(null)
    const handleStart=()=>{
        setStartTime(Date.now())
        setNow(Date.now())
        clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
    
    const handleStop=()=>{
        clearInterval(intervalRef.current)

    }
    let secondPassed=0;
    if(startTime!=null && now!=null){
        secondPassed=(now-startTime)/1000;
    }
  return (
    <>
    <h1>Time Passed:{secondPassed} sec</h1>
    <button onClick={handleStart}>
        Start
    </button>
    <button onClick={handleStop}>Stop </button>
    {console.log(startTime)}
    {console.log(now)}
    
    </>
  )
}

export default Main