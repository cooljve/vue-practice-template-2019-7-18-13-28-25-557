<template>
    <div>
        <count v-for="count in counterNum"></count>
        <counter-sum></counter-sum>
    </div>
</template>

<script>
    import Count from './Count';
    import CounterSum from './CounterSum';

    export default {
        name: "CounterGroup",
        props: ["counterNum"],
        components: {
            Count,CounterSum
        },
    }
</script>

<style scoped>

</style>