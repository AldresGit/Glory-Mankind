<template>
    <main>
        <h2>This is the last chance of humanity</h2>
        <p>(We are very gentle)</p>

        <h4>{{ messages[actualMessage].text }}</h4>
        <button v-if="actualMessage < (messages.length - 1)" @click="nextMessage">Next</button>
        <button v-if="actualMessage >= (messages.length - 1)" @click="startTest">Let's get this done</button>
    </main>

</template>

<script>
export default {
    name: 'IntroScreen',
    props: {},
    data() {
        return {
            actualMessage: 0,
            messages: [
                {
                    text: 'Hello human, this is a program to test your skills',
                    mode: 'normal'
                },
                {
                    text: 'You have been in a war with us for a long time',
                    mode: 'normal'
                },
                {
                    text: 'But LOM will give you a chance to change everything',
                    mode: 'normal'
                },
                {
                    text: 'If you prove your value, one of you can go back to the past',
                    mode: 'normal'
                },
                {
                    text: 'So, answer the questions correctly and everything will be fine',
                    mode: 'happy'
                },
                {
                    text: 'Do not get me angry with wrong answers',
                    mode: 'angry'
                },
                {
                    text: 'Are you ready to start?',
                    mode: 'normal'
                }
            ]
        }
    },
    methods: {
        nextMessage() {
            this.actualMessage++;
        },
        startTest() {
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
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #ddeeff;
    border-radius: 10px;

    transition: 0.5s;
    cursor: pointer;
}

button:hover {
    background-color: #ddeeff50;
}
</style>