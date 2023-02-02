<template>
    <div class="ui-calendar">

        <template v-for="week in treeOfDays">
            <template v-for="day in week">
                <UiCalendarDay :day="day" />
            </template>
        </template>
        <!-- <UiCalendarDay /> -->
    </div>
</template>

<script setup lang="ts">

const year = '2023'
const month = '02'
const dateStr = `${year}-${month}-01T00:00:00`
const date = new Date(dateStr)
const daysInCurrentMonth = new Date(parseInt(year), parseInt(month), 0).getDate()

const daysInPreviousMonth = new Date(parseInt(year), parseInt(month) - 1, 0).getDate()

const sundayDate = (daysInPreviousMonth - (date.getDay() - 1))
const daysNeededToBackfillBeginning = daysInPreviousMonth - sundayDate

let days: number[][] = [[]]

function fillDaysWithBackfill() {
    for (let i = sundayDate; i <= daysInPreviousMonth; i++) {
        days[0] = [...days[0], i]
    }
}
function fillInMonthDays() {
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        const [latestWeek] = days.slice(-1)
        if (latestWeek.length === 7) {
            days = [...days, [i]]
        } else {
            days = [...days.slice(0, -1), [...latestWeek, i]]
        }
    }
}

function fillInNextMonth(num: number) {
    let [lastWeek] = days.slice(-1)
    for (let i = 1; i <= num; i++) {
        lastWeek = [...lastWeek, i]
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


console.log(days)

const treeOfDays = ref(days);



</script>

<style scoped lang="sass">
.ui-calendar
    margin-top: 4rem
    display: grid
    grid-auto-rows: 8rem
    grid-template-columns: repeat(7, 1fr)
    border: 1px var(--color-border-1) solid
    border-radius: 6px
    overflow: hidden
        
</style>
