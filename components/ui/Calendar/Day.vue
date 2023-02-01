<template>
    <div>day</div>
</template>

<script setup lang="ts">
interface DayEntry {
    title: string,
    time: string,
}
const props = withDefaults(
    defineProps<{
        isStarred: boolean,
        dayNumber: number,
        isGrayed: boolean,
        isToday: boolean,
        entries: DayEntry[],
        isVirtual: boolean
    }>(),
    {
        isStarred: false,
        isGrayed: false,
        isToday: false,
    }
)
</script>