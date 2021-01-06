import React, { useState, useRef } from 'react';

import '../components/timer.css';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const count = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
    count.current = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(count.current)
    setIsPaused(true)
  }

  const handleReset = () => {
    setTime(0)
    clearInterval(count.current)
    handleStart()
  }

  const handleStop = () => {
    clearInterval(count.current)
    setIsActive(false)
    setIsPaused(false)
    setTime(0)
  }

  const timeFormat = () => {
    const getSeconds = `0${(time % 60)}`.slice(-2)
    const minutes = `${Math.floor(time / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }


    return (
        <div className="container">
            <h3 className="header">time</h3>
            <div className="timer-card">
            <p className="numbers">{timeFormat()}</p>
                <div className="buttons">
                {
                    !isActive || isActive && isPaused ?
                        <button className="start" onClick={handleStart}>Start</button>
                        :
                        <button className="stop" onClick={handleStop}>Stop</button>
                }
                    <button className="wait" onClick={handlePause}>Wait</button>
                    <button className="reset" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Timer;
