<template>
    <div class="enroll-start-date">
        <h5>Group Selection</h5>
        <h3>Choose a Group</h3>
        <p>The following groups teach <b>the same exact content</b>. The groups meet separately so that you're always
            in small classes with personalized attention. <u>Choose the start date & schedule that
                best suits your schedule.</u>
        </p>
        <p>Koi Fish Coding exists to work around your schedule to transition you into a
            coding career without interferring with your existing commitments. Be mindful that the virtual & in-person
            sessions are all mandatory, and no sessions will be recorded.
        </p>
        <div class="s-dates">
            <div :class="['s-date', group.id === props.selectedGroupId && 'selected']" v-for="group in groups"
                :key="group.id" @click="groupSelected(group)">
                <div class="radio">
                    <div class="circle"></div>
                </div>
                <div class="text">
                    <div class="start-date">
                        <span>Start Date:</span>
                        <span>{{ group.startDate }}</span>
                    </div>
                    <div class="times">
                        <span v-for="sessionTemplate in group.sessionTemplates">
                            <span>{{ sessionTemplate.description }}</span>&nbsp;
                            <span class='location'>{{ sessionTemplate.location }}</span>
                        </span>
                    </div>
                </div>
                <div class="letter">{{ group.letter }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Group } from '~~/models/groups';

const props = defineProps<{
    groups: Group[],
    selectedGroupId: number | null,
}>()
const emit = defineEmits<{
    (e: 'groupSelected', id: number): void
}>()

function groupSelected(group: Group) {
    emit('groupSelected', group.id)
}

</script>

<style lang="sass" scoped>
.enroll-start-date
    color: var(--color-dark)
    font-family: 'Catamaran'
    h5
        font-weight: 800
        margin-bottom: 0
        font-size: 1.2rem
        color: var(--color-brand-1)
    h3
        font-weight: 800
        font-size: 1.8rem
        margin-top: .8rem
        margin-bottom: 2rem
    
    .s-dates
        .s-date
            display: flex
            margin-bottom: 1rem
            padding: .8rem 0

            border: 1px var(--color-dark-c) solid
            border-radius: 4px

            .radio
                width: 3rem
                display: flex
                justify-content: center
                align-items: center

                .circle
                    width: 1rem
                    height: 1rem
                    background-color: var(--color-brand-1)
                    border-radius: 50%

                    background-color: transparent
                    border: 1px var(--color-dark-b) solid

            .text
                flex: 1
                .start-date
                    font-weight: 600
                    span:nth-child(1)
                        margin-right: 0.4rem
                .times
                    flex: 1
                    display: flex
                    justify-content: flex-start
                    align-items: center
                    display: flex
                    @media screen and (max-width: $breakpoint-medium)
                        align-items: flex-start
                        flex-direction: column
                        span:nth-child(2)
                            margin-top: .25rem
                            margin-bottom: .25rem
                    & > span
                        // box-shadow: 0 0 4px 2px var(--color-dark-d)
                        padding: 0.1rem 0.3rem 0.1rem 0
                        border-radius: 4px
                        margin-right: 2rem
                    
                    .location
                        font-weight: 500
            .letter
                display: flex
                justify-content: center
                align-items: center
                width: 3rem
                font-weight: 900
                color: var(--color-dark-b)
                font-size: 1.5rem

            @media screen and (min-width: $breakpoint-medium)
                &:hover
                    cursor: pointer
                    border: 1px var(--color-brand-2a) solid

            &.selected
                border: 1px var(--color-brand-1) solid
                .radio .circle
                    border-width: 0px
                    background-color: var(--color-brand-1)
                .letter
                    color: var(--color-brand-1)

    .start-dates
        margin-top: 2rem
        display: flex
        justify-content: space-between
        display: none
        .start-date
            width: 20rem
            height: 20rem
            // border: 1px var(--color-dark-d) solid
            box-shadow: 0 0 8px 3px rgba( 40, 40, 40, 0.1)
            padding: .8rem
            box-sizing: border-box
            cursor: pointer
            border-radius: 5px
            .top
                text-align: center
                & div:nth-child(1)
                    font-weight: 800
                & div:nth-child(2)
                    font-size: 6rem
                    margin: 0
                    line-height: 5rem
                & div:nth-child(3)
                    font-weight: 600
                    letter-spacing: 0.06rem
            
            &:hover
                // border: 1px var(--color-brand-1) solid
                box-shadow: 0 0 8px 3px var(--color-brand-1a)
            
            &.selected
                color: white
                background-color: var(--color-brand-1)
                // box-shadow: 0 0 8px 2px var(--color-brand-1b)
                box-shadow: none
        
</style>