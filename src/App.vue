<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>

<script>
import Home from "@/pages/Home/Home";
import Login from "@/pages/login/Login";

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>

</style>
