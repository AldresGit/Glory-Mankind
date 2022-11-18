<template>
    <section>
        <h4>Question {{actualQuestion + 1}}</h4>
        <h2>{{getQuestion}}</h2>
        <article class="options-container">
            <Slider class="slider" v-model="userAnswer" :min="getMin" :max="getMax" @change="changeAnswer" />
        </article>
    </section>
</template>

<script>
import jsonQuestions from '../data/questions.json';
import Slider from '@vueform/slider';
import "@vueform/slider/themes/default.css";

export default {
  name: 'QuestionSlider',
  props: {
    actualQuestion: Number,
    questionsAnswered: Number
  },
  components: { Slider },
  data() {
    return {
        questions: jsonQuestions,
        mode: 'slider',
        userAnswer: 0,
        min: 0,
        max: 10
    }
  },
  methods: {
    changeAnswer() {
        if(this.actualQuestion == this.questionsAnswered) {
            console.log("-- Update desde Slider --");
            this.$store.dispatch('changeActualAnswer', this.userAnswer);
        }
    }
  },
  computed: {
    getQuestion() {
        console.log("Actual Question: " + this.actualQuestion + ", Questions Answered: " + this.questionsAnswered);
        return this.questions[this.mode][this.actualQuestion].question;
    },
    getMin() {
        return this.questions[this.mode][this.actualQuestion].min;
    },
    getMax() {
        return this.questions[this.mode][this.actualQuestion].max;
    }
  },
  updated() {
    if(this.actualQuestion == this.questionsAnswered) {
        // Actualizar state
        console.log("-- Update desde Slider --");
        this.$store.dispatch('changeActualAnswer', this.userAnswer);
    } else if (this.actualQuestion < this.questionsAnswered) {
        // Get response of this
        console.log("-- Updated para atras desde True False --");
    }
  },
  mounted() {
    if(this.actualQuestion == this.questionsAnswered) {
        // Actualizar state
        console.log("-- Mounted desde Slider --");
        this.$store.dispatch('changeActualAnswer', this.userAnswer);
    }  else if (this.actualQuestion < this.questionsAnswered) {
        // Get response of this
        console.log("-- Mounted para atras desde Slider --");
    }
  }
}
</script>

<style scoped>
article {
    display: flex;
    flex-direction: row;
    justify-content: center;
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

.slider {
    width: 300px;
    margin: 40px;

    --slider-connect-bg: #ddeeff;
    --slider-tooltip-bg: #ddeeff50;
    --slider-handle-ring-color: #ddeeff50;
}

@media (max-width: 600px) {
    h2 {
        font-size: 16px;
    }

    h4 {
        font-size: 12px;
    }
}

@media (min-width: 601px) {
    h2 {
        font-size: 24px;
    }

    h4 {
        font-size: 16px;
    }
}

</style>