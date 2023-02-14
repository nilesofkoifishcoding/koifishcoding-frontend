<template>
    <div :class="['k-header-nav', props.transparentBg && 'transparent']">
        <div class="header-container">
            <NuxtLink to="/" class="main-logo">
                <img src="~/assets/svgs/koi-fish-coding-logo.svg" alt="Koi Fish Coding Logo" />
            </NuxtLink>
            <div>
                <div class="nav-item">Full St<span class="highlight">a</span>ck Developer Program</div>
                <div class="nav-item">Ins<span class="highlight">t</span>ructor</div>
                <div class="nav-item">
                    <font-awesome-icon v-if="loaded" class="location highlight" :icon="['fas', 'fa-location-dot']" />
                    <span>Nashville</span>
                </div>
                <div class="nav-item"><span class="highlight">F</span>AQ</div>
                <UiButton />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const loaded = ref(false)

nuxtApp.hook('page:finish', () => {
    loaded.value = true
})
const props = withDefaults(
    defineProps<{
        transparentBg?: boolean
    }>(),
    {
        transparentBg: undefined,
    }
)

</script>

<style scoped lang="sass">
.main-logo
    position: relative
    top: 2px
.k-header-nav
    position: sticky
    top: 0
    height: 61px
    left: 0
    right: 0
    border-bottom: 1px solid var(--color-border-1)
    background-color: var(--color-white)
    z-index: 1
    padding: 0 10px

    &.transparent
        background-color: transparent
        border-bottom: none

    .header-container
        margin: 0 auto
        height: 100%
        display: flex
        justify-content: space-between
        align-items: center

        & > div
            height: 100%
            display: flex
            align-items: center
            position: relative
            .nav-item
                height: 100%
                font-family: 'Catamaran'
                font-size: 1.1rem
                font-weight: 600
                color: var(--color-dark-1)
                // margin-right: 20px
                display: flex
                align-items: center
                padding: 0 1.5rem
                // text-transform: uppercase
                // border: 1px red solid
                letter-spacing: 0.02rem
                border-bottom: 4px transparent solid

                & > .location
                    position: relative
                    top: -1px
                    font-size: 76%
                    margin-right: .3rem

                &:hover
                    // color: var(--color-brand-4)
                    cursor: pointer
                    border-bottom: 4px var(--color-brand-4) solid

                    .highlight
                        color: var(--color-brand-4)

        img
            width: 17rem
</style>