<template>
    <div class="root">
        <div class="sessions">
            <span class="gradient-text">12</span>&nbsp;SESSIONS
        </div>
        <div class="weeks">
            <span class="gradient-text">4</span>&nbsp;WEEKS
        </div>
        <div class="bootcamp gradient-text">
            <div>
                <!-- <span><font-awesome-icon :icon="['fas', 'fire']" /></span> -->
                <span>C</span>
                <span>O</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
            <div>
                <span>B</span>
                <span>O</span>
                <span>O</span>
                <span>T</span>
                <span>C</span>
                <span>A</span>
                <span>M</span>
                <span>P</span>
            </div>
            <div>
                <span>F</span>
                <span>O</span>
                <span>R</span>
                <span>&nbsp;</span>
                <span>T</span>
                <span>H</span>
                <span>E</span>
                <span>&nbsp;</span>
                <span>W</span>
                <span>I</span>
                <span>N</span>
            </div>
            <div class="underline"></div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="sass">
.sessions, .weeks
    color: rgb(50, 50, 50)
    // color: rgb(252, 252, 252)
    // text-shadow: 0 0 2px black
.root
    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    flex-direction: column
    height: 100%
    perspective: 10px
    // border: 1px green solid

    transform-style: preserve-3d
    z-index: -1

    & > div
        font-family: 'Lilita One'
        // border: 1px green solid
        display: flex
        align-items: center
    .sessions
        margin-bottom: 5%
        flex: 1
        font-size: 10rem
        // transform: translateZ(-100px) scale(2)
    .weeks
        flex: 1
        font-size: 10rem
    .bootcamp
        margin-top: 5%
        flex: 2
        align-items: center
        display: flex
        flex-direction: column
        justify-content: center
        align-items: stretch
        text-align: justify
        font-size: 10rem
        // transform: translateZ(-100px)
        position: relative

        & > div
            text-align: center
            display: flex
            justify-content: space-between

        span
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05)
    .underline
        position: absolute
        right: -16px
        bottom: 24px
        width: 328px
        height: 7px
        background-image: linear-gradient(120deg, #40ffca, #9a76a4, #da0e7f)
        transform: rotateZ(-2deg)
        filter: blur(1px)
</style>