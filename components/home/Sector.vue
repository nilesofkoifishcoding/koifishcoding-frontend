<template>
    <div :class="[
        'sector',
        gradientVisibility && 'gradient'

    ]" @mouseenter="startAnimating" @mouseleave="stopAnimating">
        <div class="top-bg"></div>
        <div class="top">
            <div :class="['image-holder', props.info.imageClass]">
                <!-- <img src="~/assets/jpgs/board-game.png" alt=""> -->
            </div>
        </div>
        <div class="bottom">
            <div class="title" v-html="props.info.title" />
            <div class="message" v-html="props.info.message"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
type infoType = {
    title: string,
    message: string,
    imageClass: string,
    cta: string
}
const gradientVisibility = ref(false)
const props =
    defineProps<{
        info: infoType
    }>()
function startAnimating() {
    gradientVisibility.value = true
}
const stopAnimating = () => gradientVisibility.value = false

</script>

<style lang="sass" scoped>
$border: 2px
.sector
    width: 48%
    height: 44rem
    background-position: 0% 40%
    overflow: hidden
    border-radius: 21px

    display: flex
    flex-direction: column

    position: relative
    background-image: radial-gradient(circle at 0% 0%, var(--color-bg-2) 19%, rgba(229,41,73,0) 74%)
    background-size: 100%
    background-position: 400px 400px
    transition: all 1s cubic-bezier(.4, 0, .2, 1)
    &.gradient
        background-image: radial-gradient(circle at 0% 0%, var(--color-brand-1) 19%, rgba(229,41,73,0) 74%)
        background-position: -300px -300px
        transition: all 1s cubic-bezier(.4, 0, .2, 1)

    .top-bg
        z-index: 1
        position: absolute
        top: $border
        left: $border
        right: $border
        bottom: $border
        background-color: var(--color-dark-d2-na)
        border-radius: 20px

    .top
        z-index: 2
        flex: 1
        position: relative

        .image-holder
            box-shadow: 0 0 8px 2px var(--color-dark-c)
            width: 70%
            margin: 0 auto
            height: 20rem
            border-bottom-left-radius: 30px
            border-bottom-right-radius: 30px
            overflow: hidden
            position: relative
            &.front
                background-image: url('~/assets/jpgs/board-game.png')
            &.back
                background-image: url('~/assets/jpgs/back-end.png')
            &.mobile
                background-image: url('~/assets/jpgs/mobile.png')
                background-position: center
                background-size: cover
            img
                object-fit: cover
                width: 100%

    
    .bottom
        z-index: 1
        height: 35%
        display: flex
        flex-direction: column
        // justify-content: center
        align-items: center
        font-family: 'Catamaran'
        position: relative
        .title
            text-align: center
            font-size: 3rem
            line-height: 3rem
            font-weight: 600
            color: var(--color-dark)
        .message
            margin-top: 0.8rem
            text-align: center
            font-size: 1.5rem
            font-weight: 400
            color: var(--color-dark-a)
            max-width: 70%
            line-height: 1.7rem
</style>