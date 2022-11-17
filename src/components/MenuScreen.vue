<template>
    <main>
        <h1>Glory for the Mankind</h1>
        <h4>A human testing program</h4>
        <button @click="startIntro">Let's Start</button>
    </main>
    
</template>

<script>
export default {
  name: 'MenuScreen',
  props: { },
  methods: {
    startIntro() {
        this.$store.dispatch('changeIntroStatus');
    }
  }
}
</script>

<style scoped>
main {
    position: absolute;
    height: 100%;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 48px;
    font-family: "PressStart2P", Helvetica, Arial, sans-serif;
    margin: 10px;
}

h4 {
    font-family: "PressStart2P", Helvetica, Arial, sans-serif;
    margin: 10px;
}

button {
    width: fit-content;
    padding: 20px 30px;
    margin: 30px;

    font-family: "Abel", Arial, sans-serif;
    font-size: 24px;
    color: #ddeeff;
    background-color: rgba(0,0,0,0);
    border: 1px solid #ddeeff;
    border-radius: 10px;

    transition: 0.5s;
    cursor: pointer;
}

button:hover {
    background-color: #ddeeff50;
}
</style>