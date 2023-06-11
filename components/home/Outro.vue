<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const loaded = ref(false)
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:finish', () => { loaded.value = true })

</script>

<template>
<div class="outro">
  <div class="bg-city"></div>
  <div class="info">
    <div class="header">
      <img src="~/assets/svgs/koi_logo.png" alt="">
    </div>
    <div class="space"></div>
    <div class="address item">
      <div class="icon">
        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-location-dot']" />
      </div>
      <div class="content">
        <div>Kreate Hub</div>
        <div>309 Plus Park Blvd</div>
        <div>Suite #111</div>
        <div>Nashville, TN 37217</div>
      </div>
    </div>
    <div class="social item">
      <div class="icon">
        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-share-nodes']" />
      </div>
      <div class="content">
        <div>Instagram</div>
        <div>Facebook</div>
        <div>YouTube</div>
      </div>
    </div>
    <div class="phone item">
      <div class="icon">
        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-phone']" />
      </div>
      <div class="content">(615) 382-3829</div>
    </div>
    <div class="legal">
      <div>Privacy Policy</div>
      <div>Terms of Service</div>
    </div>
  </div>
<!--  <div class="bg-image"></div>-->
<!--  <div class="dark-overlay-1"></div>-->
</div>
</template>

<style scoped lang="sass">
$breakpoint: 640px

.outro
  background-color: var(--color-dark-1)
  min-height: 30rem
  position: relative
  margin-top: 2rem

  .info
    width: 30px
    height: 30px
    margin: 0 0 0 4rem
    display: grid
    grid-template-columns: 14rem 12rem 12rem
    grid-template-rows: 35px 30px auto auto

    @media screen and (max-width: $breakpoint)
      grid-template-columns: repeat(1, 1fr)
      width: 80%
      margin: 0 auto

    & > *
      //border: 1px red solid

    & > .header
      grid-column: 1 / span 3
      @media screen and (max-width: $breakpoint)
        grid-column: 1
      img
        height: 100%
    & > .space
      grid-column: 1 / span 3
      @media screen and (max-width: $breakpoint)
        grid-column: 1
    & > .item
      display: flex
      @media screen and (max-width: $breakpoint)
        margin-bottom: 1.2rem
      .icon
        font-size: 22px
        transform: rotate(0.03deg)
        color: var(--color-dark-a)
      .content
        flex: 1
        //box-sizing: content-box
        margin-left: 1rem
        //border: 1px red solid
        //padding-right: 8rem
        font-family: 'Catamaran'
        & > div:first-of-type
          font-weight: 700
    & > .legal
      grid-column: 1 / span 3
      @media screen and (max-width: $breakpoint)
        grid-column: 1
      display: flex
      padding-top: 1rem
      & > div
        margin-right: 1rem
        color: var(--color-brand-2)
        font-family: 'Catamaran'
        margin-left: 2rem
        font-weight: 500
        &:hover
          cursor: pointer

  .bg-city
    z-index: -1
    position: absolute
    inset: 0
    background-image: url('~/assets/jpgs/cityscape.png')
    background-size: 100%
    background-repeat: no-repeat
    opacity: 0.5
    background-position: center 130%

    @media screen and (max-width: 1400px)
      background-position: center bottom

  .bg-image
    position: absolute
    inset: 0
    background-image: url('~/assets/jpgs/city.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: 40% 80%
    opacity: 0.5

    @media screen and (max-width: 1200px)
      background-position: 40% 70%
    @media screen and (max-width: 950px)
      background-position: 40% 40%
    @media screen and (max-width: 950px)
      background-position: 40% 20%

  .dark-overlay-1
    position: absolute
    inset: 0
    background: var(--color-dark-1)
    background: linear-gradient(180deg, rgba(51,49,49,1) 19%, rgba(51,49,49, 0) 100%)
</style>
