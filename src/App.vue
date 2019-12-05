<template>
  <div id="app">
    <tabcon></tabcon>
    <router-view></router-view>
  </div>
</template>
<script>

  import tabcon from 'components/content/tabcon.vue'
  export default {
    name:"app",
    components:{
      tabcon
    }
  }
</script>
<style>
  @import 'assets/css/base.css';


</style>
