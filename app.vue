<template>
  <div class="wrapper">
    <Nav />
    <!-- <HomeHero /> -->
    <!-- <HomeContent /> -->
  </div>
</template>

<script setup>
const route = useRoute()
console.log(route.params)

</script>


<style lang="sass">
.wrapper
  height: 100vh
  overflow-y: auto
  overflow-x: hidden
  perspective: 10px
</style>