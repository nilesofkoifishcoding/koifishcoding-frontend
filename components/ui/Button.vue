<template>
    <NuxtLink to="/enroll">
        <button>
            <span class="text">Enroll</span>
        </button>
    </NuxtLink>
</template>

<style scoped lang="sass">
a
    text-decoration: none
button
    border: none
    outline: none
    padding: 0 .9rem
    height: 2.25rem
    color: white

    background-color: var(--color-button-1)
    border: 2px var(--color-button-1) solid
    border-radius: 3px
    color: var(--color-white)

    display: flex
    justify-content: center
    align-items: center

    font-family: 'Montserrat'
    font-size: 0.9rem
    font-weight: 600
    text-decoration: none

    transition: all 0.2s cubic-bezier(.4,0,.2,1)

    &:hover
        cursor: pointer

        background-color: var(--color-button-1-darker)
        color: var(--color-white)

        transition: all 0.2s cubic-bezier(.4,0,.2,1)
</style>