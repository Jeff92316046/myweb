<template>
    <v-navigation-drawer
      v-model="drawer"
      temporary

    >
      <v-container>
        <v-row class="">
          <v-col class="v-col-12">
  
          </v-col>
          <v-col class="v-col-12">
            
          </v-col>
          <v-col class="v-col-12  ">
            <router-Link  to="/" class=""  > 
              <v-btn class="w-100" @click="drawer = !drawer">home</v-btn>
            </router-Link>
          </v-col>
          <v-col class="v-col-12  ">
            <router-link  to="/about"  >
              <v-btn class="w-100" @click="drawer = !drawer">about</v-btn>
            </router-link>
          </v-col>
          <v-col class="v-col-12  ">
            <router-link  to="/contact">
              <v-btn class="w-100" @click="drawer = !drawer">contact</v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
        
        
        
    </v-navigation-drawer>
    <v-app-bar :elevation="10" flat  class="" v-if="width<=960" >
      <v-app-bar-title >
        <v-btn class="pa-0 ma-0 " @click.stop="drawer = !drawer" >
            <v-icon icon="mdi-format-list-bulleted" />
        </v-btn>
      </v-app-bar-title>
    </v-app-bar>
    <v-app-bar :elevation="10" max-width="960px" rounded="4"   v-if="width>960" >
      <v-app-bar-title   >
        <router-link  class="pa-0 ma-0 " to="/">
          <v-btn >
            <v-icon icon="mdi-home" />
          </v-btn>
        </router-link>
        <router-link  class="pa-0 ma-0 " to="/about" >
          <v-btn >about</v-btn>
        </router-link> 
        <router-link  class="pa-0 ma-0 " to="/contact" >
          <v-btn >contact</v-btn>
        </router-link>
      </v-app-bar-title>
    </v-app-bar>
  </template>
  
  <script setup>
    import { useWindowSize } from '@vueuse/core'
    import { ref  } from 'vue'

    const { width, height } = useWindowSize()
    const drawer = ref(null)
  </script>
  