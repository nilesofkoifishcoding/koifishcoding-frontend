<template>
    <div class="bg">
        <div class="icon" style="top: 2%; left: 3%;">
            <font-awesome-icon v-if="!loading" style="--fa-animation-duration: 30s" :icon="['fas', 'fa-tools']" />
        </div>
        <div class="icon" style="top: 60%; left: 60%;">
            <font-awesome-icon v-if="!loading" class="fa-spin fa-spin-reverse" style="--fa-animation-duration: 70s;"
                :icon="['fas', 'fa-code-compare']" />
        </div>
        <div class="header">Koi Fish Coding</div>
        <div class="pane-wrapper">
            <div class="pane">
                <div class="top">
                    <!-- <font-awesome-icon v-if="!loading" class="icon" :icon="['fas', 'fa-shapes']" /> -->
                    <span class="class">
                        <div class="class-name">Fundamentals 1</div>
                        <div class="path">An Introduction to HTML, CSS & JavaScript</div>
                    </span>
                    <span class="recommended">
                        <div class="check">
                            <font-awesome-icon v-if="!loading" :icon="['fas', 'fa-check']" />
                        </div>
                        <!-- <div class="text">This is the recommended first class to take</div> -->
                        <div class="text">Recommended First Class</div>
                        <!-- <div class="text">RECOMMENDED FIRST CLASS</div> -->
                    </span>
                    <!-- <font-awesome-icon v-if="!loading" class="icon-down" :icon="['fas', 'fa-caret-down']" /> -->
                </div>
                <div class="bottom"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const loading = ref(true)

const nuxtApp = useNuxtApp()
nuxtApp.hook('page:finish', () => {
    loading.value = false
})
</script>

<style lang="sass">

.bg
    height: 100vh
    background-color: var(--color-brand-1)
    background: linear-gradient(138deg, rgba(229,41,73,1) 0%, rgba(153,51,51,1) 100%)
    position: relative
    display: flex
    flex-direction: column
    align-items: stretch
    justify-content: flex-start

    > .icon
        position: absolute
        color: rgb(255 255 255 / 30%)
    .header
        height: 10rem
        // border: 1px blue solid
    .pane-wrapper
        border-radius: 10px
        // width: 80rem
        margin: 0 auto
        // text-align: 
        max-width: 60rem
        width: 100%
        min-width: 20rem
        // background-color: rgb(255 255 255 / 90%)
        // border: 1px white solid
        padding: 1rem
        box-sizing: border-box
        .pane
            border-radius: 10px
            overflow: hidden
            .top
                height: 5rem
                background-color: var(--color-white-a)
                display: flex
                justify-content: space-between
                align-items: center
                padding: 20px
                box-sizing: border-box
                font-family: 'Lexend Mega'
                box-shadow: 0 0 8px 1px inset none
                transition: box-shadow 0.2s cubic-bezier(.4,0,.2,1)
                // &:hover
                //     box-shadow: 0 0 8px 1px inset var(--color-dark-a)
                //     cursor: pointer
                //     transition: box-shadow 0.2s cubic-bezier(.4,0,.2,1)
                .icon
                    color: var(--color-dark)
                    font-size: 2.5rem
                .recommended
                    display: flex
                    align-items: center
                    color: var(--color-success)
                    svg
                        font-size: 1rem
                    .text
                        margin-left: 0.3rem
                        max-width: 14rem
                        line-height: 1.2rem
                        font-size: 0.7rem
                        color: var(--color-dark)
                        font-weight: 400
                        text-align: center
                .class
                    color: var(--color-dark)
                    display: flex
                    flex-direction: column
                    line-height: 1.7rem
                    position: relative
                    flex: 1
                    .path
                        position: absolute
                        top: 85%
                        font-weight: 300
                        font-size: 0.7rem
                        left: 1px
                    .class-name
                        font-weight: 200
                        font-size: 1.8rem
                        position: relative
                        left: -1px
                        letter-spacing: -.2rem
                .icon-down
                    font-size: 1.6rem
                
            .bottom
                z-index: 1
                height: 40rem
                background-color: var(--color-white-b)
</style>