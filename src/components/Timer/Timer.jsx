import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/timer/timerActions";

import TimerDisplay from "../TimerDisplay/TimerDisplay";
import TimerControls from "../TimerControls/TimerControls";

// import * as actions from "../../redux/timer/timerActions";

// import TimerDisplay from "../TimerDisplay/TimerDisplay";
// import TimerControls from "../TimerControls/TimerControls";

import song from "../../audio/audio.mp3";

class Timer extends Component {
  state = {
    secondsCount: 0,
  };

  interval = null;

  onSecondsChange = (e) => {
    const secondsValue = e.target.value;

    if (secondsValue < 0) {
      alert("wrong timer format, seconds value must be more than 0");
      return;
    }

    this.setState({
      secondsCount: Number(e.target.value),
    });
  };

  onTimerStart = () => {
    this.props.onTimerSet(this.state.secondsCount);

    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.props.onTimerCountdown();

      if (this.props.remainingSeconds <= 1) {
        this.onTimerStop();

        const audio = new Audio(song);
        audio.play();
      }
    }, 1000);
  };

  onTimerStop = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div>
        <h3>Timer</h3>

        <label>
          Input seconds to end timer:{" "}
          <input
            type="number"
            value={this.state.secondsCount}
            onChange={this.onSecondsChange}
            min={0}
          />
        </label>

        <TimerDisplay seconds={this.props.remainingSeconds} />
        <TimerControls onStart={this.onTimerStart} onStop={this.onTimerStop} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  remainingSeconds: state.remainingSeconds,
});

const mapDispatchToProps = (dispatch) => ({
  onTimerSet: (value) => dispatch(actions.timerSet(value)),
  onTimerCountdown: () => dispatch(actions.timerCountdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
