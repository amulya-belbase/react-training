import React, { useState, useRef } from 'react';
import TimerBtns from './timerBtns';
import GoBack from "./goBack";

const TimerApp: React.FC = () => {

  // counts the number of seconds
  const [count, setCount] = useState<number>(0);

  // checks whether the timer is running 
  const [isRunning, setIsRunning] = useState<boolean>(false);


  // to store that interval Id
  const timerRef = useRef<number | undefined>(undefined);

  const startTimer = () => {
    setIsRunning(true);

    // reference to this interval is stored in timerRef.current
    timerRef.current = setInterval(() => {
      setCount((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);

    // clears that interval using timerRef.current
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setCount(0);
  };

  const formatTime = (totalSeconds: number): JSX.Element => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formatNumber = (num: number): string => {
      return num < 10 ? `0${num}` : `${num}`;
    };

    return (
      <div className="formatted-time">
        <span className="number">{formatNumber(hours)}</span>h :
        <span className="number"> {formatNumber(minutes)}</span>m :
        <span className="number"> {formatNumber(seconds)}</span>s
      </div>
    );
  };

  // creating an object of functions to pass as props
  const timerFunctions = {
    startTimer,
    stopTimer,
    resetTimer,
  };

  return (
    <div className="timerdiv">
      <GoBack />

      <h1>Timer App</h1>
      <div className="timediv">
        <p>{formatTime(count)}</p>
      </div>
      <div className='buttondiv'>
        <TimerBtns
          timerFunctions={timerFunctions}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
};

export default TimerApp;
