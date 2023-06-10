<script setup lang="ts">

</script>

<template>
<div class="design">
  <div class="panel">
    <div class="overlay">
      <span>We</span>
      <span>Design</span>
      <span>Too!</span>

    </div>
  </div>
</div>
</template>

<style scoped lang="sass">
.design
  margin-top: 15rem
  display: flex
  justify-content: center

  .panel
    width: 55rem
    height: 55rem
    box-shadow: 0 0 4px 0 var(--color-dark-b)
    background-image: url('~/assets/jpgs/dome.jpg')
    background-size: cover
    background-position: center
    position: relative
    transform: rotateZ(15deg)
    border-radius: 20px

    .overlay
      position: absolute
      inset: 0
      background-color: rgba(0, 0, 0, 0.1)
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      color: white
      font-family: 'Bungee Shade'
      color: var(--color-brand-1)
      font-size: 14rem
      transform: rotateZ(-30deg)
      border-radius: 20px

      .title
        font-family: 'Bungee Shade'
        font-size: 12rem
        text-align: center
        margin-top: 3rem
        color: var(--color-white)
</style>
