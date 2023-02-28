<template>
    <div class="youtoo">
        <div :class="['reason', loaded ? 'loaded' : '']">
            <span>Coders enjoy remote work, high salaries, and job security.</span>
            <span>Now it's your turn.</span>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const loaded = ref(false)
onMounted(() => {
    console.log('hey....')
    loaded.value = true
})
onBeforeUnmount(() => loaded.value = false)
</script>

<style scoped lang="sass">
.youtoo
    min-height: 30rem
    background-image: url('~/assets/jpgs/man.jpg')
    // niles maybe? https://www.istockphoto.com/photo/colored-dust-gm476027383-26222654?utm_source=unsplash&utm_medium=affiliate&utm_campaign=adp_photos_sponsored&utm_content=https%3A%2F%2Funsplash.com%2Fphotos%2Fh9Rx3zOYZws&utm_term=portrait%3A%3A%3A
    background-size: cover
    background-position: center bottom
    position: relative

    .reason
        position: absolute
        width: 100%
        height: 100%
        backdrop-filter: blur(2px)
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        font-size: 2rem
        font-weight: 900
        color: var(--color-white)
        font-family: 'Catamaran'
        text-align: center
        text-shadow: 0 0 80px var(--color-white)
        color: rgba(255, 255, 255, 0)
        letter-spacing: 0.05rem
        span:first-child
            font-weight: 300
        span:last-child
            margin-top: 1rem
        &.loaded
            backdrop-filter: blur(10px)
            transition: all .8s cubic-bezier(.4,0,.2,1)
            color: var(--color-white)
            text-shadow: none
            span:last-child
                text-shadow: 0 0 10px var(--color-dark)
</style>