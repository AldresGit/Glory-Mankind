<template>
    <MenuScreen v-if="!store.getters.introStarted && !store.getters.testStarted"></MenuScreen>
    <IntroScreen v-if="store.getters.introStarted"></IntroScreen>
    <TestScreen v-if="store.getters.testStarted"></TestScreen>
</template>

<script>
import { useStore } from 'vuex';
import store from '../store/index.js';
import IntroScreen from './IntroScreen.vue';
import MenuScreen from './MenuScreen.vue';
import TestScreen from './TestScreen.vue';

export default {
    name: "MainProgram",
    data() {
        return {
            store: useStore()
        }
    },
    components: { MenuScreen, IntroScreen, TestScreen },
    methods: {
        printStore() {
            console.log(store);
        }
    }
}
</script>

<style scoped>

</style>