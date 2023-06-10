<script setup lang="ts">

</script>

<template>
  <div class="orgs">
    <div class="arrow"></div>
    <div class="title">Trusted by forward-thinking organizations</div>
    <div class="logos">
      <div class="logo billmo">
        <img src="~/assets/jpgs/billmo.jpeg" alt="">
      </div>
      <div class="logo sf">
        <img src="~/assets/jpgs/servicefusion.png" alt="">
      </div>
      <div class="logo royal">
        <img src="~/assets/jpgs/royal.png" alt="">
      </div>

      <div class="logo sherpa">
        <img src="~/assets/jpgs/sherpa.png" alt="">
      </div>

      <div class="logo hlt">
        <img src="~/assets/jpgs/hlt.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
$arrow-size: 20px

.orgs
  margin: 3rem 0 0
  padding-bottom: 3rem
  position: relative

  .arrow
    width: $arrow-size
    height: $arrow-size
    transform: rotateZ(45deg)
    background-color: white
    position: absolute
    left: calc(50% - ($arrow-size / 2))
    bottom: calc(0px - ($arrow-size / 2))
    z-index: 100
    background-color: white

  .title
    margin-top: 1rem
    text-align: center
    font-family: 'Kalam'
    font-family: 'Catamaran'
    font-weight: 700
    font-size: 1rem
    color: var(--color-power-gray)
    letter-spacing: 0.03rem

  .logos
    display: flex
    justify-content: center
    align-items: center
    margin-top: 1.2rem

    .logo
      //border: 1px red solid
      filter: grayscale(1)
      margin: 0 3rem
      height: 45px
      transition: filter 200ms ease-in-out
      img
        height: 100%

      &:hover
        filter: grayscale(0.3)
        transition: filter 200ms ease-in-out

    .logo.royal
      opacity: 0.64

    .logo.sherpa
      opacity: 0.7
      height: 60px

    .logo.billmo
      opacity: 0.85
      height: 40px

    .logo.hlt
      height: 65px
      opacity: .8

</style>
