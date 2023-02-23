<template>
    <div class="position">
        <!-- <div class="title">Back End Development</div> -->
        <div class="info">
            <div class="header">NAME</div>
            <div class="description heading">Back End Development</div>
        </div>
        <div class="info">
            <div class="header">DESCRIPTION</div>
            <div class="description">
                Back End (or Backend) Development is what powers your favorite apps & sites. It's
                where you dive into saving information to databases, sending emails out to users, making
                sure notifications are sent to people's iPhones & Android devices, and so much more.
                Without
                backend development, much the frontend would have no where to save user's data to!
                <br><br>
                What if someone entered their email address to sign up for a newsletter, clicked
                `Submit`,
                <i>and nothing
                    happened?</i><br /> <span class='gradient-text'>They'd call a Backend Developer,
                    like
                    you.</span>
            </div>
        </div>
        <div class="info">
            <div class="header">Starting Salaries</div>
            <div class="description">
                <div>$30,000 - &nbsp;$60-000 . . . . . . . . Junior <span class="lesser">Backend
                        Developer</span></div>
                <div>$60,000 - $110-000 . . . . . . . . Mid-Level <span class="lesser">Backend
                        Developer</span></div>
                <div>$90,000 - $180-000 . . . . . . .&nbsp;&nbsp;Senior <span class="lesser">Backend
                        Developer</span></div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.position
    // flex: 1
    // min-height: 300px
    width: 50%
    position: relative
    padding-top: 1rem
    padding-bottom: 1rem
    display: flex
    flex-direction: column
    justify-content: space-between
    .info
        display: flex
        // margin-top: 1.5rem
        line-height: 1.2rem
        .header
            width: 6rem
            font-weight: 700
            font-size: 0.7rem
            padding-right: 0.4rem
            opacity: 0.4
            text-align: right
        .description
            border-left: 1px var(--color-dark-d) solid
            padding-left: 0.4rem
            flex: 1
            font-weight: 400
            .lesser
                opacity: 0.5
            &.heading
                font-size: 1.5rem
                font-weight: 800
                color: var(--color-dark)
</style>