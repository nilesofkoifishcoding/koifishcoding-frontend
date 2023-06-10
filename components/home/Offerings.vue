<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const items = ref([
    {
        icon: {
            type: 'fas',
            name: 'fa-puzzle-piece'
        },
        title: 'Internal Tools',
        description: "We know that reaching your business goals involves having efficient & robust internal tools. We help you build those at Koi Fish Coding."
    },
    {
        icon: {
            type: 'fas',
            name: 'fa-laptop'
        },
        title: 'Web & Mobile Apps',
        description: "Have an idea? Have a concept or prototype? Just got an investor and ready to start your business? <b>We are here for you.</b>"
    },
    {
        icon: {
            type: 'fas',
            name: 'fa-wrench'
        },
        title: 'Rebuilds & Legacy Support',
        description: "After having supported <b>countless</b> legacy systems (from Angular 1 to Ember.js projects), we know how to maintain existing code, or use it as a template to build a fresh app!"
    },
    {
        icon: {
            type: 'fas',
            name: 'fa-user-doctor'
        },
        title: 'On-Demand CTO',
        description: "We know that you aren't always in a position to have your own CTO so bring Koi Fish Coding onboard! We technically advise, protect & build in your best interests."
    }
])

const loaded = ref(false);
const nuxtApp = useNuxtApp();

nuxtApp.hook('page:finish', () => {
    loaded.value = true
})
</script>

<template>
  <div class="offerings">
    <div class="offerings-container">
      <div class="title">Where We Fit In</div>
      <div class="items">
        <template v-for="item in items">
          <div class="item">
            <div class="icon">
              <div class="icon-container">
                <font-awesome-icon v-if="loaded" :icon="[item.icon.type, item.icon.name]"/>
              </div>
            </div>
            <div class="content">
              <div class="content-title">{{ item.title }}</div>
              <div class="content-description" v-html="item.description"></div>
            </div>
          </div>

        </template>
      </div>
    </div>

  </div>
</template>

<style scoped lang="sass">
$icon-size: 40px
.offerings
  display: flex
  justify-content: center
.offerings-container
  //background-color: var(--color-brand-4)
  padding-top: 1rem
  max-width: 70rem
  min-height: 10rem
  box-shadow: 0 0 8px 0 var(--color-dark-c)
  border-radius: 8px
  margin: 5rem 2rem 0
  background: conic-gradient(from 0.25turn at 100% 0%, #FFD9CE, rgba(#FFD9CE, 0) 40%)

  .title
    text-align: center
    font-family: 'Catamaran'
    color: var(--color-power-gray)
    font-weight: 700

    font-family: 'Bungee Shade'
    color: black
    font-size: 4rem
    color: var(--color-power-gray)
    color: var(--color-brand-1)

  .items
    margin-top: 3rem
    padding-bottom: 3rem
    display: grid
    row-gap: 40px
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: repeat(2, 1fr)


    @media screen and (max-width: 800px)
      grid-template-columns: 1fr
      grid-template-rows: repeat(4, 1fr)

    .item
      display: flex
      .icon
        padding-right: 2rem
        flex: 1
        display: flex
        justify-content: flex-end
        .icon-container
          width: $icon-size
          height: $icon-size
          background-color: var(--color-power-gray)
          background-color: var(--color-brand-1)
          background-color: var(--color-white)
          background-color: transparent
          border-radius: 5px
          display: flex
          justify-content: center
          align-items: center
          color: white
          color: var(--color-brand-1)
          font-size: 1.4rem
          text-align: center
      .content
        flex: 4
        font-family: 'Catamaran'
        color: var(--color-power-gray)
        padding-right: 3rem
        .content-title
          color: var(--color-brand-1)
          padding-top: .3rem
          font-size: 1.2rem
          font-weight: 700
</style>
