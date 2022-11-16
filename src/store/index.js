import { createStore } from 'vuex'

export default createStore({
  state: {
    introStarted: false,
    testStarted: false
  },
  getters: {
    introStarted(state) {
      return state.introStarted;
    },
    testStarted(state) {
      return state.testStarted;
    }
  },
  mutations: {
    changeIntroMutation(state) {
      state.introStarted = !state.introStarted;
      console.log("Intro Started Changed: " + state.introStarted);
    },
    changeTestMutation(state) {
      state.testStarted = !state.testStarted;
      console.log("Test Started Changed: " + state.testStarted);
    }
  },
  actions: {
    changeIntroStatus(context) {
      context.commit('changeIntroMutation');
    },
    changeTestStatus(context) {
      context.commit('changeTestMutation');
    }
  },
  modules: {
  }
})
