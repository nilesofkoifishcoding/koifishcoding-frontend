<script setup lang="ts">

</script>

<template>
<div class="exp">
  <div class="title">
<!--    <div class="line">Our Three C's</div>-->
    <div class="logo">
      <img src="~/assets/jpgs/core_cs.png" alt="">
    </div>
<!--      <img src="~/assets/svgs/koi_logo.png" alt="" />-->
<!--    </div>-->
<!--    <div class="line">3 C's</div>-->
  </div>
</div>
</template>

<style scoped lang="sass">
.exp
  min-height: 30rem
  padding-top: 4rem
  background-color: var(--color-button-1-lighter)

  .title
    margin: 0 auto
    display: flex
    flex-direction: column
    align-items: center
    font-family: 'Catamaran'
    color: var(--color-dark)
    font-weight: bold
    font-size: 4rem
    .logo
      display: flex
      align-items: center
      justify-content: center
      height: 20rem
      position: relative
      box-shadow: 0 0 8px 1px var(--color-dark-c)
      border-radius: 38px
      img
        height: 100%
</style>
