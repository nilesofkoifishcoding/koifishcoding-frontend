<template>
    <div class="developer">
        <KHeader />
        <h1>Developer</h1>
        <ProgramsDeveloperHero />
        <ProgramsDeveloperNav />
        <div class="developer-body">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
.developer
    max-width: 1600px
    box-shadow: 0 30px 50px rgb(0 0 0 / 10%)
    margin: 0 auto
    position: relative
    h1
        font-family: 'Catamaran'
        margin-left: 1rem
    .developer-body
        max-width: 1200px
        margin: 0 auto
        padding-top: 1rem
        padding: 1rem
        margin-top: 800px
</style>