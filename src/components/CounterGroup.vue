<template>
    <div>
        <count v-for="count in counterNum"></count>
    </div>
</template>

<script>
    import Count from './Count';
    export default {
        name: "CounterGroup",
        props:["counterNum"],
        components:{
            Count
        },
    }
</script>

<style scoped>

</style>