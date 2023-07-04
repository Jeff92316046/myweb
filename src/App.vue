<script>
import Home from './Home.vue'
import About from './About.vue'
import Contact from './Contact.vue'
//import NotFound from './NotFound.vue'

const routes = {
  '/': Home,
  '/about': About,
  '/contact' : Contact
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template id="root">
  <v-card >
    <v-layout>
      <v-app-bar color="rgba(23, 18 ,127 ,1)" density="compact">
        <v-app-bar-nav-icon href="#/">
          <v-img src="@/assets/cat.png" srcset="/assets/cat.png 50px"/>
        </v-app-bar-nav-icon>
        <v-btn variant="text" href="#/about">about</v-btn>
        <v-btn variant="text" href="#/contact">cantact</v-btn>
      </v-app-bar>  
    </v-layout>
    <component class="comp" :is="currentView" />
  </v-card>
  

</template>
<style>
v-img { 
    aspect-ratio: 100%; 
  }
#bar{
  position: relative;
  background-color: black;
}
.comp{
  position: relative; 
  margin-bottom: 0%;
  height: 100%;
}
v-btn{
  color: white;
}
.app{
  background-color: black;
}
</style>