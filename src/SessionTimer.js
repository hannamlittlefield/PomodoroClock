import React, {useState} from 'react'
import Countdown from 'react-countdown';

export default function SessionTimer({handleOnReset}, {breakDisplay}){
    const [sessionDisplay, setSessionDisplay] = useState("25:00")

    function handleStartStop(){
    }

    return(
        <div id="timer-label">
            <p>Session</p>
            <Countdown
                date={sessionDisplay}
                intervalDelay={0}
                precision={3}
                autoStart={false}
                onPause={sessionDisplay}
                onComplete={breakDisplay}
  />,

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
