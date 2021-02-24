import React, {useState} from 'react'

export default function SessionTimer({handleOnReset}, {lengthDisplay}){

    return(
        <div id="timer-label">
            <p>Session</p>
            <div id="time-left">{lengthDisplay}:00</div>
            <button id="start_stop">&#10074;&#10074;</button>
            <button 
                id="reset"
                onClick={handleOnReset}>&#8634;</button>

        </div>
    )
}
