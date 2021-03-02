import './App.css';
import Break from './Break'
import Length from './Length'
import Grid from '@material-ui/core/Grid'
import SessionTimer from './SessionTimer.js'
import React, { useState } from 'react';

export default function App() {

  /* function(){
    if({sessionDisplay} === 00:00){
      setSessionDisplay(breakDisplay)
      then add function for countdown here
    }
    

  }



  */
  const [breakDisplay, setBreakDisplay] = useState(5)
  const [lengthDisplay, setLengthDisplay] = useState(25)

  function handleBreakOnDec(){
      if(breakDisplay >= 2){
          setBreakDisplay(breakDisplay - 1)}
      else{
      }
  }

  function handleBreakOnInc(){
      if(breakDisplay <=59){
          setBreakDisplay(breakDisplay + 1)
      }   
      else{
      }
    }

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

  function handleOnReset(){
    setBreakDisplay(5)
    setLengthDisplay(25)
}

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Productive Pomodoro</h1>
      <SessionTimer
        handleOnReset={handleOnReset}
        lengthDisplay={lengthDisplay}
        />
      <Grid
        container
        direction= "row"
        justify="space-evenly"
        alignItems="center">
          <Break
            breakDisplay={breakDisplay}
            handleBreakOnDec={handleBreakOnDec}
            handleBreakOnInc={handleBreakOnInc}
          />
          <Length
            lengthDisplay={lengthDisplay}
            handleLengthOnDec={handleLengthOnDec}
            handleLengthOnInc={handleLengthOnInc}
          />
      </Grid>
      </header>
    </div>
  );
}

