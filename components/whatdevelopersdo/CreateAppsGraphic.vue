<template>
    <div class="phone">
        <div class="top-sensor"></div>
        <div class="home">
            <div class="main-section">
                <div class="icon"></div>
                <div class="icon"></div>
                <div class="icon"></div>
                <div class="icon"></div>
                <div class="icon"></div>
                <div class="icon"></div>
                <div class="icon"></div>
                <div class="icon"></div>
                <div class="icon red"></div>
            </div>
            <div class="bottom-bar">
                <!-- <div class="icon"></div> -->
                <!-- <div class="icon"></div>
                <div class="icon"></div> -->
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.phone
    width: 6.5rem
    height: 10.8rem
    border: 3px var(--color-dark-c) solid
    border-radius: 14px
    position: relative
    overflow: hidden
    // box-sizing: border-box
    .top-sensor
        width: 1.7rem
        height: 0.3rem
        border-radius: 20px
        background-color: var(--color-dark-c)
        position: absolute
        margin: 0 auto
        left: 0
        right: 0
        top: 4px
    .home
        position: relative
        width: 100%
        height: 100%
        display: flex
        flex-direction: column
        align-items: center
        
        // border: 1px red solid
        .main-section
            box-sizing: border-box
            margin: 10px 10px 50px
            padding: 4px
            flex: 6
            display: grid
            width: 100%
            grid-template-columns: repeat(4, 1fr)
            grid-template-columns: repeat(4, 1fr)
            gap: 5px
            .icon
                background-color: var(--color-dark-a)
                border-radius: 5px
                &.red
                    background-color: var(--color-brand-1)
                    
        .bottom-bar
            height: 1.5rem
            background-color: var(--color-dark-d2)
            width: 92%
            margin-bottom: 4px
            border-radius: 8px
            display: flex
            justify-content: center
            align-items: center
            .icon
                margin: 0 4px
                border-radius: 5px
                width: 20px
                height: 20px
                background-color: var(--color-dark-a)
</style>