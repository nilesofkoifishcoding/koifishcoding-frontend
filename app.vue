<template>
  <Nav />
  <!-- <HomeHero /> -->
  <HomeContent />
</template>

<script setup>
const route = useRoute()
console.log(route.params)

</script>


<style lang="sass">
.wrapper
  background-color: var(--color-bg-1)
</style>