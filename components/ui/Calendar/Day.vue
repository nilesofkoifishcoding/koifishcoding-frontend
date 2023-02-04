<template>
    <div :class="['calendar-day', props.day.isGrayed && 'grayed']">
        <div class="day">
            <span class="numeral-prefix" v-if="props.day.numeralPrefix">
                {{ props.day.numeralPrefix }}
            </span>
            {{ props.day.numeral }}
        </div>
        <div class="space" style="flex: 1 0 auto;"></div>
        <div class="entries-wrapper" v-if="props.session?.date === day.date">
            <div class="entry">
                <div class="icon">
                    <font-awesome-icon v-if="loaded && session?.locationType === SessionLocationType.InPerson"
                        :icon="['fas', 'fa-location-dot']" />
                    <font-awesome-icon v-else-if="loaded && session?.locationType === SessionLocationType.Virtual"
                        :icon="['fas', 'fa-video']" />
                </div>
                <div class="text">
                    <!-- <span>Class</span> -->
                </div>
                <div class="time">
                    <span>{{ session?.time }}</span>
                </div>
            </div>
        </div>
        <div class="space"></div>
    </div>
</template>

<script setup lang="ts">
import { CalendarDay } from '~~/models/frontend/calendarDay';
import { Session, SessionLocationType } from '~~/models/sessions';

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
        day: CalendarDay,
        session: Session | null
    }>(),
    {}
)

const loaded = ref(false);
const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
    loaded.value = true
})
</script>

<style scoped lang="sass">
.calendar-day
    font-family: 'Catamaran'
    padding: 0.2rem 0.5rem
    color: var(--color-dark-a)
    
    // box-shadow: 0 0 0 1px var(--color-border-1)
    border: 1px var(--color-border-1) solid

    display: flex
    flex-direction: column
    justify-content: space-around

    & > div
        flex: 1

    .entries-wrapper
        // border: 1px red solid
        background-color: var(--color-brand-1)
        border-radius: 4px
        position: relative
        color: var(--color-white)

        .entry
            height: 100%
            display: flex
            justify-content: space-between
            padding: 0 .5rem

            @media screen and (max-width: $breakpoint-small)
                padding: 0 .3rem
            
            .icon
                // width: 2rem
                display: flex
                justify-content: center
                align-items: center
                color: white

    &.grayed
        background-color: var(--color-bg-4)
        color: var(--color-dark-b)
        border: 1px var(--color-border-1) solid

        .day
            flex: 1
            .numeral-prefix
                position: relative
                top: 1px
                margin-right: 5px
        
        

</style>