<template>
    <div>
        <count v-for="count in counterNum" @increase="increase" @reduce="reduce"></count>
        <counter-sum></counter-sum>
    </div>
</template>

<script>
    import Count from './Count';
    import CounterSum from './CounterSum';

    export default {
        name: "CounterGroup",
        props: ["counterNum"],
        data() {
            return {
            }
        },
        components: {
            Count,CounterSum
        },
        methods: {
            increase() {
                this.$store.commit('increase');
            },
            reduce() {
                this.$store.commit('decrease');
            }
        }
    }
</script>

<style scoped>

</style>