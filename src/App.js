import './App.css'
//import Break from './Break'
//import Length from './Length'
//import Grid from '@material-ui/core/Grid'
//import SessionTimer from './SessionTimer.js'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.audioBeep = React.createRef();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLabel: 'Session',
      timeLeftInSecond: 25 * 60,
      isStart: false,
      timerInterval: null
    }

    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
    this.onIncreaseSession = this.onIncreaseSession.bind(this);
    this.onDecreaseSession = this.onDecreaseSession.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onStartStop = this.onStartStop.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);
  }

  onIncreaseBreak() {
    if (this.state.breakLength < 60 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }

  onDecreaseBreak() {
    if (this.state.breakLength > 1 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  }

  onIncreaseSession() {
    if (this.state.sessionLength < 60 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeLeftInSecond: (this.state.sessionLength + 1) * 60
      });
    }
  }

  onDecreaseSession() {
    if (this.state.sessionLength > 1 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeLeftInSecond: (this.state.sessionLength - 1) * 60
      });
    }
  }

  onReset() {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLabel: 'Session',
      timeLeftInSecond: 25 * 60,
      isStart: false,
      timerInterval: null
    });

    this.audioBeep.current.pause();
    this.audioBeep.current.currentTime = 0;
    this.state.timerInterval && clearInterval(this.state.timerInterval);
  }

  onStartStop() {
    if (!this.state.isStart) {
      this.setState({
        isStart: !this.state.isStart,
        timerInterval: setInterval(() => {
          this.decreaseTimer();
          this.phaseControl();
        }, 1000)
      })
    } else {
      this.audioBeep.current.pause();
      this.audioBeep.current.currentTime = 0;
      this.state.timerInterval && clearInterval(this.state.timerInterval);

      this.setState({
        isStart: !this.state.isStart,
        timerInterval: null
      });
    }
  }

  decreaseTimer() {
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 1
    });
  }

  phaseControl() {
    if (this.state.timeLeftInSecond === 0) {
      this.audioBeep.current.play();
    } else if (this.state.timeLeftInSecond === -1) {
      if (this.state.timeLabel === 'Session') {
        this.setState({
          timeLabel: 'Break',
          timeLeftInSecond: this.state.breakLength * 60
        });
      } else {
        this.setState({
          timeLabel: 'Session',
          timeLeftInSecond: this.state.sessionLength * 60
        });
      }
    }
  }

  formatTime = (timeLeftInSecond) => {
    let minute = Math.floor(timeLeftInSecond / 60);
    if (minute < 10) minute = '0' + minute;
  
    let second = timeLeftInSecond - 60 * minute;
    if (second < 10) second = '0' + second;
  
    return `${minute}:${second}`;
  }

  render() {
    return (
      <div className="pomodoro-clock">
        <div className="pomodoro-clock-header">
          <h1 className="pomodoro-clock-header-name">Pomodoro Clock</h1>
        </div>

        <div className="settings">
          <div className="settings-section">
            <label id="break-label">Break Length</label>
            <div>
              <button id="break-decrement" onClick={this.onDecreaseBreak}>-</button>
              <span id="break-length">{this.state.breakLength}</span>
              <button id="break-increment" onClick={this.onIncreaseBreak}>+</button>
            </div>
          </div>
          <div className="settings-section">
            <label id="session-label">Session Length</label>
            <div>
              <button id="session-decrement" onClick={this.onDecreaseSession}>-</button>
              <span id="session-length">{this.state.sessionLength}</span>
              <button id="session-increment" onClick={this.onIncreaseSession}>+</button>
            </div>
          </div>
        </div>

        <div className="times">
          <div className="times-content">
            <label id="timer-label">{this.state.timeLabel}</label>
            <span id="time-left">{this.formatTime(this.state.timeLeftInSecond)}</span>
          </div>
        </div>

        <div className="controller">
          <button id="start_stop" onClick={this.onStartStop}>
            {this.state.isStart ? 'Stop' : 'Start'}
          </button>
          <button id="reset" onClick={this.onReset}>Reset</button>
        </div>

        <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ref={this.audioBeep}></audio>
      </div>
    );
  }
}