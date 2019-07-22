<template>
    <div>
        <button @click="minusNumber">-</button>
        <span>  {{count}}  </span>
        <button @click="addNumber">+</button>
    </div>
</template>

<script>
    export default {
        name: "Count",
        props:['number'],
        data() {
            return {
                count: 0,
            }
        },
        methods: {
            minusNumber() {
                this.count--;
                this.$store.commit('decrease');
            },
            addNumber() {
                this.count++;
                this.$store.commit('increase');
            }
        }
    }
</script>

<style scoped>

</style>