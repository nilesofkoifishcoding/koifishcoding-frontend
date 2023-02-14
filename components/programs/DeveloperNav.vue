<template>
    <div class="dev-nav">
        <div class="container">
            <div class="title">
                <span>Full Stack&nbsp;</span>
                <span>Developer</span>
                <span>&nbsp;Program</span>
            </div>
            <div class="nav-item selected">Overview</div>
            <div class="nav-item">Courses</div>
            <div class="nav-item">Enroll</div>
        </div>
    </div>
    <div class="courses">
        <div class="list"></div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
$padding-bottom: 1rem
.dev-nav
    display: flex
    justify-content: center
    // background-color: var(--color-brand-2)
    // background-color: rgba(255, 255, 255, 0.5)
    backdrop-filter: blur(5px)
    height: 8rem
    width: 90%
    margin: 0 auto
    border-radius: 20px
    position: relative
    top: -70px
    box-shadow: 0 0 8px 2px rgba(30, 30, 30, 0.2)
    // border: 1px blue solid
    // border-bottom: 2px var(--color-dark-e) solid
    .container
        display: flex
        position: relative
        color: var(--color-dark-1)
        width: 100%
        // border-bottom: 2px var(--color-dark-d) solid
        background-image: url('https://www.transparenttextures.com/patterns/concrete-wall.png')
        background-repeat: repeat
        // background-size: 100
        background-position: 30% 30%
        .title
            margin-right: auto
            display: flex
            justify-content: center
            align-items: flex-end
            padding-bottom: 1rem
            font-family: 'Catamaran'
            padding-left: 1rem
            font-size: 1.8rem
            font-weight: bold
            span:nth-child(1)
                color: var(--color-dark)
                text-shadow: var(--color-white-e) 0px 1px 2px
                font-weight: 300
            span:nth-child(2)
                color: var(--color-white-b)
                color: var(--color-dark)
            span:nth-child(3)
                color: var(--color-dark)
                text-shadow: var(--color-white-e) 0px 1px 2px
                font-weight: 300

        .nav-item
            height: 100%
            width: 10rem
            display: flex
            justify-content: center
            align-items: flex-end
            padding-bottom: $padding-bottom
            color: white
            color: var(--color-dark)
            font-family: 'Catamaran'
            font-weight: 500
            font-size: 1.2rem
            border-bottom: 4px transparent solid
            box-sizing: border-box
            cursor: pointer
            &:hover:not(.selected)
                color: var(--color-brand-4)
                opacity: 0.7
            &.selected
                color: var(--color-brand-4)
                border-bottom: 4px var(--color-brand-4) solid
                margin-bottom: 8px
                box-sizing: border-box

.courses
    opacity: 0
    position: relative
    top: -14px
    height: 3.5rem
    width: 100%
    background-color: var(--color-brand-4)
    display: flex
    justify-content: center
    align-items: center
    display: none
    .list
        height: 70%
        width: 90%
        background-color: var(--color-brand-4b)
        border-radius: 20px
        box-shadow: inset 0 0 4px 0px var(--color-dark-c)

</style>