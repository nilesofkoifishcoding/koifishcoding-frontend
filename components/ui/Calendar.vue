<template>
    <div class="ui-calendar" ref="uiCalendar">
        <div class="title">
            <div class="month">March 2023</div>
            <div class='group'>Your Selected Schedule</div>
        </div>
        <template v-for="dayOfWeek in daysOfWeek">
            <div class="day-of-week">{{ dayOfWeek }}</div>
        </template>
        <template v-for="week in treeOfDays">
            <template v-for="day in week">
                <UiCalendarDay :day="day" />
            </template>
        </template>
    </div>
    <p style="font-family:Catamaran;"><i>Central Time Zone</i></p>
</template>

<script setup lang="ts">

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

const daysOfWeek = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

const year = '2023'
const month = '02'
const dateStr = `${year}-${month}-01T00:00:00`
const date = new Date(dateStr)
const daysInCurrentMonth = new Date(parseInt(year), parseInt(month), 0).getDate()

const daysInPreviousMonth = new Date(parseInt(year), parseInt(month) - 1, 0).getDate()

const sundayDate = (daysInPreviousMonth - (date.getDay() - 1))
const daysNeededToBackfillBeginning = daysInPreviousMonth - sundayDate

type CalendarDay = {
    numeral: number,
    isGrayed?: boolean,
    numeralPrefix?: string
}
let days: CalendarDay[][] = [[]]

function fillDaysWithBackfill() {
    for (let i = sundayDate; i <= daysInPreviousMonth; i++) {
        days[0] = [...days[0], { numeral: i, isGrayed: true }]
    }
}
function fillInMonthDays() {
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        const [latestWeek] = days.slice(-1)
        if (latestWeek.length === 7) {
            days = [...days, [{ numeral: i }]]
        } else {
            days = [...days.slice(0, -1), [...latestWeek, { numeral: i }]]
        }
    }
}

function fillInNextMonth(num: number) {
    let [lastWeek] = days.slice(-1)
    for (let i = 1; i <= num; i++) {
        lastWeek = [...lastWeek, { numeral: i, isGrayed: true, numeralPrefix: i === 1 ? 'April' : '' }]
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
const additionalRems = ' 7rem'.repeat(weeks)
console.log(additionalRems)

const newStyle = `3.2rem 2rem` + additionalRems
console.log(newStyle)

const uiCalendar = ref(null)
onMounted(() => {
    if (uiCalendar.value) {
        console.log('OK OKOK')
        // @ts-ignore
        uiCalendar.value.style.gridAutoRows = newStyle
    }
})

</script>

<style scoped lang="sass">
.ui-calendar
    margin-top: 4rem
    display: grid
    grid-auto-rows: 3.2rem 2rem 7rem 7rem 7rem 7rem
    grid-template-columns: repeat(7, 1fr)
    // border: 1px var(--color-border-1) solid
    // border-radius: 6px
    overflow: hidden

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
            font-size: 1.2rem
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
