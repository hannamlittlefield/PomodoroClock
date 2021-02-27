import React, { useState } from 'react';

export default function Length({handleLengthOnDec, handleLengthOnInc, lengthDisplay}) {

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