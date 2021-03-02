import React, {useState} from 'react'
import Countdown from 'react-countdown';

export default function SessionTimer({handleOnReset}, {breakDisplay}){
    const [sessionDisplay, setSessionDisplay] = useState("25:00")
    const [descriptionDisplay, setDescription] = useState("Session")

    function handleStartStop(){
    }

   function handleOnComplete(){
        if (sessionDisplay === "00:00"){
            setSessionDisplay({breakDisplay})
            setDescription("Break") /*changes display to state break*/
        }
    }

    return(
        <div id="timer-label">
            <p>{descriptionDisplay}</p>
            <Countdown
                date={Date.now()}
                intervalDelay={0}
                precision={3}
                autoStart={false}
                onPause={sessionDisplay}
               /* onComplete={handleOnComplete} */
  />

            <div id="time-left">{sessionDisplay}</div>
            <button 
                id="start_stop"
                onClick={handleStartStop}>&#10074;&#10074;</button>
            <button 
                id="reset"
                onClick={handleOnReset}>&#8634;</button>

        </div>
    )
}
