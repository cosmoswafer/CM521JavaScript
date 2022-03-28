<template>
    <div class="app-root">
        <img @click="resetGame" :src="botimg" />
        <img @click="resetGame" :src="youimg" />
        <div class="actions">
            <img @click="playGame('rock')" src="images/rock-btn.png" />
            <img @click="playGame('scissor')" src="images/scissor-btn.png" />
            <img @click="playGame('paper')" src="images/paper-btn.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            botaction: 'ROCK',
            youimg: 'images/Placeholder-You.png',
            botimg: 'images/Placeholder-Bot.png',
        };
    },
    methods: {
        botAction: function () {
            const actions = ['rock', 'paper', 'scissor'];
            const r = Math.floor(Math.random() * 3);
            return actions[r];
        },
        gameResult: function (you, bot) {
            if (you === bot) return ['draw', 'draw'];
            else if (
                (you === 'paper' && bot === 'rock') ||
                (you === 'rock' && bot === 'scissor') ||
                (you === 'scissor' && bot === 'paper')
            )
                return ['win', 'lose'];
            else return ['lose', 'win'];
        },
        playGame: function (a) {
            const bot = this.botAction();
            const [youresult, botresult] = this.gameResult(a, bot);
            this.youimg = `images/${a}-${youresult}.png`;
            this.botimg = `images/${bot}-${botresult}.png`;
        },
        resetGame: function () {
            this.youimg = 'images/Placeholder-You.png';
            this.botimg = 'images/Placeholder-Bot.png';
        },
    },
};
</script>

<style>
body {
    background: #44d7b6;
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;
}

#app {
    padding-top: 60px;
}

.app-root {
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 60px);
}

.app-root img {
    max-width: 275px;
}

.app-root .actions {
    display: flex;
    gap: 60px;
}

.app-root .actions img {
    max-width: 100px;
    cursor: pointer;
}
</style>
