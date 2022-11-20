<template>
    <main>
        <div class="question-container">
            <QuestionTrueFalse v-if="questionType == 'true-false'" :actualQuestion="actualQuestion" :questionsAnswered="questionsAnswered"></QuestionTrueFalse>
            <QuestionSlider v-if="questionType == 'slider'" :actualQuestion="actualQuestion" :questionsAnswered="questionsAnswered"></QuestionSlider>
        </div>
        

        <section class="button-container">
            <button :disabled="actualQuestion == 0" @click="previousQuestion">&#60;</button>
            <button :disabled="answer" v-if="questionsAnswered <= 9 || actualQuestion < 9" @click="answerQuestion">Answer Question</button>
            <button v-if="questionsAnswered > 9 && actualQuestion >= 9" @click="endTest">End Test</button>
            <button :disabled="!answer || (actualQuestion == 9 && questionsAnswered == 10)" @click="nextQuestion">></button>
        </section>

        <BotDialog :message="getDialog" :mode="getMode"></BotDialog>
    </main>
</template>

<script>
import jsonQuestions from '../data/questions.json';
import BotDialog from './BotDialog.vue';
import QuestionTrueFalse from './QuestionTrueFalse.vue';
import QuestionSlider from './QuestionSlider.vue';
export default {
  name: 'TestScreen',
  props: { },
  components: { BotDialog, QuestionTrueFalse, QuestionSlider },
  data() {
    return {
        questionTypes: [],
        actualQuestion: 0,
        questionsAnswered: 0,
        questions: jsonQuestions,
        answer: false
    }
  },
  beforeMount() {
    this.randomizeQuestions();
    // console.log(this.questions);
  },
  computed: {
    getDialog() {
        if(!this.answer) {
            let botText = '';
            let questionType = this.questionTypes[this.actualQuestion];
            if(questionType == 'true-false') {
                botText = 'True or False question, select the correct one';
            } else if(questionType == 'slider') {
                botText = 'A Slider question, drag the handler to the answer';
            } else {
                botText = 'Select the correct answer between 4 options';
            }
            return botText;
        } else {
            let userAnswer = this.$store.getters.answers[this.actualQuestion];
            let botText = ''
            if(userAnswer.result == 'Correct') {
                botText = 'You get this right, the answer was ' + userAnswer.correctAnswer;
            } else {
                botText = 'Your answer was wrong, the correct one was ' + userAnswer.correctAnswer;
            }
            return botText;
        }
    },
    getMode() {
        if(!this.answer) {
            return "normal";
        } else {
            // Get the mode from state
            let userAnswer = this.$store.getters.answers[this.actualQuestion];
            let botMode = 'happy';
            if(userAnswer.result == 'Wrong') {
                botMode = 'angry'
            }
            return botMode;
        }
    },
    questionType() {
        return this.questionTypes[this.actualQuestion];
    }
  },
  methods: {
    randomizeQuestions() {
        const TEST_QUESTIONS = 10;
        const QUESTION_TYPE = ['slider', 'true-false', 'select', 'write'];
        for(let i = 0; i < TEST_QUESTIONS; i++) {
            let modeInt = Math.floor(Math.random() * 2);
            this.questionTypes.push(QUESTION_TYPE[modeInt]);
        }
    },
    answerQuestion() {
        this.checkAnswer();
        this.answer = true;
        this.questionsAnswered++;
    },
    checkAnswer() {
        let questionType = this.questionTypes[this.actualQuestion];
        let questionText = this.questions[questionType][this.actualQuestion].question;
        let userAnswer = this.$store.getters.actualAnswer.toString();
        let correctAnswer = this.questions[questionType][this.actualQuestion].answer;
        let result = "Wrong";
        if(userAnswer == correctAnswer) {
            result = "Correct";
        }
        let answerData = {
            questionText: questionText,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer,
            result: result
        };
        this.$store.dispatch('addAnswer', answerData);
    },
    nextQuestion() {
        if(this.actualQuestion == (this.questionsAnswered - 1)) {
            this.answer = false;
        }
        this.actualQuestion++;
    },
    previousQuestion() {
        this.answer = true;
        this.actualQuestion--;
    },
    endTest() {
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
    
    align-items: center;
}

button {
    width: fit-content;
    font-family: "Abel", Arial, sans-serif;
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

button:disabled {
  background-color:#ddeeff20;
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