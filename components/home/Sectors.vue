<template>
    <div class="sectors">
        <div class="title">
            <div class="pre-main-text">Careers in Development</div>
            <div class="main-text">
                <span>Pick Your Passion</span>
            </div>
        </div>
        <div class="row">
            <HomeSector :info="blocks[0]" />
            <HomeSector :info="blocks[1]" />
        </div>
        <div class="row">
            <HomeSector :info="blocks[2]" />
            <HomeSector :info="blocks[3]" />
        </div>
    </div>
</template>

<script setup lang="ts">
const blocks = ref([
    {
        title: 'Front End<br>Development',
        message: 'Create the visuals, bring the heat, make an impact! Beautiful designs + smooth animations are a core part of front end success.',
        imageClass: 'front',
        cta: 'Learn How to Succeed'
    },
    {
        title: 'Back End<br>Development',
        message: 'Create robust, resilient, and powerful systems! Understand databases, APIs, and real-time communications.',
        imageClass: 'back',
        cta: '',
    },
    {
        title: 'Full Stack<br>Development',
        message: '',
        imageClass: 'full',
        cta: '',
    },
    {
        title: 'Mobile App<br>Development',
        message: '',
        imageClass: 'mobile',
        cta: '',
    }
])
</script>

<style lang="sass" scoped>
.sectors
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
    .row
        width: 90%
        margin: 3rem auto 0
        margin-top: 3rem
        padding: 0 3rem
        display: flex
        justify-content: space-between
</style>