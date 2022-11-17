<template>
    <main>
        <h2>I'm the Test</h2>
        <div class="button-container">
            <button v-if="actualQuestion > 0" @click="previousQuestion">Previous question</button>
            <button v-if="questionsAnswered >= 9" @click="endTest">Go Back</button>
            <button v-if="questionsAnswered < 9" @click="nextQuestion">Next question</button>
        </div>
        <BotDialog :message="getDialog" :mode="getMode"></BotDialog>
    </main>
</template>

<script>
import jsonQuestions from '../data/questions.json';
import BotDialog from './BotDialog.vue';
export default {
  name: 'TestScreen',
  props: { },
  data() {
    return {
        questionTypes: [],
        actualQuestion: 0,
        questionsAnswered: 0,
        questions: jsonQuestions
    }
  },
  beforeMount() {
    this.randomizeQuestions();
    console.log(this.questions);
  },
  computed: {
    getDialog() {
        let questionType = this.questionTypes[this.actualQuestion];
        return this.questions[questionType][this.actualQuestion].question;
    },
    getMode() {
        return "normal";
    }
  },
  methods: {
    randomizeQuestions() {
        const TEST_QUESTIONS = 10;
        const QUESTION_TYPE = ['true-false', 'slider', 'select', 'write'];
        for(let i = 0; i < TEST_QUESTIONS; i++) {
            let modeInt = Math.floor(Math.random() * 1);
            this.questionTypes.push(QUESTION_TYPE[modeInt]);
        }
    },
    nextQuestion() {
        if(this.actualQuestion == this.questionsAnswered) {
            this.questionsAnswered++;
        }
        this.actualQuestion++;
        console.log("Actual Question: " + this.actualQuestion + ", Questions Answered: " + this.questionsAnswered);
    },
    previousQuestion() {
        this.actualQuestion--;
        console.log("Actual Question: " + this.actualQuestion + ", Questions Answered: " + this.questionsAnswered);
    },
    endTest() {
        this.$store.dispatch('changeIntroStatus');
        this.$store.dispatch('changeTestStatus');
    }
  },
  components: { BotDialog }
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