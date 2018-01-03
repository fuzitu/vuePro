<template>
  <div id="app">
    <headerV></headerV>
    <loginForm></loginForm>
  </div>
</template>

<script>
import headerV from './components/headerV'
import loginForm from './pages/loginForm.vue'

export default {
  name: 'app',
  components:{headerV,
  loginForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
