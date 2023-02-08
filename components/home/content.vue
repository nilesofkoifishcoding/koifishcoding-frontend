<template>
    <div class="root">
        <div class="header-content">
            <div class="content">
                <div class="aux-heading">Next Class Starts: Feburary 6<sup>th</sup>, 2023</div>
                <div class="heading">
                    <span>Koi Fish Coding is</span>
                    <span>Coming to <span style="color: #e52949">Nashville</span></span>
                </div>
            </div>
        </div>
        <div class="bg-images">
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
    <HomeHeroSubMain />
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

    background-image: url('https://images.unsplash.com/photo-1674443544891-9c00f240b69c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    
    & > div
        width: 50%
    .header-content
        display: flex
        align-items: center
        .content
            padding-left: 150px
            .aux-heading
                font-family: 'Montserrat'
                color: var(--color-brand-1)
                font-weight: 600
                font-size: 1.2rem
                margin-bottom: 1.5rem
                margin-left: 2px
            .heading
                margin-top: 2rem
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
                span
                    line-height: 5.5rem
                    &:nth-child(1)
                        margin-left: -1px
                        
    .bg-images
        width: 30%
        display: grid
        grid-template-columns: repeat(2, 60%)
        grid-template-rows: repeat(6, 150px)
        position: relative
        opacity: 0

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
</style>