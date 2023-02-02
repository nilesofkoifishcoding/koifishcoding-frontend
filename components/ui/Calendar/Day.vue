<template>
    <div class="calendar-day">
        <div class="day">{{ props.day }}</div>
    </div>
</template>

<script setup lang="ts">
interface DayEntry {
    title: string,
    time: string,
}
// const props = withDefaults(
//     defineProps<{
//         isStarred: boolean,
//         dayNumber: number,
//         isGrayed: boolean,
//         isToday: boolean,
//         entries: DayEntry[],
//         isVirtual: boolean
//     }>(),
//     {
//         isStarred: false,
//         isGrayed: false,
//         isToday: false,
//     }
// )

const props = withDefaults(
    defineProps<{
        day: number
    }>(),
    {}
)
</script>

<style scoped lang="sass">
.calendar-day
    font-family: 'Catamaran'
    padding: 0.2rem 0.5rem
    // border: 1px red solid
    color: var(--color-dark-a)
    
    box-shadow: 0 0 0 .5px var(--color-border-1)

    display: flex
    flex-direction: column

</style>