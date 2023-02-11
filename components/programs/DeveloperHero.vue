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
        <div class="overlay-3"></div>
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
    const alphabet = ['<span class="">A</span>', '<span class="bold">B</span>', '<span class="">C</span>', '<span class="">D</span>', '<span class="">E</span>', '<span class="">F</span>', '<span class="">G</span>', '<span class="">H</span>', '<span class="">I</span>', '<span class="">J</span>', '<span class="">K</span>', '<span class="">L</span>', '<span class="">M</span>', '<span class="">N</span>', '<span class="">O</span>', '<span class="">P</span>', '<span class="">Q</span>', '<span class="">R</span>', '<span class="">S</span>', '<span class="">T</span>', '<span class="">U</span>', '<span class="">V</span>', '<span class="">W</span>', '<span class="">X</span>', '<span class="">Y</span>', '<span class="">Z</span>'];
    function writeLetters() {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.innerHTML = (element.innerHTML || '') + alphabet[parseInt(Math.random() * 26)]
        }
    }

    let counter = 0;
    let interval = setInterval(() => {
        writeLetters()
        counter++;

        if (counter === 180) {
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
    // border: 1px var(--color-bg-1) solid
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
        // backdrop-filter: blur(5px)

        // width: 31rem
        // margin: 0 auto

        // border-radius: 50%
        
        background-color: rgba(255, 255, 255, 0.1)
        // background: linear-gradient(90deg, rgba(229,41,73,0) 19%, rgba(255,255,255,0.25) 54%)
        // background-color: rgba(0, 0, 0, 0.6)

        // box-shadow: 0 0 8px 3px var(--color-brand-1b)

        color: white
        // color: var(--color-dark-)
        font-family: 'Catamaran'
        font-weight: 600

        box-sizing: border-box

        // background-color: var(--color-bg-2)
        // background-image: url('~/assets/jpgs/cubes.png')

        p
            overflow: hidden
            line-height: 20px
            margin-top: 0
            margin-bottom: 2px
            font-size: 20px
            font-family: sans-serif
            font-family: 'Catamaran'
            font-weight: 500
            // color: rgb(190, 190, 190)
            color: var(--color-dark-d)
            color: var(--color-dark-d)
            letter-spacing: 0.2rem
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
        background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 10%, rgba(0, 0, 0, 0.0) 50%)

    &.transparent
        border: none
        
        .overlay
            background-color: transparent
        
</style>
