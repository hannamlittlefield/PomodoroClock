import React, { useState } from 'react';

export default function Length(){
 const [lengthDisplay, setLengthDisplay] = useState(25)

 function handleOnDec(){
     if(lengthDisplay >=2){
        setLengthDisplay(lengthDisplay - 1)
    }
    else{
    }
}

 function handleOnInc(){
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