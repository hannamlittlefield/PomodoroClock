import React from 'react'

export default function SessionTimer(){
    let timer = "25:00"
    return(
        <div id="timer-label">
            <p>Session</p>
            <div id="time-left">{timer}</div>
            <button id="start_stop">&#10074;&#10074;</button>
            <button id="reset">&#8634;</button>

        </div>
    )
}
