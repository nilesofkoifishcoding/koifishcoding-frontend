<template>
    <div class="typing">
        <div class="screen">
            <pre v-html="html" />
        </div>
    </div>
</template>

<script setup lang="ts">

const html = ref(`<span style="color: red;">&lt;html&gt;</span>
    &lt;head&gt;
        &lt;title&gt;Koi Fish Coding&lt;/title&gt;
    &lt;/head&gt;
&lt;/html&gt;`)

console.log(html.value[0])


</script>

<style lang="sass" scoped>
.typing
    display: flex
    justify-content: center
    align-items: center
    flex: 1
    display: none
    .screen
        width: 60%
        height: 70%
        margin: 0 auto
        box-shadow: 0 0 6px 1px var(--color-dark-d)
        border-radius: 10px
        background-color: rgba(255, 255, 255, 0.2)
        backdrop-filter: blur(3px)
        padding: 1rem
        box-sizing: border-box

        pre
            margin-top: 0
</style>