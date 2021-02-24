import React, { useState } from 'react';

export default function Length() {
    const [lengthDisplay, setLengthDisplay] = useState(25)
    function handleLengthOnDec(){
        if(lengthDisplay >=2){
           setLengthDisplay(lengthDisplay - 1)
       }
       else{
       }
   }
   
    function handleLengthOnInc(){
        if(lengthDisplay <= 59){
       setLengthDisplay(lengthDisplay + 1)
        }
        else{
   
        }
   }
    return(
        <div id="break-label">
            <p>Session Length</p>
            <button 
                id="session-decrement"
                onClick={handleLengthOnDec}
                >&#xab;</button>
                {lengthDisplay}
            <button 
                id="session-increment"
                onClick={handleLengthOnInc}
                >&#xbb;</button>
        </div>
    )
}