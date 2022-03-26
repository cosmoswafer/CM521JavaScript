<template>
  <div class="app-root">
  <img src="images/Placeholder-Bot.png">
  <img src="images/Placeholder-You.png">
  <div class="actions">
    <img src="images/rock-btn.png">
    <img src="images/scissor-btn.png">
    <img src="images/paper-btn.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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
}
</style>
