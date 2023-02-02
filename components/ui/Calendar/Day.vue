<template>
    <div :class="['calendar-day', props.day.isGrayed && 'grayed']">
        <div class="day">
            <span class="numeral-prefix" v-if="props.day.numeralPrefix">{{
                props.day.numeralPrefix
            }}</span>
            {{ props.day.numeral }}
        </div>
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
type CalendarDay = {
    numeral: number,
    isGrayed?: boolean,
    numeralPrefix?: string
}
const props = withDefaults(
    defineProps<{
        day: CalendarDay
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

    &.grayed
        background-color: var(--color-bg-4)
        color: var(--color-dark-b)

        .day
            .numeral-prefix
                position: relative
                top: 1px
                margin-right: 5px

</style>