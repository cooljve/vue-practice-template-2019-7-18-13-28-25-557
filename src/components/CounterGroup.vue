<template>
    <div>
        <count v-for="count in counterNum" @resetSum="resetSum($event)"></count>
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
        methods:{
            resetSum(val){
                this.$store.commit('resetSum',val);
            }
        },
    }
</script>

<style scoped>

</style>