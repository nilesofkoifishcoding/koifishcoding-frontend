<template>
    <div class="dev-nav">
        <div class="container">
            <div class="nav-item">
                <span class="text">Overview</span>
                <div class="bottom-border"></div>
            </div>
            <div class="nav-item selected">
                <span class="text">Curriculum</span>
                <div class="bottom-border selected"></div>
            </div>
            <div class="nav-item">
                <span class="text">How It Works</span>
                <div class="bottom-border"></div>
            </div>
            <div class="nav-item">
                <span class="text">Enroll</span>
                <div class="bottom-border"></div>
            </div>

            <div class="bottom-border-bottom"></div>
            <div class="bottom-border"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
.dev-nav
    display: flex
    justify-content: center

    .container
        display: flex
        position: relative

        & > .bottom-border
            position: absolute
            bottom: -10px
            left: 0
            right: 0
            height: 2px
            background-color: var(--color-dark-d)
            // border-radius: 7px

        & > .bottom-border-bottom
            position: absolute
            bottom: -10px
            left: -608px
            right: -608px
            height: 2px
            background-color: var(--color-dark-e)

        & > .nav-item
            width: 8rem
            // border: 1px red solid
            text-align: center

            font-size: 1.1rem
            font-family: 'Catamaran'
            font-weight: 300
            position: relative

            &.selected
                font-weight: 500
                color: var(--color-brand-1)

            & > .bottom-border
                position: absolute
                bottom: -10px
                height: 2px
                left: 0
                right: 0
                transition: left .3s linear, right .3s linear

                &.selected
                    transition: left .3s linear, right .3s linear
                    left: 0rem
                    right: 0
                    background-color: var(--color-brand-1)
</style>