<template>
    <div :class="['k-header-nav', props.transparentBg && 'transparent']">
        <div class="header-container">
            <img src="~/assets/svgs/koi-fish-coding-logo.svg" alt="Koi Fish Coding Logo" />
            <UiButton />
        </div>
    </div>
</template>

<script setup lang="ts">
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

        img
            width: 17rem
</style>