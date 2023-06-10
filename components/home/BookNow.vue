<script setup lang="ts">

</script>

<template>
<div class="container">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>

  <div class="connector"></div>
  <div class="connector"></div>

  <NuxtLink to="https://calendly.com/meet-with-koi-fish-coding/30min">
    <div class="button-container">
      Book a Zoom Call Now
    </div>
  </NuxtLink>
</div>
</template>

<style scoped lang="sass">
$border-color: var(--color-border-1)
$border-radius: 50px
$border-width: 1px

.container
  margin: 4rem 0 4rem
  position: relative
  display: grid
  grid-template-columns: 2fr 1fr 1fr 2fr
  grid-template-rows: repeat(2, 1fr)

  @media screen and (max-width: 1200px)
    grid-template-columns: 1fr 25% 25% 1fr

  @media screen and (max-width: 600px)
    grid-template-columns: 1fr 35% 35% 1fr

  .child
    position: relative
    height: 24px
    //border: 1px red solid
    border-color: $border-color
    border-style: solid
    border-width: 0

    &:nth-child(n + 5)
      top: -1px
    &:nth-child(n + 9)
      top: -2px
    &:nth-child(n + 13)
      top: -3px
    &:nth-child(4n + 2)
      left: -1px
      //left: -2px
    &:nth-child(4n + 3)
      right: -1px
      //right: -2px

    &:nth-child(2)
      border-left-width: $border-width
      border-top-width: $border-width
      border-top-left-radius: $border-radius
    &:nth-child(3)
      border-top-width: $border-width
      border-right-width: $border-width
      border-top-right-radius: $border-radius
    &:nth-child(5)
      border-right-width: $border-width
      border-bottom-width: $border-width
      border-bottom-right-radius: $border-radius
    &:nth-child(8)
      border-left-width: $border-width
      border-bottom-width: $border-width
      border-bottom-left-radius: $border-radius

    &:nth-child(9)
      border-top-width: $border-width
      border-right-width: $border-width
      border-top-right-radius: $border-radius
    &:nth-child(14)
      border-left-width: $border-width
      border-bottom-width: $border-width
      border-bottom-left-radius: $border-radius
    &:nth-child(15)
      border-right-width: $border-width
      border-bottom-width: $border-width
      border-bottom-right-radius: $border-radius
    &:nth-child(12)
      border-left-width: $border-width
      border-top-width: $border-width
      border-top-left-radius: $border-radius


  .connector
    position: absolute
    width: 2px
    //width: 4px
    background-color: $border-color
    height: 1px
    //height: 2px
    inset: 0
    margin: 0 auto

    &:nth-child(even)
      width: 2px
      //width: 4px
      height: 2px
      bottom: 3px
      top: unset
      background-color: $border-color


  .button-container
    //display: none
    position: absolute
    width: 20%
    height: 50px
    text-align: center
    //border: 1px red solid
    margin: auto auto
    background-color: var(--color-button-1)
    border-radius: 8px
    color: white
    inset: 0
    font-family: 'Catamaran'
    font-weight: 600
    font-size: 1.2rem
    display: flex
    justify-content: center
    align-items: center

    transition: all 0.15s cubic-bezier(.4, 0, .2, 1)
    z-index: 0
    box-shadow: 0 8px 7px 1px var(--color-dark-d)

    @media screen and (max-width: 1200px)
      width: 40%

    @media screen and (max-width: 600px)
      width: 50%

    &:hover
      cursor: pointer
      //position: relative
      //top: -4px
      transition: all 0.15s cubic-bezier(.4, 0, .2, 1)
      box-shadow: 0 10px 14px 1px var(--color-dark-d)
      background-color: var(--color-button-1-darker)
</style>
