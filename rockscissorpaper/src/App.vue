<template>
  <div class="app-root">
  <img :src="botimg">
  <img :src="youimg">
  <div class="actions">
    <img @click="playGame('rock')" src="images/rock-btn.png">
    <img @click="playGame('scissor')" src="images/scissor-btn.png">
    <img @click="playGame('paper')" src="images/paper-btn.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      'botaction': 'ROCK',
      'youimg': 'images/Placeholder-You.png',
      'botimg': 'images/Placeholder-Bot.png',
    }
  },
  methods: {
    gameResult: function(you, bot) {
      if (you === bot) return 'draw';
      else if ((you === 'paper' && bot === 'rock')
      || (you === 'rock' && bot === 'scissor')
      || (you === 'scissor' && bot === 'paper')) return 'win';
      else return 'lose';
    },
    playGame: function(a) {
      const result = 'draw';
      this.youimg = `images/${a}-${result}.png`;
    }
  }
}
</script>

<style>
body {
    background: #44D7B6;
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
  max-width: 375px;
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
