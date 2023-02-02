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
        <div class="start-dates">
            <div class="start-date selected">
                <div class="top">
                    <div class="subdate">Monday, March</div>
                    <div class="date">2</div>
                    <div class="time">6:30pm CST</div>
                </div>
            </div>
            <div class="start-date">
                <div class="top">
                    <div class="subdate">Tuesday, March</div>
                    <div class="date">3</div>
                    <div class="time">6:30pm CST</div>
                </div>
            </div>
            <div class="start-date">
                <div class="top">
                    <div class="subdate">Tuesday, March</div>
                    <div class="date">4</div>
                    <div class="time">7:30pm CST</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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
    
    .start-dates
        margin-top: 2rem
        display: flex
        justify-content: space-between
        .start-date
            width: 20rem
            height: 20rem
            // border: 1px var(--color-dark-c) solid
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