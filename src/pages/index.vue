<template>
  <AppBar></AppBar>
  <v-container class="h-100">
    <v-row class="h-100 align-center">
      <v-col :class="class_str" class="v-col-6">
        <v-img  src="@\assets\fullcat.png"  @click="plus"/>
      </v-col>
    </v-row>
  </v-container>
  
  <AppFooter></AppFooter>
</template>

<script setup>
import { ref } from "vue"
const count = ref(3)
const class_str = ref("offset-3")
function plus(){
  count.value = count.value==0 ? 7 : count.value-1
  class_str.value = "offset-" +count.value
}
</script>
