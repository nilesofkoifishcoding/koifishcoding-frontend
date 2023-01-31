<template>
    <div class="k-header-nav">
        <div class="header-container">
            <img src="~/assets/svgs/koi-fish-coding-logo.svg" alt="Koi Fish Coding Logo" />
            <UiButton />
        </div>
    </div>
</template>

<style scoped lang="sass">
.k-header-nav
    position: sticky
    top: 0
    height: 61px
    left: 0
    right: 0
    border-bottom: 1px solid var(--color-border-1)
    background-color: white
    z-index: 1
    padding: 0 10px

    .header-container
        margin: 0 auto
        height: 100%
        display: flex
        justify-content: space-between
        align-items: center

        img
            width: 17rem
</style>