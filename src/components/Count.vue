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
                this.$emit("reduce", this.count);
            },
            addNumber() {
                this.count++;
                this.$emit("increase", this.count);
            }
        }
    }
</script>

<style scoped>

</style>