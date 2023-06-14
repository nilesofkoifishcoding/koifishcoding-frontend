<script setup lang="ts">

</script>

<template>
<div class="bg">
  <div class="line">We Build Custom Apps</div>
  <div class="line">& Solve Tough Problems</div>
  <div class="line">For <span>Breakfast</span></div>
</div>
</template>

<style scoped lang="sass">
.bg
  background-color: var(--color-dark)
  font-family: 'Catamaran'
  color: var(--color-white)
  font-size: 7.5vw
  font-weight: bold
  padding: 3rem 4rem

  @media screen and (min-width: 1600px)
    font-size: 8rem
  @media screen and (max-width: 900px)
    font-size: 7.1vw
    padding: 2.5rem 2rem

  .line
    letter-spacing: 0.03rem
    text-align: justify
    text-justify: inter-word

    @media screen and (max-width: 900px)
      letter-spacing: 0.02rem

  > :nth-child(even)
    color: var(--color-dark-b)

  //> :nth-child(-n + 2)
  //
</style>
