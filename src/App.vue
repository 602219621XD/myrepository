<template>
  <div>
    <tablebar></tablebar>
    <router-view></router-view>
    <footerbar></footerbar>
    <backtop></backtop>
  </div>
</template>

<script>
import tablebar from "./components/Tablebar";
import backtop from "./components/Backtop";
import footerbar from "./components/Footerbar";
export default {
  components: {
    tablebar,
    backtop,
    footerbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
