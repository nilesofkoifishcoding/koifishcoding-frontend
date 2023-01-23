<template>
    <div class="hiw">
        <div class="block">
            <span>How It Works</span>
            <div class="icon" style="top: 20%; left: 10%;">
                <font-awesome-icon
                    class="fa-spin"
                    style="--fa-animation-duration: 30s"
                    :icon="['fas', 'fa-tools']"
                />
            </div>
            <div class="icon" style="top: 60%; left: 60%;">
                <font-awesome-icon
                    class="fa-spin fa-spin-reverse"
                    style="--fa-animation-duration: 70s;"
                    :icon="['fas', 'fa-code-compare']"
                />
            </div>
        </div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
    </div>
</template>

<style scoped lang="sass">
.hiw
    display: grid
    grid-template-columns: repeat(3, calc(100% /3))
    // grid-template-rows: 3
    grid-gap: 10px
    margin: 20px

    .block
        // border: 1px var(--color-brand-1) solid
        height: 300px
        display: flex
        justify-content: center
        align-items: center
        font-family: 'Catamaran'
        // font-family: 'Montserrat'
        font-weight: 600
        font-size: 2rem
        color: white
        letter-spacing: .1rem
        // border-radius: 10px
        // border: 1px var(--color-brand-1a) solid
        // box-shadow: 0 0 3px 1px var(--color-brand-1)
        // transition: border .2s cubic-bezier(.4,0,.2,1)
        // animation: border-blink 2s infinite
        position: relative
        color: var(--color-brand-1)
        
        &:nth-child(1)
            box-shadow: 0 0 0 0
            // margin: 10px
            // box-sizing: content-box
            // background-color: var(--color-brand-1)
            
            .icon
                position: absolute
                // top: 20%
                // left: 10%
                font-size: 5rem
                opacity: 0.1
</style>