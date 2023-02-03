<template>
    <div class="enroll-hero">
        <div class="overlay"></div>
        <div class="text-overlay">
            <h2>101 - Developer Fundamentals</h2>
            <h1><span>F</span>ull Stack Developer Program</h1>
            <div class="points" style="display: none;">
                <div class="point">
                    <div class="left-point">Program Length</div>
                    <div class="center-line"></div>
                    <div class="right-point">12 Sessions</div>
                </div>
                <div class="point">
                    <div class="left-point">Location</div>
                    <div class="center-line"></div>
                    <div class="right-point">Virtual & Nashville, TN</div>
                </div>
                <div class="point">
                    <div class="left-point">Cost</div>
                    <div class="center-line"></div>
                    <div class="right-point">$1,010</div>
                </div>
                <div class="point">
                    <div class="left-point">Class Size</div>
                    <div class="center-line"></div>
                    <div class="right-point">10</div>
                </div>
            </div>
            <!-- <h3>Program Length: 12 Sessions (4 Weeks)</h3> -->
        </div>
    </div>
</template>

<style scoped lang="sass">
.enroll-hero
    height: 32rem
    background-image: url('~/assets/jpgs/grayLandscape.png')
    background-size: cover
    background-repeat: no-repeat
    background-position: 30% 70%
    position: relative

    .text-overlay, .overlay
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
    .overlay
        background-color: rgba(255, 255, 255, 0.8)
    .text-overlay
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        font-family: 'Catamaran'
        color: var(--color-dark)

        h1
            font-size: 5rem
            font-weight: 600
            text-align: center
            margin-top: .5rem
            margin-bottom: 1rem
            opacity: 1
            span
                color: var(--color-brand-1)
        h2
            // background-color: var(--color-dark)
            // color: var(--color-white)
            // padding: .5rem 2rem
            // border-radius: 5px
            // font-size: 2rem
            
            padding: .5rem 2rem
            border-radius: 5px
            background-color: transparent
            color: var(--color-brand-1)
            margin-bottom: 1rem
            font-size: 2.4rem
            color: var(--color-dark)
            border: 4px var(--color-dark) solid


            // border: 4px var(--color-brand-1) solid
            // color: var(--color-brand-1)

    .points
        width: 30rem
        .point
            display: flex
            justify-content: space-between
            align-items: stretch
            .center-line
                border-top: 1px var(--color-dark-c) solid
                flex: 1
                position: relative
                top: 12px
                margin: 0 7px
</style>