<template>
    <div><span>总计：{{sum}}</span></div>
</template>

<script>
    export default {
        name: "CounterSum",
        computed:{
            sum(){
                return this.$store.state.sum;
            }
        }
    }
</script>

<style scoped>

</style>