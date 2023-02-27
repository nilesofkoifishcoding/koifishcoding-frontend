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
        &.loaded
            backdrop-filter: blur(10px)
            transition: all .8s cubic-bezier(.4,0,.2,1)
            color: var(--color-white)
            text-shadow: none
</style>