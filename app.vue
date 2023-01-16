<template>
  <Nav />
  <div class="wrapper">
    <!-- <HomeHero /> -->
    <HomeContent />
  </div>
</template>

<script setup>
const route = useRoute()
console.log(route.params)

</script>


<style lang="sass">
.wrapper
  background-color: var(--color-bg-1)
//   height: 100vh
//   overflow-y: auto
//   overflow-x: hidden
//   perspective: 10px
</style>