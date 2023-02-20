<template>
    <div class="positions">
        <div class="title">
            <div class="pre-main-text">Positions</div>
            <div class="main-text">
                <span>What&nbsp;</span>
                <span class="gradient-text-2">Jobs</span>
                <span>&nbsp;Can I Get?</span>
            </div>
            <p>Software engineers are frequently called Developers these days. The job is stil the same: make websites,
                create mobile apps, build tools, and make the world a more efficient and better place.</p>
            <div class="table">
                <div class="ball"></div>
                <div class="jobs">
                    <div class="position"></div>
                    <div class="position highlighted">
                        <div class="right-arrow"></div>
                    </div>
                    <div class="position"></div>
                </div>
                <div class="canvas">canvas</div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.positions
    margin-top: 4rem
    padding-bottom: 14rem

    & > .title
        margin: 0 auto
        width: 90%
        font-family: 'Catamaran'
        font-weight: 600

        & > .pre-main-text
            font-size: 1.2rem
            font-weight: 800
            color: var(--color-brand-1)
        & > .main-text
            font-size: 1.8rem
            color: var(--color-dark)
        & > p
            margin-top: .5rem
            font-weight: 400
            font-size: 1.1rem
            max-width: 60rem
            @media screen and (max-width: $breakpoint-medium)
                font-size: 1rem
        
        .table
            width: 100%
            // border: 1px var(--color-dark-d) solid
            // box-shadow: 0 0 3px 2px var(--color-dark-e)
            display: flex
            height: 40rem
            .ball
                width: 7%
            & > .canvas
                width: 33%
                // border-left: 1px var(--color-dark-d) solid
                // border: 1px blue solid
            & > .jobs
                width: 60%
                .position
                    height: 15rem
                    position: relative
                    // border: 1px red solid
                    box-shadow: -2px 0 4px 3px var(--color-dark-e)
                    margin: 20px 0
                    &.highlighted
                        border-left: 6px var(--color-brand-1) solid
                        box-shadow: -2px 0 8px 3px var(--color-dark-d)
                        // box-shadow: -4px 0 8px 3px var(--color-brand-)
                        // background-color: var(--color-brand-1d)
                        .right-arrow
                            display: none
                            width: 0
                            height: 0
                            border-top: 20px transparent solid
                            border-bottom: 20px transparent solid
                            border-left: 20px var(--color-brand-1) solid
                            position: absolute
                            top: calc(50% - (20px / 2))
                            right: -20px
</style>