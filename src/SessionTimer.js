import React, {useState} from 'react'
import Countdown, { calcTimeDelta } from 'react-countdown';

export default function SessionTimer({handleOnReset, breakDisplay, lengthDisplay}){
    const [descriptionDisplay, setDescription] = useState("Session")
    const [date, setDate] = useState(Date.now() + (lengthDisplay*60000))
    const [isSession, setIsSession] = useState(true)
    const [auto, setAuto] = useState(false)

    function handleStartStop(){
        setAuto(!auto)
        

        /* do I need state to keep track if button has been clicked? if clicked once - play countdown, 
        if clicked twice (or divisible by 2) then pause countdown?
        set state to 'isfalse' and if clicked turn it to true - use if statement to decide to play or pause
    }

   function handleOnComplete(){
            setSessionDisplay({breakDisplay}) -- this will end up using setdate, which controls start time of break
            setDescription("Break") /*changes display to state break
            use isSession to declare true or false - 
        use true or false to determine setDate of break or length display
*/        
    }

    return(
        <div id="timer-label">
            <p>{descriptionDisplay}</p>
            <div id="time-left">
                <Countdown
                    date={date}
                    intervalDelay={0}
                    precision={0}
                    autoStart={true}
                    onPause={handleStartStop}
                    /* onComplete={handleOnComplete} */
  />

            </div>
            <button 
                id="start_stop"
                onClick={handleStartStop}>&#10074;&#10074;</button>
            <button 
                id="reset"
                onClick={handleOnReset}>&#8634;</button>

        </div>
    )
}
