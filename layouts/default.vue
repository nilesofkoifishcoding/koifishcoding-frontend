<template>
    <div class="body-content">
        <KHeader />
        <slot />
    </div>
<!--    <KFooter />-->
    <div style="height: 3rem"></div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
.body-content
    max-width: 100rem
    box-shadow: 0 30px 50px rgb(0 0 0 / 10%)
    margin: 0 auto
    position: relative
</style>
