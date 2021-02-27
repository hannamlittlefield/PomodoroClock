import React, {useState} from 'react'

export default function SessionTimer({handleOnReset}){
    const [sessionDisplay, setSessionDisplay] = useState("25:00")

    function handleStartStop(){
        setInterval(function() {
            var presentTime = sessionDisplay;
            var timeArray = presentTime.split(':');
            var m = timeArray[0];
            var s = checkSecond(timeArray[1] - 1)
                console.log(s)
                if(s==="59"){m=m-1}
        console.log(s-1)
            document.getElementById("time-left").innerHTML=(m +":" + s)
        /*setSessionDisplay(m +":" + s)*/
        }, 1000
        )
    }

    function checkSecond(sec) {
        if (sec < "10" && sec >= "0") {sec = "0" + sec};
        if (sec < "0") {sec = "59"};
        return sec;
      }

    return(
        <div id="timer-label">
            <p>Session</p>
            <div id="time-left">{sessionDisplay}</div>
            <button 
                id="start_stop"
                onClick={handleStartStop}>&#10074;&#10074;</button>
            <button 
                id="reset"
                onClick={handleOnReset}>&#8634;</button>

        </div>
    )
}
