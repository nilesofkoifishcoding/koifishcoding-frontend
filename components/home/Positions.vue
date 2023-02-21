<template>
    <div class="positions">
        <div class="title">
            <div class="pre-main-text">Positions</div>
            <div class="main-text">
                <span>Types of Development & Jobs</span>
                <!-- <span>What&nbsp;</span>
                <span class="gradient-text-2">Jobs</span>
                <span>&nbsp;Can I Get?</span> -->
            </div>
            <p>Software engineers are frequently called Developers these days. The job is stil the same: make websites,
                create mobile apps, build tools, and make the world a more efficient and better place.</p>
            <div class="table">
                <div class="ball"></div>
                <div class="jobs">
                    <div class="position">
                        <div class="title">Front End Development</div>
                        <div class="description"></div>
                    </div>
                    <div class="position highlighted">
                        <div class="right-arrow"></div>
                        <div class="title">Back End Development</div>
                        <div class="description"></div>
                    </div>
                    <div class="position">
                        <div class="title">Full Stack Development</div>
                        <div class="description"></div>
                    </div>
                    <div class="position">
                        <div class="title">Mobile Development</div>
                        <div class="description"></div>
                    </div>
                </div>
                <div class="canvas">
                    <div class="border"></div>
                </div>
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
            display: flex
            .ball
                width: 7%
            & > .canvas
                width: 33%
                box-shadow: 0px 0 4px 3px var(--color-dark-d2)
                position: relative
                background-color: var(--color-white)
                &::before
                    box-shadow: -2px 0 8px 3px var(--color-dark-d2)
                    content: ''
                    position: absolute
                    top: -10px
                    left: -10px
                    // border-radius: 10px
                    width: 100%
                    height: 100%
                    background-color: var(--color-brand-1)
                    z-index: -1
                    animation: 2s pulse-bg infinite alternate
                .border
                    width: 10px
                    height: 15rem
                    position: absolute
                    top: 17.5rem
                    left: -10px
                    background-color: white
                    // border: 1px red solid
                    // height: 15rem
            & > .jobs
                width: 60%
                .position
                    height: 15rem
                    position: relative
                    // box-shadow: 0px 0 4px 3px var(--color-dark-e)
                    margin: 20px 0
                    background-color: var(--color-white)
                    margin-right: 20px
                    .title
                        font-size: 1.4rem
                        opacity: 0.5
                    &.highlighted
                        // border-left: 6px var(--color-brand-1) solid
                        box-shadow: -2px 0 8px 3px var(--color-dark-d)
                        margin-right: 0
                        // border-radius: 10px
                        &::before
                            box-shadow: -2px 0 8px 3px var(--color-dark-d2)
                            content: ''
                            position: absolute
                            top: -10px
                            left: -10px
                            // border-radius: 10px
                            width: 100%
                            height: 100%
                            background-color: var(--color-brand-1)
                            z-index: -1
                            animation: 2s pulse-bg infinite alternate
                            
                        &::after
                            content: ''
                            width: 10px
                            height: 100%
                            background-color: white
                            position: absolute
                            top: 0
                            right: -10px
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
                    
                        .title
                            opacity: 1
                            padding-top: 1rem
                            padding-left: 1rem
                            font-size: 1.4rem
                            // margin-top: 1rem
                    
@keyframes pulse-bg
    0%
        background-color: var(--color-brand-1)
    100%
        background-color: var(--color-brand-2)
</style>