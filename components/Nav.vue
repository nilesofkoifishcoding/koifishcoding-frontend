<template>
    <div class="top-bar"></div>
    <header>
        <div class="header-container">
            <img src="~/assets/svgs/koi-fish-coding-logo.svg" alt="Koi Fish Coding Logo" />
            <UiButton />
        </div>
    </header>
</template>

<style scoped lang="sass">
.top-bar
    position: fixed
    top: 0
    left: 0
    right: 0
    height: 30px
    background-color: var(--color-bg-1)
    z-index: 1
header
    position: fixed
    top: 40px
    height: 61px
    left: 0
    right: 0
    border-bottom: 1px solid var(--color-border-1)
    background-color: white
    z-index: 1

    .header-container
        margin: 0 auto
        width: 1400px
        height: 100%
        display: flex
        justify-content: space-between
        align-items: center

        img
            width: 17rem
</style>