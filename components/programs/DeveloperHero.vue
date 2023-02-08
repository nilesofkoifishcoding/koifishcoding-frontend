<template>
    <div :class="['hero', props.transparentBg && 'transparent']">
        <div class="overlay2">

        </div>
        <div class="overlay">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div class="overlay-3" v-if="props.transparentBg"></div>
    </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
        transparentBg?: boolean
    }>(),
    {
        transparentBg: undefined
    }
)
const loaded = ref(false);
const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
    const elements = document.getElementsByTagName('p');
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    function writeLetters() {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.innerText = (element.innerText || '') + alphabet[parseInt(Math.random() * 26)]
        }
    }

    let counter = 0;
    let interval = setInterval(() => {
        writeLetters()
        counter++;

        if (counter === 200) {
            clearInterval(interval)
        }
    }, 50)
})
</script>

<style lang="sass" scoped>
$inset: 0
.hero
    // margin-top: 100px
    margin-bottom: 100px
    height: 31rem
    border: 1px var(--color-bg-1) solid
    position: relative

    // background-image: url('~/assets/jpgs/city1.jpg')
    background-size: cover
    background-position: center
    
    // margin: 10rem

    .overlay
        position: absolute
        top: $inset
        left: $inset
        right: $inset
        bottom: $inset
        overflow: hidden
        backdrop-filter: blur(5px)
        
        background-color: rgba(255, 255, 255, 0.1)
        // background: linear-gradient(90deg, rgba(229,41,73,0) 19%, rgba(255,255,255,0.25) 54%)
        // background-color: rgba(0, 0, 0, 0.6)

        color: white
        color: var(--color-dark-1)
        font-family: 'Catamaran'
        font-weight: 600

        box-sizing: border-box

        p
            overflow: hidden
            line-height: 20px
            margin-top: 0
            margin-bottom: 2px
            font-size: 20px
            font-family: sans-serif
            font-family: 'Catamaran'
            font-weight: 600
            // color: rgb(190, 190, 190)
            color: var(--color-dark-d)
            color: var(--color-dark-c)
            &:first-child
                // margin-top: -12px
            // &:nth-child(10)
            //     color: var(--color-brand-1)
            //     color: var(--color-white)
            //     font-weight: 600

        span
            color: var(--color-brand-1)

    @media screen and (max-width: $breakpoint-medium)
        // margin: 1rem
        height: 20rem

        .overlay

            p
                line-height: 11px
                font-size: .7rem
                // color: var(--color-dark-c)
    
    .overlay-3
        position: absolute
        top: $inset
        left: $inset
        right: $inset
        bottom: $inset
        background: linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.0))

    &.transparent
        border: none
        
        .overlay
            background-color: transparent
        
</style>
