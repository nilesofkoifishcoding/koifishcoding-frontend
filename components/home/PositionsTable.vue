<template>
    <div class="pt">
        <div class="tabs">
            <div class="tab">Front End Development</div>
            <div class="tab selected">Back End Development</div>
            <div class="tab">Full Stack Development</div>
            <div class="tab">Mobile App Development</div>
        </div>
        <HomePosition />
    </div>
</template>

<style lang="sass" scoped>
$selectedColor: var(--color-brand-1)
.pt
    display: flex
    border-radius: 10px
    // border: 3px var(--color-dark-b) solid
    box-shadow: 0 0 8px 2px var(--color-dark-d2) 
    .tabs
        .tab
            padding: 1.5rem 1rem 1.5rem 1rem
            font-weight: 800
            border-bottom: 1px var(--color-dark-c) solid
            border-right: 1px var(--color-dark-c) solid
            &:last-child
                border-bottom: none
            &.selected
                // background-color: var(--color-brand-4)
                border-left: 5px $selectedColor solid
                // border-right: 4px var(--color-brand-4) solid
                color: $selectedColor
                border-right: none
            
</style>