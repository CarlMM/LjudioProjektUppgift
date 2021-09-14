<template>
  <div>
    <Nav/>
    <router-view/>
    
  </div>
</template>



<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from './components/Home.vue'
import Nav from './components/Nav.vue'


export default{
  components:{
    Nav
  }
}


</script>

<style>

</style>