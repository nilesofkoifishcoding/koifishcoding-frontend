<template>
    <KHeaderTopBar :transparent-bg="props.transparentBg" />
    <KHeaderNav :transparent-bg="props.transparentBg" />
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        transparentBg: boolean
    }>(),
    {
        transparentBg: false
    }
)
</script>

<style scoped lang="sass">
header
    position: relative
    z-index: 10
</style>