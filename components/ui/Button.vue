<template>
    <NuxtLink to="mailto:niles@koifishcoding.com">
        <button>
            <span class="text">Enroll Now</span>
        </button>
    </NuxtLink>
</template>

<style scoped lang="sass">
a
    text-decoration: none
button
    border: none
    outline: none
    padding: 0 .6rem
    height: 2.25rem
    color: white

    background-color: var(--color-white)
    border: 1px var(--color-brand-1) solid
    color: var(--color-brand-1)

    display: flex
    justify-content: center
    align-items: center

    font-family: 'Montserrat'
    font-size: 1rem
    font-weight: 600
    text-decoration: none

    transition: background-color .3s ease

    &:hover
        cursor: pointer

        background-color: var(--color-brand-1)
        color: var(--color-white)

        transition: background-color .3s ease
</style>