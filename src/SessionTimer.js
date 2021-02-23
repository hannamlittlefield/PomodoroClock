import React, {useState} from 'react'

export default function SessionTimer(){
    const [lengthDisplay, setLengthDisplay] = useState(25)
    /* when app handles state, will be able to call setbreak setlength*/
    const [breakDisplay, setBreakDisplay] = useState(5)

    let timer = new Date(lengthDisplay).getTime();
    function handleOnReset(){
        setBreakDisplay(5)
        setLengthDisplay(25)
    }
    return(
        <div id="timer-label">
            <p>Session</p>
            <div id="time-left">{timer}</div>
            <button id="start_stop">&#10074;&#10074;</button>
            <button 
                id="reset"
                onClick={handleOnReset}>&#8634;</button>

        </div>
    )
}
