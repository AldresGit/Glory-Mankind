<template>
    <section>
        <h4>Question {{actualQuestion + 1}}</h4>
        <h2>{{getQuestion}}</h2>
        <article>
            <button :disabled="userAnswer" @click="changeAnswer">True</button>
            <button :disabled="!userAnswer" @click="changeAnswer">False</button>
        </article>
    </section>
</template>

<script>
import jsonQuestions from '../data/questions.json';

export default {
  name: 'QuestionTrueFalse',
  props: {
    actualQuestion: Number,
    questionsAnswered: Number
  },
  data() {
    return {
        questions: jsonQuestions,
        mode: 'true-false',
        userAnswer: true,
    }
  },
  methods: {
    changeAnswer() {
        if(this.actualQuestion == this.questionsAnswered) {
            this.userAnswer = !this.userAnswer;
        }
    }
  },
  computed: {
    getQuestion() {
        console.log("Actual Question: " + this.actualQuestion + ", Questions Answered: " + this.questionsAnswered);
        return this.questions[this.mode][this.actualQuestion].question;
    }
  },
  updated() {
    if(this.actualQuestion == this.questionsAnswered) {
        // Actualizar state
        console.log("-- Update desde True False --");
        this.$store.dispatch('changeActualAnswer', this.userAnswer);
    } else if (this.actualQuestion < this.questionsAnswered) {
        // Get response of this
        console.log("-- Updated para atras desde True False --");
    }
  },
  mounted() {
    if(this.actualQuestion == this.questionsAnswered) {
        // Actualizar state
        console.log("-- Mounted desde True False --");
        this.$store.dispatch('changeActualAnswer', this.userAnswer);
    } else if (this.actualQuestion < this.questionsAnswered) {
        // Get response of this
        console.log("-- Mounted para atras desde True False --");
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

h2 {
    font-family: "PressStart2P", Helvetica, Arial, sans-serif;
    margin: 10px;
}

h4 {
    font-family: "PressStart2P", Helvetica, Arial, sans-serif;
    margin: 30px;
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

button:disabled {
  background-color:#ddeeff20;
}

@media (max-width: 600px) {
    article {
        width: 300px;
    }

    h2 {
        font-size: 16px;
    }

    h4 {
        font-size: 12px;
    }

    button {
        padding: 10px 15px;
        margin: 15px;
        font-size: 16px;
    }
}

@media (min-width: 601px) {
    article {
        width: 400px;
    }

    h2 {
        font-size: 24px;
    }

    h4 {
        font-size: 16px;
    }

    button {
        padding: 20px 30px;
        margin: 30px;
        font-size: 24px;
    }
}
</style>