<template>
    <main>
        <h2>Test Results</h2>
        <RadialProgress class="progress" :diameter="200" :completed-steps="worth" :total-steps="max" startColor="#ddeeff" stopColor="#eaf3fb">
            <p>Worth</p>
            <p>{{ worth }}%</p>
        </RadialProgress>
        <button @click="restart">Restart</button>

        <BotDialog :message="message"></BotDialog>
    </main>

</template>

<script>
import BotDialog from './BotDialog.vue';
import RadialProgress from "vue3-radial-progress";

export default {
    name: "IntroScreen",
    props: {},
    data() {
        return {
            worth: 0,
            max: 100,
            message: '',
            answers: []
        }
    },
    mounted() {
        this.answers = this.$store.getters.answers;
        this.calculateWorth();
    },
    methods: {
        calculateWorth() {
            this.answers.forEach(answer => {
                if (answer.result == 'Correct') {
                    this.worth += 10;
                }
            });
            this.message = 'End of the test, your Worthiness is ' + this.worth + '%. ';
            if (this.worth < 50) {
                this.message += 'You have done it poorly. Humanity is in danger';
            } else if (this.worth < 80) {
                this.message += 'Your results are correct. One step closer to salvation';
            } else {
                this.message += 'That was excelent. Humans may be amazing sometimes';
            }
        },
        restart() {
            this.$store.dispatch('changeIntroStatus');
            this.$store.dispatch('changeTestStatus');
            this.$store.dispatch('deleteAnswers');
        }
    },
    components: { BotDialog, RadialProgress }
}
</script>

<style scoped>
main {
    position: absolute;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.progress {
    margin: 10px;
}

h2 {
    font-family: "PressStart2P", Helvetica, Arial, sans-serif;
    margin: 10px;
}

p {
    font-family: "PressStart2P", Helvetica, Arial, sans-serif;
    margin: 5px;
}

button {
    width: fit-content;

    font-family: "Abel", Arial, sans-serif;
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

@media (max-width: 600px) {
    main {
        justify-content: flex-start;
    }
    button {
        padding: 10px 15px;
        margin: 15px;
        font-size: 16px;
    }
}

@media (min-width: 601px) {
    main {
        justify-content: center;
    }
    button {
        padding: 20px 30px;
        margin: 30px;
        font-size: 24px;
    }
}
</style>