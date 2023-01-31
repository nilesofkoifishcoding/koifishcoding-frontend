<template>
    <img width="250" style="margin: 0 auto; display: block; position: relative; top: 40px;"
        src="~/assets/svgs/koi-fish-coding-logo.svg" alt="Koi Fish Coding Logo" />
    <div class="form">
        <div class="inputs">
            <input type="email" placeholder="email">
            <button>Login</button>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="sass">
.form
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    font-family: 'Catamaran'

    .inputs
        padding: 10rem 8rem
        display: flex
        justify-content: center
        flex-direction: column
        box-shadow: 0 0 8px 3px rgba( 30, 30, 30, 0.1)

    input
        border: none
        border-bottom: 1px var(--color-brand-1) solid
        width: 300px
        color: var(--colo-brand-1)
        font-size: 1rem
        &:active, &:focus
            outline: none
    
    button
        margin-top: 30px
        background-color: var(--color-brand-1)
        color: white
        outline: none
        border: none
        padding: 1rem 2rem
        font-size: 1rem
        cursor: pointer
</style>