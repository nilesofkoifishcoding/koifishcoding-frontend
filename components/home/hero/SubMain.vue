<template>
    <div class="sm">
        <div class="text">
            <div>Our curriculum is based on <span class="gradient-text">interactive & collaborative</span> live coding
                & instructional sessions.</div>
            <div>There are no pre-made recordings to watch on your own. <span class='gradient-text'>We learn fast. We
                    learn together. We learn by
                    doing.</span></div>
        </div>
        <div class="graphic">
            <div class="screen-container">
                <div :class="['screen', turnIn ? 'ready' : '', 'zoom']">
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                    <div class="box">
                        <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-user']" />
                    </div>
                </div>
                <div :class="['screen', turnIn ? 'ready' : '']"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const turnIn = ref(false)
const loaded = ref(false)
const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
    loaded.value = true
    setTimeout(() => turnIn.value = true, 500)
})
</script>

<style lang="sass" scoped>
.sm
    max-width: 80rem
    // border: 1px red solid
    margin: 0 auto
    display: flex
    align-items: center
    margin-bottom: 100px
    @media screen and (max-width: 700px)
        flex-direction: column
    .text
        flex: 1
        font-family: Montserrat
        font-weight: 700
        font-size: 1.6rem
        @media screen and (max-width: 700px)
            padding: 30px
    .text div:nth-child(2)
        font-weight: 400
        margin-top: 1rem
        font-size: 1.2rem
    .graphic
        @media screen and (max-width: 700px)
            display: none
        flex: 1.5
        .screen-container
            perspective: 80rem
            width: 100%
            // border: 1px red solid
            position: relative
            display: flex
            padding: 1rem
            box-sizing: border-box
            & > .screen
                width: 50%
                // border: 1px red solid
                // position: absolute
                display: flex
                height: 13rem
                // border: 4px var(--color-brand-1) solid
                box-sizing: border-box
                border-radius: 6px
                transform: rotateY(0)
                transition: transform 0.2s cubic-bezier(.4,0,.2,1)
                &:nth-child(1)
                    margin-right: 1rem
                    box-sizing: border-box
                &.ready
                    &:nth-child(1)
                        transform: rotateY(30deg)
                    &:nth-child(2)
                        transform: rotateY(-30deg)
            .zoom
                display: grid
                padding: 5px
                grid-template-columns: repeat(4, 1fr)
                grid-template-rows: repeat(3, 1fr)
                row-gap: 4px
                column-gap: 4px
                .box
                    background-color: var(--color-brand-4a)
                    position: relative
                    svg
                        position: absolute
                        bottom: 0
                        right: 0
                        left: 0
                        margin: 0 auto
                        font-size: 2rem
                        color: var(--color-brand-4)
        
</style>