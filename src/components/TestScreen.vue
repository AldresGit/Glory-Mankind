<template>
    <main>
        <h2>I'm the Test</h2>
        <button @click="endTest">Go Back</button>
    </main>
</template>

<script>
export default {
  name: 'IntroScreen',
  props: {
    
  },
  methods: {
    endTest() {
        this.$store.dispatch('changeIntroStatus');
        this.$store.dispatch('changeTestStatus');
    }
  }
}
</script>

<style scoped>
main {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h2 {
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