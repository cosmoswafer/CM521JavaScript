<template>
    <div id="app">
        <div id="stopwatch">
            {{ time_value }}
        </div>
        <div id="stopwatch-controls">
            <button @click="stopTimer" id="reset-and-lap">Reset</button>
            <button @click="startTimer" id="start-and-stop">Start</button>
            <span id="brand">Stopwatch</span>
        </div>
        <ul id="stopwatch-records">
            <li>
                <span>Lap 1</span>
                <span>00:01.23</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'iOS Timer App',
    data() {
        return {
            time_value: '00:00.00',
            run_timer: false,
            begin_time: 0,
        };
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
            this.begin_time = ts;
            requestAnimationFrame(this.timerRaf);
        },
        timerRaf: function (ts) {
            console.log({ ts });
            this.time_value = this.ts2Timer(Math.floor(ts - this.begin_time));
            if (this.run_timer) requestAnimationFrame(this.timerRaf);
        },
        startTimer: function () {
            this.run_timer = true;
            requestAnimationFrame(this.timerRafInit);
        },
        stopTimer: function () {
            this.run_timer = false;
        },
    },
};
</script>

<style>
html,
body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 15px;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
}

#stopwatch {
    flex: 0px 1 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
}

#stopwatch-records {
    flex: 0px 1 1;
}

#stopwatch-records {
    list-style: none;
    padding: 0;
    margin: 0 1.2rem;
    overflow: auto;
}

#stopwatch-records li {
    border-bottom: 1px solid #323234;
    display: flex;
    padding: 0.8rem 0;
}

#stopwatch-records li.green {
    color: #2ed158;
}

#stopwatch-records li.red {
    color: #ff453a;
}

#stopwatch-records li:first-child {
    border-top: 1px solid #323234;
}

#stopwatch-records span {
    display: block;
    flex: 0px 1 1;
}

#stopwatch-records span:last-child {
    text-align: right;
}

#stopwatch-controls {
    flex: 80px 0 0;
    padding: 0.2rem 1.2rem;
    overflow: hidden;
    position: relative;
    margin-bottom: 1.5rem;
}

#brand {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}

button#reset-and-lap,
button#start-and-stop {
    width: 80px;
    height: 80px;
    outline: none;
    background-color: #333;
    border: 2px solid #000;
    border-radius: 100%;
    color: #fff;
    font-size: 1rem;
    box-shadow: 0px 0px 0px 2px #333;
    float: left;
}

button#start-and-stop {
    background-color: #082a12;
    box-shadow: 0px 0px 0px 2px #082a12;
    color: #2ed158;
    float: right;
}

button#start-and-stop.red {
    background-color: #320e0b;
    box-shadow: 0px 0px 0px 2px #320e0b;
    color: #ff453a;
}
</style>