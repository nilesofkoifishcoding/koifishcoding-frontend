<template>
    <div class="developer">
        <div class="bg-overlay">
            <div class="bg-overlay-2"></div>
        </div>
        <KHeader :transparent-bg="false" />
        <!-- <h1>Full-Stack Developer Program</h1> -->
        <ProgramsDeveloperHero :transparent-bg="false" />
        <ProgramsDeveloperNav />
        <div class="developer-body">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
.developer
    max-width: 1600px
    box-shadow: 0 30px 50px rgb(0 0 0 / 10%)
    margin: 0 auto
    position: relative

    // background: linear-gradient(0deg, white, 60%, rgba(255,255,255,0) 60%, rgba(30,30,30,1) 100%)
    // background-repeat: no-repeat

    // background-color: var(--color-dark)
    
    .bg-overlay
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 40rem
        // background-image: url('https://images.unsplash.com/photo-1675845626804-f952953bea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')
        // background-image: url('https://images.unsplash.com/photo-1674708202031-7b0c69ed5671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')
        // background-image: url('https://images.unsplash.com/photo-1473172707857-f9e276582ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')
        // background-image: url('https://images.unsplash.com/photo-1422493757035-1e5e03968f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2008&q=80')
        // border: 1px red solid
        opacity: 1
        background-position: center 40%
        background-size: cover
        // mix-blend-mode: multiply

        .bg-overlay-2
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 40rem
            // background: linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.0))

    h1
        font-family: 'Catamaran'
        margin-left: .5rem
        text-align: center
        letter-spacing: .3rem
        color: var(--color-white)
    .developer-body
        max-width: 1200px
        margin: 0 auto
        padding-top: 1rem
        padding: 1rem
        margin-top: 800px
</style>