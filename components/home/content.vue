<template>
    <div class="root">
        <div class="header-content">
            <div class="content">
                <!-- <div class="aux-heading">Next Class Starts: Feburary 6<sup>th</sup>, 2023</div> -->
                <div class="aux-heading">From 0 to Job Offer. Start Programming Now.</div>
                <div class="heading">
                    <span>Koi Fish Coding</span>
                    <span>in <span class="nashville">Nashville</span></span>
                </div>
                <div class="description">
                    Koi Fish Coding was founded by <span class="name">Niles Brandon</span> to empower, inspire, and
                    create future programmers for
                    the challenges of tomorrow.
                </div>
                <div class="invest">
                    <span>Enroll in Developer 101</span>
                    <span class="button-container">
                        <font-awesome-icon :icon="['fas', 'fa-circle-right']" />
                    </span>
                </div>
                <div class="explore">Explore the Full Stack Developer Program</div>
            </div>
        </div>
        <HomeHeroTyping />
        <div class="bg-images" v-if="false">
            <!-- <div class="excellence-panel"><img src="~/assets/jpgs/excellence-sushi.png" alt="" /></div> -->
            <div class="panel"><img src="~/assets/jpgs/html-sushi-3.png" alt="" /></div>
            <div class="panel"></div>
            <div class="panel"></div>
            <div class="panel"><img src="~/assets/jpgs/css-sushi-2.png" alt="" /></div>
            <div class="panel"><img src="~/assets/jpgs/js-sushi-6.png" alt="" /></div>
            <div class="panel"></div>
            <div class="panel"></div>
            <!-- <div class="panel"><img src="~/assets/jpgs/js-sushi-6.png" alt="" /></div> -->
            <div class="panel mini"><img src="~/assets/jpgs/button-sushi-7.png"></div>
            <div class="panel"></div>
            <div class="panel"></div>
            <div class="panel"></div>

        </div>
    </div>
    <div class="tools">Something</div>
    <!-- <HomeHeroSubMain /> -->
    <HomeWhatWeDo />
    <div class="jobs">
        <div class="left"></div>
        <div class="right"></div>
        <div class="arrow"></div>
    </div>
    <!-- <div class="starting-salary">What do you want your starting salary to be?</div> -->
    <HomeHowItWorks v-if="false" />
    <div class="pricing">

        <!-- <stripe-pricing-table pricing-table-id="prctbl_1MSSlbEtf4E1q3XKhjkvtvq7"
            publishable-key="pk_test_51MQvsfEtf4E1q3XKjzBgnwzHjWHHBSdjUbSC3rtT0AArLzVZz6T2tdemfJVDBOCHHAJfVKCX9LiBVskUtUA1gmOa00G7Nkuknh">
        </stripe-pricing-table> -->
    </div>
</template>

<script setup lang="ts">
console.log('hey')
</script>

<style scoped lang="sass">
.root
    height: 700px
    background-color: var(--color-bg-2)
    position: relative
    display: flex
    z-index: 0

    // background-image: url('https://images.unsplash.com/photo-1674443544891-9c00f240b69c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')
    // background-repeat: no-repeat
    // background-position: center
    // background-size: cover

    background-image: url('~/assets/jpgs/cubes.png')

    @media screen and (max-width: $breakpoint-medium)
        background-position: left
    
    & > div
        width: 50%
    .header-content
        display: flex
        align-items: center
        width: 55%
        .content
            padding-left: 150px
            @media screen and (max-width: $breakpoint-large)
                    padding-left: 60px
            .aux-heading
                font-family: 'Montserrat'
                color: var(--color-brand-1)
                font-weight: 600
                font-size: 1.2rem
                margin-bottom: 1rem
                margin-left: 2px
            .heading
                margin-top: 1.5rem
                font-family: 'Montserrat'
                font-family: 'Catamaran'
                color: var(--color-brand-3)
                font-size: 5rem
                display: flex
                justify-content: center
                align-items: flex-start
                font-weight: 700
                flex-direction: column
                letter-spacing: -.1rem
                & > span
                    line-height: 5.5rem
                    &:nth-child(1)
                        margin-left: -1px
                        // color: var(--color-brand-1)
            
            .description
                // border: 1px red solid
                padding-right: 1rem
                font-family: 'Catamaran'
                font-size: 1.1rem
                font-weight: 400
                line-height: 1.5rem

                .name
                    font-weight: 600
                    // text-decoration: underline
                    // color: var(--color-brand-1)
            
            .invest
                margin-top: 1.5rem
                font-family: 'Catamaran'
                width: 18rem
                height: 3rem
                background-color: var(--color-button-1)

                display: flex
                justify-content: center
                align-items: center
                font-size: 1.2rem
                font-weight: 600
                border-radius: 5px
                box-shadow: 0 8px 7px 1px var(--color-dark-d)
                color: var(--color-white)
                border: none
                position: relative
                top: 0
                transition: all 0.15s cubic-bezier(.4,0,.2,1)
                z-index: 0

                &:hover
                    cursor: pointer
                    position: relative
                    top: -4px
                    transition: all 0.15s cubic-bezier(.4,0,.2,1)
                    box-shadow: 0 10px 14px 1px var(--color-dark-d)
                
                .button-container
                    right: 0
                    position: absolute
                    // opacity: 0
                    transition: all 0.15s cubic-bezier(.4,0,.2,1)
                    color: var(--color-button-1)
                &:hover .button-container
                    position: absolute
                    right: -40px
                    color: var(--color-button-1)
                    opacity: 1
                    transition: all 0.15s cubic-bezier(.4,0,.2,1)

            .explore
                color: var(--color-button-1)
                font-family: 'Catamaran'
                font-weight: 600
                margin-top: 1rem
                text-decoration: underline
                cursor: pointer

    @media screen and (max-width: $breakpoint-medium)
        flex-direction: column-reverse
        align-items: center
        
        .header-content
            text-align: center
            width: auto
            padding: 1rem
            box-sizing: border-box
            height: 75%
            .content
                padding-left: 0

                .aux-heading
                    font-size: 1rem

                .heading
                    align-items: center
                    font-size: 3.2rem
                    margin: 1.6rem 0
                    & > span
                        line-height: 3.1rem
                    
                .description
                    // margin-bottom: 3rem
                    padding-right: unset
                    width: 80%
                    margin: 0 auto 2rem
                
                .invest
                    margin: 1rem auto 2rem
                        
    .bg-images
        width: 30%
        display: grid
        grid-template-columns: repeat(2, 60%)
        grid-template-rows: repeat(6, 150px)
        position: relative
        // opacity: 0

        .excellence-panel
            position: absolute
            top: -50px
            right: 0
            left: 50%

        & > div
            img
                width: 90%
        & > div.mini
            img
                width: 40%

.tools
    display: none
    max-width: 1000px
    height: 160px
    margin: 0 auto
    position: relative
    top: -95px
    background-color: var(--color-white-b)
    backdrop-filter: blur(8px)
    border-radius: 6px
    box-shadow: 0 0 3px 1px rgba(30, 30, 30, 0.3)

$arrow-size: 20px
.jobs
    height: 30rem
    display: flex
    // padding-bottom: 400px
    margin-bottom: 200px
    position: relative
    & > *
        flex: 1
        height: 100%
    .left
        background-color: var(--color-brand-2b)
    .right
        background-color: var(--color-brand-2)
        background-color: var(--color-brand-2)
    .arrow
        position: absolute
        top: calc(50% - ($arrow-size / 2))
        left: 50%
        width: 0
        height: 0
        border-top: $arrow-size transparent solid
        border-bottom: $arrow-size transparent solid
        border-left: $arrow-size var(--color-brand-2b) solid

.arrow-right 
    position: absolute
    width: 0
    height: 0
    border-top: 60px solid transparent
    border-bottom: 60px solid transparent
    border-left: 60px solid green
</style>