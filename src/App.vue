<template>
  <div id="app">
    <sidebar msg="Welcome to Your Vue.js App"/>
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from './components/layout/sidebar.vue'

export default {
  name: 'app',
  components: {
    sidebar
  }
}
</script>
<style>
  @import './assets/css/style.css';
</style>

