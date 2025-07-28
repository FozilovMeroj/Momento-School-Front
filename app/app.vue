<script setup>
import {initThemes} from '~/composables/initialization/vuetify-themes.js'
  
onMounted(() => {
  initThemes()
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
