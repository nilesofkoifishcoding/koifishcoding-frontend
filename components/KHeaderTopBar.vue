<template>
    <div :class="['top-bar', props.transparentBg && 'transparent']">
        <div class="call">
            <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-phone']" />
            <span class="number">(615) 382-3829</span>
        </div>
        <div class="lang">
            <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-earth-americas']" />
            <span>EN</span>
        </div>
        <NuxtLink to="/login">
            <div class="sp">Student Portal</div>
        </NuxtLink>
        <div class="call2">
            <font-awesome-icon v-if="loaded" :icon="['fas', 'fa-phone']" />
            <span class="number">(615) 382-3829</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
        transparentBg?: boolean
    }>(),
    {
        transparentBg: undefined
    }
)
const backgroundColor = computed(() => {
    return props.transparentBg ? 'transparent' : undefined
})
const loaded = ref(false);
const nuxtApp = useNuxtApp();

nuxtApp.hook('page:finish', () => {
    loaded.value = true
})
</script>

<style scoped lang="sass">
.top-bar
    position: sticky
    top: 0
    left: 0
    right: 0
    height: 33px
    background-color: var(--color-white)
    z-index: 1

    // background-color: transparent

    display: flex
    justify-content: flex-end
    align-items: center
    font-family: 'Catamaran'
    font-weight: 600

    padding: 0 10px
    color: var(--color-brand-3)
    font-size: 0.85rem

    &.transparent
        background-color: transparent

    @media screen and (max-width: $breakpoint-small)
        justify-content: space-between

    & > div
        padding: 1px 6px

    & > div:hover
        // background-color: blue
        cursor: pointer
        border-radius: 8px
        padding: 1px 6px
        // background-color: var(--color-white)

    .sp
        margin-left: 1.5rem
        @media screen and (max-width: $breakpoint-small)
            display: none

    .lang
        display: flex
        align-items: center
        svg
            position: relative
            top: -1px
        span
            position: relative
            margin-left: 0.4rem
        // @media screen and (max-width: $breakpoint-medium)
        //     span
        //         display: none
    
    .call, .call2
        display: flex
        align-items: center
        margin-right: 1.5rem
    
        svg
            position: relative
            top: -1px
        .text
            margin-right: 0.5rem
        .number
            margin-left: 0.5rem

    .call
        @media screen and (max-width: $breakpoint-small)
            display: none


    .call2
        display: none
        @media screen and (max-width: $breakpoint-small)
            display: block
</style>