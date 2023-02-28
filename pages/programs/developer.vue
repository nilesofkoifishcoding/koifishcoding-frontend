<template>
    <div class="developer">
        <ProgramsDeveloperHero :transparent-bg="false" />
        <ProgramsDeveloperNav />
        <div class="developer-body">
            <ProgramsDeveloperCourse />
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    keepalive: {
        exclude: ['.overlay']
    },
    pageTransition: {
        name: 'page',
        mode: 'out-in',
        onAfterEnter: () => {
            console.log('after enter')
        }
    }
})
</script>

<style lang="sass" scoped>
$offset: 80px
.developer

    .developer-body
        // height: 100vh
        position: relative
        // top: -126px
        z-index: -1
        background-image: url('https://www.transparenttextures.com/patterns/light-wool.png')
        background-repeat: repeat
        // background-color: var(--color-dark)
        // padding-top: 1rem
        // padding: .01rem

        
</style>