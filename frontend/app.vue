<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>

useHead({
  htmlAttrs: {
    dir: 'rtl',
    lang: 'fa'
  }
})

</script>
<style>

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>