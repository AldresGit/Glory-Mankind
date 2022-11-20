<template>
    <Transition>
        <MenuScreen v-if="!store.getters.introStarted && !store.getters.testStarted"></MenuScreen>
        <IntroScreen v-else-if="store.getters.introStarted && !store.getters.testStarted"></IntroScreen>
        <TestScreen v-else-if="!store.getters.introStarted && store.getters.testStarted"></TestScreen>
        <ResultScreen v-else-if="store.getters.introStarted && store.getters.testStarted"></ResultScreen>
    </Transition>
</template>

<script>
import { useStore } from 'vuex';
import store from '../store/index.js';
import IntroScreen from './IntroScreen.vue';
import MenuScreen from './MenuScreen.vue';
import ResultScreen from './ResultScreen.vue';
import TestScreen from './TestScreen.vue';

export default {
    name: "MainProgram",
    data() {
        return {
            store: useStore()
        }
    },
    components: { MenuScreen, IntroScreen, TestScreen, ResultScreen },
    methods: {
        printStore() {
            console.log(store);
        }
    }
}
</script>

<style scoped>
.v-enter-active {
    transition: opacity 0.8s ease;
    transition-delay: 0.5s;
}

.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>