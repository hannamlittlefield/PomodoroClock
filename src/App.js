import './App.css';
import Break from './Break'
import Length from './Length'
import Grid from '@material-ui/core/Grid'
import SessionTimer from './SessionTimer.js'
import React, { useState } from 'react';

export default function App() {
  let countdown = 0; // variable to set/clear intervals
  const [workTime, setWorkTime] = useState(25);
  const [seconds, setSeconds] = useState(workTime*60)
  const [breakTime, setBreakTime] = useState(5);
  let isBreak = true;
  let isPaused = true;
  let increment = 1;

  
  const status = document.getElementById("status");
  const timerDisplay = document.getElementById("timerDisplay");
  const startBtn = document.getElementById("start-btn");
  const resetBtn = document.getElementById("reset");
  const workMin = document.getElementById("work-min");
  const breakMin = document.getElementById("break-min");
  
  const alarm = document.createElement('audio'); // A bell sound will play when the timer reaches 0
  alarm.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");
  
  

  const handleStart = () => {
    clearInterval(countdown);
    isPaused = !isPaused;
    if (!isPaused) {
      countdown = setInterval(timer, 1000);
    }
}

  /* EVENT LISTENERS FOR START AND RESET BUTTONS */
  /*
  resetBtn.addEventListener('click', () => {
    clearInterval(countdown);
    seconds = workTime * 60;
    countdown = 0;
    isPaused = true;
    isBreak = true;
  })
  */
  /* TIMER - HANDLES COUNTDOWN */
  function timer() {
    setSeconds(seconds - 1);

      if (seconds < 0) {
        clearInterval(countdown);
        alarm.currentTime = 0;
        alarm.play();
        seconds = (isBreak ? breakTime : workTime) * 60;
        isBreak = !isBreak;
        countdown = setInterval(timer, 1000);
    }
    countdownDisplay();
    console.log(seconds)
  }
  
  function incrementBreak(){
    setBreakTime(breakTime + 1)
    // TODO userstories to limit breaktime >0
  }

  function decrementBreak(){
    setBreakTime(breakTime - 1)
    // TODO userstories to limit breaktime >0
  }

  function incrementWork(){
    setWorkTime(workTime + 1)
    setSeconds(workTime*60)
    // TODO userstories to limit breaktime <60
  }

  function decrementWork(){
    setWorkTime(workTime - 1)
    setSeconds(workTime*60)
    // TODO userstories to limit breaktime <60
  }

  /* UPDATE HTML CONTENT */
  function countdownDisplay() {
    console.log(document.getElementById("timerDisplay").innerText)
    let minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    if (timerDisplay != null) timerDisplay.innerText = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  }
  
  function buttonDisplay() {
    if (isPaused && countdown === 0) {
      startBtn.innerText = "START";
    } else if (isPaused && countdown !== 0) {
      startBtn.innerText = "Continue"; 
    } else {
      startBtn.innerText = "Pause";
    }
  }
  
  function updateHTML() {
    countdownDisplay();
    /*buttonDisplay();
    isBreak ? status.innerText = "Keep Working" : status.innerText = "Take a Break!";
    workMin.innerText = workTime;
    breakMin.innerText = breakTime;  */
  }
  
  window.setInterval(updateHTML, 100);
  
  document.onclick = updateHTML;

  return (
    <div className="container">
      <h1>Pomodoro Timer</h1>
      
      <div id="pomodoro">  
        <div id="status"></div>
        <div id="timerDisplay">{workTime}:00</div>
        <button 
          id="start-btn" 
          className="btn"
          onClick={handleStart}
          >START</button>
      </div>
      
      <div className="settings">
        <div id="work">
          <p>Work Duration</p>
          <button 
            className="btn-settings" 
            id="work-plus" 
            onClick={incrementWork}>+</button>
          <div><span id="work-min">{workTime}</span> mins</div>
          <button 
            className="btn-settings" 
            id="work-minus"
            onClick={decrementWork}>-</button>
        </div>
        
        <button id="reset" className="btn">RESET</button>
        
        <div id="break">
          <p>Break Duration</p>
          <button 
            className="btn-settings" 
            id="break-plus"
            onClick={incrementBreak}>+</button>
          <div><span id="break-min">{breakTime}</span> mins</div>
          <button 
            className="btn-settings" 
            id="break-minus"
            onClick={decrementBreak}>-</button>
        </div>
      </div>
    </div>
  );
}

