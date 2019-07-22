<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <div>
            <input type="text" v-model="counterNum"/>
            <counter-group :counterNum="parseInt(counterNum)||0"></counter-group>
        </div>
    </div>
</template>

<script>
    import CounterGroup from './components/CounterGroup'

    export default {
        name: 'app',
        data() {
            return {
                number: 0,
                counterNum: 0
            }
        },
        methods: {},
        components: {
            CounterGroup
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
