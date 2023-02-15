<template>
    <div class="wwd">
        <div class="title">
            <div class="pre-main-text">Software Engineering</div>
            <div class="main-text">
                <span>What&nbsp;</span>
                <span class="gradient-text-23">Developers</span>
                <span>&nbsp;Do</span>
            </div>
            <p>Software engineers are frequently called Developers these days. The job is stil the same: make websites,
                create mobile apps, build tools, and make the world a more efficient and better place.</p>
            <div class="graphics">
                <WhatdevelopersdoMakeWebsites />
                <WhatdevelopersdoCreateApps />
                <WhatdevelopersdoBuildTools />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
.wwd
    margin-top: 4rem
    padding-bottom: 400px

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
        
        .graphics
            display: flex
            font-weight: 500
            letter-spacing: 0.02rem
            & > *
                flex: 1
</style>