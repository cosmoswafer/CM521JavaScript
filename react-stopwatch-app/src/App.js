import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        time_value: 0,
        lap_time: 0,
        run_timer: false,
        begin_time: 0,
        lap_begin: 0,
        lap_hi: 0,
        lap_low: 999999999,
        laps: [],
        timer_text: '00:00.00',
        lap_text: '00:00.00',
    };

    /*
    get timer_text() {
        return this.ts2Timer(this.time_value);
    }
    get lap_text() {
        return this.ts2Timer(this.lap_time);
    }
    */

    ts2Timer(ts) {
        const ms10 = Math.floor((ts % 1000) / 10);
        const seconds = Math.floor(ts / 1000) % 60;
        const minutes = Math.floor(ts / 1000 / 60);

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
            2,
            '0'
        )}.${String(ms10).padStart(2, '0')}`;
    }

    timerRafInit = (ts) => {
        this.setState({
            begin_time: ts - this.state.time_value,
            lap_begin: ts - this.state.lap_time,
        });
        requestAnimationFrame(this.timerRaf);
    };
    timerRaf = (ts) => {
        this.setState({
            time_value: ts - this.state.begin_time,
            lap_time: ts - this.state.lap_begin,
            timer_text: this.ts2Timer(ts - this.state.begin_time),
            lap_text: this.ts2Timer(ts - this.state.lap_begin),
        });
        if (this.state.run_timer) requestAnimationFrame(this.timerRaf);
    };
    startTimer = () => {
        this.setState({ run_timer: true });
        requestAnimationFrame(this.timerRafInit);
    };
    stopTimer = () => {
        this.setState({ run_timer: false });
    };
    resetTimer = () => {
        this.setState({
            time_value: 0,
            lap_time: 0,
            laps: [],
            lap_hi: 0,
            laplow: 999999999,
            timer_text: this.ts2Timer(0),
            lap_text: this.ts2Timer(0),
        });
    };
    addLap = () => {
        const lap_time_now = this.lap_time;
        this.lap_begin += this.lap_time; //current timestamp ts = lap_time + lap_begin
        if (lap_time_now > this.lap_hi) this.lap_hi = lap_time_now;
        if (lap_time_now < this.lap_low) this.lap_low = lap_time_now;
        this.laps.unshift({
            text: this.ts2Timer(lap_time_now),
            time: lap_time_now,
        });
    };

    render() {
        return (
            <div id="app">
                <div id="stopwatch">{this.state.timer_text}</div>
                <div id="stopwatch-controls">
                    <button
                        onClick={() => {
                            this.state.run_timer
                                ? this.addLap()
                                : this.resetTimer();
                        }}
                        id="reset-and-lap"
                    >
                        {this.state.run_timer ? 'Lap' : 'Reset'}
                    </button>
                    <span id="brand">Stopwatch</span>
                    <button
                        onClick={() =>
                            this.state.run_timer
                                ? this.stopTimer()
                                : this.startTimer()
                        }
                        id="start-and-stop"
                        //:class="{ red: run_timer }"
                    >
                        {this.state.run_timer ? 'Stop' : 'Start'}
                    </button>
                </div>
                <ul id="stopwatch-records">
                    {this.state.lap_time > 0 && (
                        <li>
                            <span>Lap {this.state.laps.length + 1}</span>
                            <span>{this.state.lap_text}</span>
                        </li>
                    )}
                    {this.state.laps.map((v, i) => {
                        return (
                            <li
                                key={i}
                                /* :class="{
                    red: v.time === this.lap_hi,
                    green: v.time === this.lap_low, */
                            >
                                <span>Lap {this.state.laps.length - i}</span>
                                <span>{v.text}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
