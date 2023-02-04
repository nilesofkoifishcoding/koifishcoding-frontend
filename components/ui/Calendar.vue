<template>
    <div class="ui-calendar" ref="uiCalendar">
        <div v-if="!props.selectedGroup?.id" class="overlay">Choose a Group to See the Schedule</div>
        <div class="title">
            <div class="month">March 2023</div>
            <div class='group'>{{ props.selectedGroup?.letter }}</div>
        </div>
        <template v-for="dayOfWeek in daysOfWeek">
            <div class="day-of-week">{{ dayOfWeek }}</div>
        </template>
        <template v-for="week in treeOfDays">
            <template v-for="day in week" :key="day.date">
                <UiCalendarDay :day="day"
                    :session="props.selectedGroup?.sessions.find(x => x.date === day.date) || null" />
            </template>
        </template>
    </div>
    <p style="font-family:Catamaran;"><i>Central Time Zone</i></p>
</template>

<script setup lang="ts">
import { CalendarDay } from '~~/models/frontend/calendarDay';
import { Group } from '~~/models/groups';

const props = defineProps<{
    selectedGroup: Group | null
}>()

enum EntryState {
    Starred,
    Selected,
    Hovered,
    Deselected
}
enum EntryLocationType {
    Virtual,
    InPerson
}

const entries = [
    {
        month: 2,
        day: 7,
        state: EntryState.Starred,
        locationType: EntryLocationType,
        text: 'Class',
        time: '7:00pm'
    }
]

const daysOfWeek = ref(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

const year = '2023'
const month = '03'
const dateStr = `${year}-${month}-01T00:00:00`
const date = new Date(dateStr)
const daysInCurrentMonth = new Date(parseInt(year), parseInt(month), 0).getDate()

const daysInPreviousMonth = new Date(parseInt(year), parseInt(month) - 1, 0).getDate()

const sundayDate = (daysInPreviousMonth - (date.getDay() - 1))
const daysNeededToBackfillBeginning = daysInPreviousMonth - sundayDate


let days: CalendarDay[][] = [[]]

function fillDaysWithBackfill() {
    for (let i = sundayDate; i <= daysInPreviousMonth; i++) {
        const date = `${year}-${(parseInt(month) - 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`
        days[0] = [...days[0], { numeral: i, date: date, isGrayed: true }]
    }
}
function fillInMonthDays() {
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        const [latestWeek] = days.slice(-1)
        const date = `${year}-${month}-${i.toString().padStart(2, '0')}`
        if (latestWeek.length === 7) {
            days = [...days, [{ numeral: i, date: date }]]
        } else {
            days = [...days.slice(0, -1), [...latestWeek, { numeral: i, date }]]
        }
    }
}

function fillInNextMonth(num: number) {
    let [lastWeek] = days.slice(-1)
    for (let i = 1; i <= num; i++) {
        const date = `${year}-${(parseInt(month) + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`
        lastWeek = [...lastWeek, { numeral: i, isGrayed: true, numeralPrefix: i === 1 ? 'April' : '', date }]
    }
    days = [...days.slice(0, -1), lastWeek]
}

if (daysNeededToBackfillBeginning > 0) {
    fillDaysWithBackfill()
}
fillInMonthDays()

const daysLeftToForwardFill = 7 - days.slice(-1)[0].length
if (days.slice(-1).length !== 0) {
    fillInNextMonth(daysLeftToForwardFill)
}

const treeOfDays = ref(days);

const weeks = days.length
console.log(weeks)

// const weeksAccountedForInCss = 4
// const additionalWeeksNeeded = weeks - weeksAccountedForInCss
const additionalRems = ' 6.5rem'.repeat(weeks)
console.log(additionalRems)

const newStyle = `3.2rem 2rem` + additionalRems
console.log(newStyle)

const uiCalendar = ref(null)
onMounted(() => {
    if (uiCalendar.value) {
        // @ts-ignore
        uiCalendar.value.style.gridAutoRows = newStyle
    }
})

</script>

<style scoped lang="sass">
.ui-calendar
    margin-top: 2rem
    display: grid
    grid-auto-rows: 3.2rem 2rem 6.5rem 6.5rem 6.5rem 6.5rem
    // grid-template-col
    grid-template-columns: repeat(7, calc(100%/7))
    // border: 1px var(--color-border-1) solid
    // border-radius: 6px
    // overflow: hidden
    // z-index: 5
    position: relative
    z-index: -1

    .overlay
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-color: var(--color-white-b)
        z-index: 2

        font-family: 'Catamaran'
        display: flex
        justify-content: center
        align-items: center
        font-weight: 600
        font-size: 1.1rem
        color: var(--color-dark-a)

        backdrop-filter: blur(6px)

    .title
        grid-column: 1 / 8
        background-color: var(--color-bg-4)
        display: flex
        justify-content: space-between
        align-items: center
        font-family: 'Catamaran'
        padding: 1rem
        font-size: 1.3rem
        font-weight: 500
        border: 1px var(--color-border-1) solid

        .group
            color: var(--color-brand-1)
            font-size: 1.5rem
            font-weight: 600

    .day-of-week
        // box-shadow: 0 0 0 1px var(--color-border-1)
        border: 1px var(--color-border-1) solid
        font-family: 'Catamaran'
        text-align: center
        // background-color: var(--color-bg-4)
        color: var(--color-dark-a)
        font-weight: 600
        display: flex
        justify-content: center
        align-items: center
        
</style>
