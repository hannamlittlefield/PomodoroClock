import React, { useState } from 'react';

export default function Break({handleBreakOnDec, handleBreakOnInc, breakDisplay}) {

    return(
        <div id="break-label">
            <p>Break Length</p>
                <button 
                    id="break-decrement"
                    onClick={handleBreakOnDec}
                    >&#xab;</button>
                    {breakDisplay}
                <button 
                id="break-increment"
                onClick={handleBreakOnInc}
                >&#xbb;</button>
        </div>
    )
}