<template>
    <div :class="['k-header-nav', props.transparentBg && 'transparent']">
        <div class="header-container">
            <NuxtLink to="/" class="main-logo">
                <img src="~/assets/svgs/koi-fish-coding-logo.svg" alt="Koi Fish Coding Logo" />
            </NuxtLink>
            <div class="nav-items">
                <NuxtLink to="/programs/developer" class="nav-item">
                    <span>
                        Full St<span class="highlight">a</span>ck Developer Program
                    </span>
                </NuxtLink>
                <!-- <div class="nav-item"></div> -->
                <div class="nav-item">
                    <span>
                        Ins<span class="highlight">t</span>ructor
                    </span>
                </div>
                <div class="nav-item">
                    <span>
                        <font-awesome-icon v-if="loaded" class="location highlight"
                            :icon="['fas', 'fa-location-dot']" />
                        <span>Nashville</span>
                    </span>
                </div>
                <div class="nav-item">
                    <span>
                        <span class="highlight">F</span>AQ
                    </span>
                </div>
                <UiLinkButton text="Enroll" />
            </div>
            <div class="mobile-nav-items">
                <UiButton @click="handleShowMenu" text="Menu" outline />
                <UiLinkButton text="Enroll" />
            </div>
            <div class="mini-nav-items">
                <UiButton @click="handleShowMenu" hamburger />
            </div>
        </div>
    </div>

    <Teleport to="body">
        <MobileMenu :visible="mobileMenuVisibility" @click="mobileMenuVisibility = false" />
    </Teleport>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const loaded = ref(false)
const mobileMenuVisibility = ref(false)

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

function handleShowMenu() {
    mobileMenuVisibility.value = true
}

</script>

<style scoped lang="sass">
.main-logo
    position: relative
    top: 2px
.k-header-nav
    // position: sticky
    // top: 0
    height: 61px
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
            display: flex
            align-items: center
            position: relative

        & > .mini-nav-items
            display: none
            @media screen and (max-width: $breakpoint-small-medium)
                display: flex

        & > .mobile-nav-items
            display: none
            // @media screen and (max-width: $breakpoint-medium-large), screen and (min-width: $breakpoint-small-medium)
            @media screen and (min-width: $breakpoint-small-medium) and (max-width: $breakpoint-medium-large)
                display: flex

        & > .nav-items
            height: 100%
            @media screen and (max-width: $breakpoint-medium-large)
                display: none
            .nav-item
                height: 100%
                font-family: 'Catamaran'
                font-size: 1.1rem
                font-weight: 600
                color: var(--color-dark-1)
                display: flex
                align-items: center
                padding: 0 1.5rem
                letter-spacing: 0.02rem
                border-bottom: 3px transparent solid
                transition: border-bottom 0.15s cubic-bezier(.4,0,.2,1)

                @media screen and (max-width: $breakpoint-large-2)
                    padding: 0 1rem

                & > span
                    position: relative
                    top: 1px

                .highlight
                    color: var(--color-dark-1)
                    transition: color 0.15s cubic-bezier(.4,0,.2,1)

                & > span .location
                    position: relative
                    top: -1px
                    font-size: 76%
                    margin-right: .3rem

                &:hover
                    cursor: pointer
                    border-bottom: 3px var(--color-button-1) solid
                    transition: border-bottom 0.15s cubic-bezier(.4,0,.2,1)

                    .highlight
                        color: var(--color-button-1)
                        transition: color 0.15s cubic-bezier(.4,0,.2,1)

        img
            width: 17rem
</style>