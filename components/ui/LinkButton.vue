<template>
    <NuxtLink to="/enroll">
        <UiButton :text="props.text" :outline="props.outline" />
    </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        text: string,
        outline?: boolean
    }>(),
    {
        outline: false
    }
)
</script>