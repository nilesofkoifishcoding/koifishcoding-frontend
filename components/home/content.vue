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
</template>

<script setup>
</script>

<style scoped lang="sass">
.root
    height: 700px
    background-color: var(--color-bg-1)
    margin-top: 61px
    position: relative
    display: flex
    & > div
        width: 50%
    .header-content
        // border: 1px blue solid
        display: flex
        align-items: center
        .content
            padding-left: 150px
            // border: 1px green solid
            .aux-heading
                font-family: 'Montserrat'
                color: var(--color-brand-1)
                font-weight: 600
                font-size: 1.2rem
                margin-bottom: 1.5rem
            .heading
                font-family: 'Montserrat'
                color: var(--color-brand-3)
                font-size: 4rem
                display: flex
                font-weight: 600
                flex-direction: column
                letter-spacing: -0.15rem
    .bg-images
        // position: absolute
        // right: 0
        // top: 0
        // bottom: 0
        width: 30%
        display: grid
        grid-template-columns: repeat(2, 60%)
        grid-template-rows: repeat(6, 150px)
        // border: 1px red solid
        position: relative

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
            // border: 1px red solid

</style>