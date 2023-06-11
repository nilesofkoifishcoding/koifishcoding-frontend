<template>
    <header>
        <KHeaderTopBar :transparent-bg="props.transparentBg" />
        <KHeaderNav :transparent-bg="props.transparentBg" />
    </header>
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
    z-index: 1
    position: sticky
    top: 0
</style>
