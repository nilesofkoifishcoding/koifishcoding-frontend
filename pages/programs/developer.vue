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
            <!-- <div class="screen"></div> -->
            <div class="number">101</div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
$offset: 80px
.developer
    max-width: 1600px
    box-shadow: 0 30px 50px rgb(0 0 0 / 10%)
    margin: 0 auto
    position: relative
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

    h1
        font-family: 'Catamaran'
        margin-left: .5rem
        text-align: center
        letter-spacing: .3rem
        color: var(--color-white)
    .developer-body
        // max-width: 1200px
        // margin: 0 auto
        // padding-top: 1rem
        // padding: 1rem
        // margin-top: 800px
        height: 100vh
        // border: 1px red solid
        position: relative
        top: -126px
        // background-color: blue
        z-index: -1
        // background-image: url('https://images.unsplash.com/photo-1676312467790-9bd18e1d7c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')
        // background-image: url('~/assets/jpgs/bg-1.jpg')
        // background-repeat: no-repeat
        // background-size: cover
        background-image: url('https://www.transparenttextures.com/patterns/checkered-light-emboss.png')
        background-image: url('https://www.transparenttextures.com/patterns/light-wool.png')
        background-repeat: repeat

        .number
            display: inline-block
            position: relative
            top: 0
            font-size: 20rem
            font-family: 'Catamaran'
            font-weight: 800
            padding-left: 20px
            background-image: url('https://images.unsplash.com/photo-1675800473686-ab069894ccf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80')
            background-repeat: no-repeat
            background-size: cover
            background-position: bottom center
            color: white
            background-clip: text
            color: transparent
            text-shadow: 4px 4px 20px var(--color-dark-b)

        // .screen
        //     position: absolute
        //     top: $offset
        //     left: $offset
        //     right: $offset
        //     bottom: calc(180px + $offset)
        //     background-color: rgba(255, 255, 255, 0.2)
        //     backdrop-filter: blur(5px)
        //     box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1)
</style>