<template>
    <div class="screen">
        <div class="top-bar">
            <div class="buttons">
                <div class="back">
                    <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-arrow-left']" />
                </div>
                <div class="refresh">
                    <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-rotate-right']" />
                </div>
            </div>
            <div class="address">
                <div class="input">https://cookingwithcarl.com</div>
            </div>
            <div class="circles">
                <div class="green"></div>
                <div class="yellow"></div>
                <div class="red"></div>
            </div>
        </div>
        <div class="browser">
            <div class="top-bar">
                <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-mug-saucer']" />
                <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-carrot']" />
            </div>
            <div class="hero">
                <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-burger']" />
                <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-pizza-slice']" />
            </div>
            <!-- <div class="paragraphs">
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const loaded = ref(false)

nuxtApp.hook('page:finish', () => { loaded.value = true })
</script>

<style lang="sass" scoped>
.screen
    width: 80%
    height: 90%
    background-color: var(--color-bg-3)
    border-radius: 8px
    overflow: hidden
    .top-bar
        display: flex
        height: 1.3rem
        background-color: var(--color-dark-c)
        padding: 0 4px
        // & > div
        //     border: 1px red solid
        .buttons
            flex: 1
            display: flex
            justify-content: center
            align-items: center
            position: relative
            & > div
                font-size: 68%
                margin: 0 3px
                display: flex
                align-items: center
                justify-content: center
        .address
            flex: 7
            position: relative
            display: flex
            justify-content: center
            align-items: center
            .input
                width: 92%
                height: 68%
                background-color: var(--color-white)
                border-radius: 3px
                display: flex
                align-items: center
                font-size: 0.6rem
                font-weight: 500
                padding-left: 4px
        .circles
            flex: 1.5
            display: flex
            justify-content: center
            align-items: center
            position: relative
            & > div
                width: 8px
                height: 8px
                border-radius: 50%
                margin: 0 2px
                opacity: 0.8
                &.green
                    background-color: var(--color-success)
                &.yellow
                    background-color: var(--color-brand-4)
                &.red
                    background-color: var(--color-brand-1)
    .browser
        position: relative
        height: calc(100% - 1.3rem)
        .top-bar
            height: 50%
            background-color: var(--color-white)
            font-size: 0.8rem
            color: var(--color-dark)
            font-weight: 800
            display: flex
            justify-content: center
            align-items: center
            & > *
                margin: 0 20px
        .hero
            height: 50%
            background-color: var(--color-bg-4)
            display: flex
            justify-content: center
            align-items: center
            font-size: 0.8rem
            & > *
                margin: 0 20px
        .paragraphs
            background-color: var(--color-white)
            height: 3rem
            background-image: url('https://www.transparenttextures.com/patterns/brick-wall.png')
</style>