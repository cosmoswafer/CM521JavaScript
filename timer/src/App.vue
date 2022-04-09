<template>
    <div id="app">
        <div id="stopwatch">
            {{ timer_text }}
        </div>
        <div id="stopwatch-controls">
            <button
                @click="run_timer ? addLap() : resetTimer()"
                id="reset-and-lap"
            >
                {{ run_timer ? 'Lap' : 'Reset' }}
            </button>
            <span id="brand">Stopwatch</span>
            <button
                @click="run_timer ? stopTimer() : startTimer()"
                id="start-and-stop"
                :class="{ red: run_timer }"
            >
                {{ run_timer ? 'Stop' : 'Start' }}
            </button>
        </div>
        <ul id="stopwatch-records">
            <li v-if="run_timer">
                <span>Lap</span><span>{{ lap_text }}</span>
            </li>
            <li
                v-for="(v, i) in laps"
                :key="i"
                :class="{
                    red: v.time === this.lap_hi,
                    green: v.time === this.lap_low,
                }"
            >
                <span>Lap {{ i + 1 }}</span>
                <span>{{ v.text }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'iOS Timer App',
    data() {
        return {
            time_value: 0,
            lap_time: 0,
            run_timer: false,
            begin_time: 0,
            lap_begin: 0,
            lap_hi: 0,
            lap_low: 999999999,
            laps: [],
        };
    },
    computed: {
        timer_text() {
            return this.ts2Timer(this.time_value);
        },
        lap_text() {
            return this.ts2Timer(this.lap_time);
        },
    },
    methods: {
        ts2Timer: function (ts) {
            const ms10 = Math.floor((ts % 1000) / 10);
            const seconds = Math.floor(ts / 1000) % 60;
            const minutes = Math.floor(ts / 1000 / 60);

            return `${String(minutes).padStart(2, '0')}:${String(
                seconds
            ).padStart(2, '0')}.${String(ms10).padStart(2, '0')}`;
        },
        timerRafInit: function (ts) {
            this.begin_time = ts - this.time_value;
            this.lap_begin = ts;
            requestAnimationFrame(this.timerRaf);
        },
        timerRaf: function (ts) {
            this.time_value = ts - this.begin_time;
            this.lap_time = ts - this.lap_begin;
            if (this.run_timer) requestAnimationFrame(this.timerRaf);
        },
        startTimer: function () {
            this.run_timer = true;
            requestAnimationFrame(this.timerRafInit);
        },
        stopTimer: function () {
            this.run_timer = false;
        },
        resetTimer: function () {
            this.time_value = 0;
            this.laps = [];
            this.lap_hi = 0;
            this.lap_low = 999999999;
        },
        addLap: function () {
            const lap_time_now = this.lap_time;
            this.lap_begin += this.lap_time; //current timestamp ts = lap_time + lap_begin
            if (lap_time_now > this.lap_hi) this.lap_hi = lap_time_now;
            if (lap_time_now < this.lap_low) this.lap_low = lap_time_now;
            this.laps.push({
                text: this.ts2Timer(lap_time_now),
                time: lap_time_now,
            });
        },
    },
};
</script>

<style>
@import url('https://unpkg.com/normalize.css@8.0.1/normalize.css');

:root {
    --seplin-colour: #323234;
}

body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
}

#app {
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
}

#stopwatch {
    font-size: 5rem;
    padding: 2em 0;
    text-align: center;
}

#stopwatch-controls {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    text-align: center;
}

#stopwatch-controls button {
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    height: 3.5em;
    width: 3.5em;
    background: var(--background-colour);
    color: var(--font-colour);
    box-shadow: 0px 0px 0px 3px var(--background-colour);
    border: 3px solid black;
    /*outline: 3px solid var(--background-colour);
    outline-offset: 3px;*/
}

#reset-and-lap {
    --background-colour: #333333;
    --font-colour: #ffffff;
}

#start-and-stop {
    --background-colour: #082a12;
    --font-colour: #2ed158;
}

#start-and-stop.red {
    --background-colour: #320e0b;
    --font-colour: #ff453a;
}

#stopwatch-records {
    list-style: none;
    padding: 0;
}

#stopwatch-records li {
    border-bottom: 2px solid var(--seplin-colour);
    display: grid;
    font-size: 1.5rem;
    grid-template-columns: 4fr 6fr;
    line-height: 2rem;
    padding: 1rem 2rem;
}

#stopwatch-records li:first-child {
    border-top: 2px solid var(--seplin-colour);
    margin-top: 1em;
}

#stopwatch-records li span:nth-child(2) {
    text-align: right;
}

#stopwatch-records li.red {
    color: #ff453a;
}

#stopwatch-records li.green {
    color: #2ed158;
}
</style>
