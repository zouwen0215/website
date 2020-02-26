<template>
  <div id="app">
      <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      
    }
  },created(){
    console.log(this.$store.state.user)
      this.$store.commit('managementLogin','xxx')
       console.log(this.$store.state.user)
  },
}
</script>

<style>
#app {
  text-align: center;
}
</style>
