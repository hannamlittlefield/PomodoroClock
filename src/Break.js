import React, { useState } from 'react';

export default function Break() {
    const [breakDisplay, setBreakDisplay] = useState(5)

    function handleOnDec(){
        if(breakDisplay >= 2){
            setBreakDisplay(breakDisplay - 1)}
        else{
        }
    }

    function handleOnInc(){
        if(breakDisplay <=59){
            setBreakDisplay(breakDisplay + 1)
        }   
        else{
        }

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