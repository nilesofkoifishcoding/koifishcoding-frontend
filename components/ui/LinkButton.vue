<template>
    <NuxtLink :to="props.link">
        <UiButton :text="props.text" :outline="props.outline" />
    </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        text: string,
        outline?: boolean,
        link?: string
    }>(),
    {
        outline: false,
        link: '/enroll'
    }
)
</script>
