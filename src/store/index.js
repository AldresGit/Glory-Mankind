import { createStore } from 'vuex'

export default createStore({
  state: {
    introStarted: false,
    testStarted: false,
    actualAnswer: '',
    answers: []
  },
  getters: {
    introStarted(state) {
      return state.introStarted;
    },
    testStarted(state) {
      return state.testStarted;
    },
    actualAnswer(state) {
      return state.actualAnswer;
    },
    answers(state) {
      return state.answers;
    }
  },
  mutations: {
    changeIntroMutation(state) {
      state.introStarted = !state.introStarted;
    },
    changeTestMutation(state) {
      state.testStarted = !state.testStarted;
    },
    setActualAnswerMutation(state, answer) {
      state.actualAnswer = answer;
    },
    addAnswerMutation(state, answer) {
      state.answers.push(answer);
    },
    deleteAnswersMutation(state) {
      state.answers = [];
    }
  },
  actions: {
    changeIntroStatus(context) {
      context.commit('changeIntroMutation');
    },
    changeTestStatus(context) {
      context.commit('changeTestMutation');
    },
    changeActualAnswer(context, answer) {
      context.commit('setActualAnswerMutation', answer);
    },
    addAnswer(context, answer) {
      context.commit('addAnswerMutation', answer);
    },
    deleteAnswers(context) {
      context.commit('deleteAnswersMutation');
    }
  },
  modules: { }
})
