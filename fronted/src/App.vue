<template>
  <div>
<Navbar/>
<router-view/>
<Footer/>
  </div>
</template>
<script>
import Navbar from './components/NavBarComp.vue';
import Footer from './components/FooterComp.vue';
export default {
  components: {Navbar, Footer}
}
</script>
<style>
#app {
  font-family: 'Cormorant', serif;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  color:white !important;
  overflow: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  color: white !important;
  display: inline-block;
   /* Adjust this value to control the space */
  text-decoration: none;
 
}

nav a.router-link-exact-active {
  color: #42b983 !important;
}
</style>
