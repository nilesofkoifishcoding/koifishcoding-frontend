<template>
    <div :class="['hero', props.transparentBg && 'transparent']">
        <div class="overlay2">

        </div>
        <div class="overlay" ref="parentElRef">
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
definePageMeta({
    keepalive: {
        exclude: ['.overlay']
    },
})
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
const parentElRef = ref<HTMLElement | null>(null)

function writeLetters() {
    if (!parentElRef.value) {
        return
    }
    const elements = parentElRef.value.getElementsByTagName('p')
    // const elements = document.getElementsByTagName('p');
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

        if (counter === 110) {
            clearInterval(interval)
        }
    }, 65)
}

onMounted(() => {
    setTimeout(() => {
        writeLetters()
    }, 1000)
    if (!parentElRef.value) {
        return
    }
    const elements = parentElRef.value.getElementsByTagName('p')
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = ''
    }
})


// onBeforeUnmount(() => {
//     if (!parentElRef.value) {
//         return
//     }
//     const elements = parentElRef.value.getElementsByTagName('p')
//     for (let i = 0; i < elements.length; i++) {
//         elements[i].innerHTML = ''
//     }
// })
</script>

<style lang="sass" scoped>
$inset: 0

.hero
    height: 31rem
    position: relative
    background-size: cover
    background-position: center
    .overlay
        position: absolute
        top: $inset
        left: $inset
        right: $inset
        bottom: $inset
        overflow: hidden
        background-color: rgba(255, 255, 255, 0.1)
        color: white
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
        // background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 10%, rgba(0, 0, 0, 0.0) 50%)

    &.transparent
        border: none
        
        .overlay
            background-color: transparent
        
</style>
