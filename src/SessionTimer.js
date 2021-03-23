import React, {useState} from 'react'
import Countdown, { calcTimeDelta } from 'react-countdown';

export default function SessionTimer({handleOnReset, breakDisplay, lengthDisplay}){
    /* will use setDescription to update session to break when time is up */
    const [seshName, setSeshname] = useState(lengthDisplay)
    const [descriptionDisplay, setDescription] = useState("Session")
    const alarm = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3'
    function time_convert(num)
    { 
     var hours = Math.floor(num / 60);  
     var minutes = num % 60;
     var seconds = minutes % 1500;
     return hours + ":" + minutes + ":" + seconds;         
   }

   function handleStart(){}
   function handlePause(){}
   function endTime(){
       if(lengthDisplay === 0){
           /*play alarm */
           setDescription("Break")
           setSeshname(breakDisplay)


       }
   }

    return( 
        <div id="timer-label">
            <p>{descriptionDisplay}</p>
            <div id="time-left">
                {lengthDisplay}
            </div>
            <button 
                id="start_stop"
                onClick={handleStart}
                >&#9654;</button>
            <button 
                id="start_stop"
                onClick={handlePause}
                >&#10074;&#10074;</button>
            <button 
                id="reset"
                onClick={handleOnReset}>&#8634;</button>
        </div>
    )
}