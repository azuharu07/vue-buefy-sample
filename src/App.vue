<template>
    <div id="app">
        <TableSample></TableSample>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TableSample from "./components/TableSample.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
        TableSample,
    },
};
</script>

<style lang="scss">
@import "@/assets/styles/app";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
