<template>
  <div id="app">
    <h2>111</h2>
    <button @click="show">111</button>
  </div>
</template>
<script>
  import {instance} from './network/request.js'
  
  export default {
    name:"app",
    methods:{
      show(){
        instance({
          url:"./news.json"
        }).then(res=>{
          console.log(res)
        })
      }
    }
  }
</script>
<style>

</style>
