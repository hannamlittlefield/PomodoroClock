import React, { useState } from 'react';

export default function Break() {
    const [breakDisplay, setBreakDisplay] = useState('5')

    function handleOnDec(){
        setBreakDisplay(breakDisplay - 1)
    }

    function handleOnInc(){
        setBreakDisplay(breakDisplay + 1)

    }
    
    return(
        <div id="break-label">
            <p>Break Length</p>
                <button 
                    id="break-decrement"
                    onClick={handleOnDec}
                    >&#xab;</button>
                    {breakDisplay}
                <button 
                id="break-increment"
                onClick={handleOnInc}
                >&#xbb;</button>
        </div>
    )
}