import { createStore } from 'vuex'

export default createStore({
  state: {
    introStarted: false,
    testStarted: false,
    // Borrable
    questionTypes: []
  },
  getters: {
    introStarted(state) {
      return state.introStarted;
    },
    testStarted(state) {
      return state.testStarted;
    },
    // Borrable
    questionTypes(state) {
      return state.questionTypes;
    }
  },
  mutations: {
    changeIntroMutation(state) {
      state.introStarted = !state.introStarted;
    },
    changeTestMutation(state) {
      state.testStarted = !state.testStarted;
    },
    setQuestionTypesMutation(state, types) {
      state.questionTypes = types;
    }
  },
  actions: {
    changeIntroStatus(context) {
      context.commit('changeIntroMutation');
    },
    changeTestStatus(context) {
      context.commit('changeTestMutation');
    },
    // Borrable
    setQuestionTypes(context, types) {
      context.commit('setQuestionTypesMutation', types);
    }
  },
  modules: { }
})
