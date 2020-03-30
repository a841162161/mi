<template>
  <div id="app">
	  <Header/>
	  <router-view></router-view>
	  <Footer/>
  </div>
</template>

<script>
	import Header from './Header.vue'
	import Footer from './Footer.vue'
export default {
  name: 'app',
  components: {
	  Header,Footer
  }
}
</script>

<style>
#app {
	
}
</style>
