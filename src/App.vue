<template>
  <MainProgram></MainProgram>
</template>

<script>
import MainProgram from './components/MainProgram.vue';


export default {
  name: 'App',
  components: {
    MainProgram
  }
}
</script>

<style>

@font-face {
  font-family: "PressStart2P";
  src: local("PressStart2P"),
   url(./fonts/PressStart2P-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Abel";
  src: local("Abel"),
   url(./fonts/Abel-Regular.ttf) format("truetype");
}

* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  background-color: #2c3e50;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ddeeff;

  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
