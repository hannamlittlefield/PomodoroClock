import React, { useState } from 'react';

export default function Length(){
 const [lengthDisplay, setLengthDisplay] = useState('25')

 function handleOnDec(){
    setLengthDisplay(lengthDisplay - '1')
 }

 function handleOnInc(){
    setLengthDisplay(lengthDisplay + '1')
}

    return(
        <div id="break-label">
            <p>Session Length</p>
            <button 
                id="session-decrement"
                onClick={handleOnDec}
                >&#xab;</button>
                {lengthDisplay}
            <button 
                id="session-increment"
                onClick={handleOnInc}
                >&#xbb;</button>
        </div>
    )
}