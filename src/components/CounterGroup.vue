<template>
    <div>
        <count v-for="count in counterNum" @increase="increase" @reduce="reduce"></count>
        <counter-sum :sum="sum"></counter-sum>
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
                sum: 0
            }
        },
        components: {
            Count,CounterSum
        },
        methods: {
            increase() {
                this.sum++;
            },
            reduce() {
                this.sum--;
            }
        }
    }
</script>

<style scoped>

</style>