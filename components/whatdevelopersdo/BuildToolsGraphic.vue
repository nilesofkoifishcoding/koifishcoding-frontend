<template>
    <Transition name="animal">
        <div :class="'animal'" v-if="showFrog">
            <div class="pic"></div>
            <div class="text">Frog</div>
        </div>
    </Transition>
    <Transition name="animal">
        <div class="animal cat" v-if="showCat">
            <div class="pic"></div>
            <div class="text">Cat</div>
        </div>
    </Transition>
    <Transition name="animal">
        <div class="animal fish" v-if="showFish">
            <div class="pic"></div>
            <div class="text">Fish</div>
        </div>
    </Transition>
    <Transition name="animal">
        <div class="animal zebra" v-if="showZebra">
            <div class="pic"></div>
            <div class="text">Zebra</div>
        </div>
    </Transition>
    <div class="machine" v-if="show">
        <div class="hole top-left"></div>
        <div class="hole top-right"></div>
        <div class="hole bottom-left"></div>
        <div class="hole bottom-right"></div>
        <div class="center">
            <font-awesome-icon :icon="['fas', 'fa-cog']" spin />
        </div>
    </div>
</template>

<script setup lang="ts">
const show = ref(false)
const showFrog = ref(false)
const showCat = ref(false)
const showFish = ref(false)
const showZebra = ref(false)

type Animal = {
    id: number,
    class: string
}
const animals = [
    { id: 1, class: 'animal' },
    { id: 2, class: 'dog' },
    { id: 3, class: 'goldfish' },
    { id: 4, class: 'zebra' }
]

const feed = ref<Animal[]>([])

// function startCyclingImages() {
//     console.log(animals.length)
//     let itemNum = 0;
//     setInterval(() => {
//         feed.value.push(animals[itemNum])

//         itemNum = itemNum + 1
//         if (itemNum == animals.length) {
//             itemNum = 1
//         }
//     }, 4000)
// }

async function startCyclingImages() {
    let currentInt = 0;
    while (true) {
        switch (currentInt) {
            case 0:
                showFish.value = false
                showFrog.value = true;
                break;
            case 1:
                showZebra.value = false
                showCat.value = true;
                break;
            case 2:
                showFrog.value = false
                showFish.value = true
                break;
            case 3:
                showCat.value = false
                showZebra.value = true
                break;
        }
        await new Promise((resolve) => setTimeout(resolve, 4000))
        currentInt++
        if (currentInt == 4) {
            currentInt = 0
        }
    }
}

setTimeout(() => {
    show.value = true
    startCyclingImages()
}, 500)
</script>

<style lang="sass" scoped>
@keyframes pulse
    0%
        box-shadow: 0 0 4px 2px var(--color-dark-c)
    84%
        box-shadow: 0 0 4px 2px var(--color-dark-c)
    94%
        box-shadow: 0 0 10px 0 rgba(0, 255, 0, 1)
    100%
        box-shadow: 0 0 4px 2px var(--color-dark-c)

.machine
    background-image: url('https://www.transparenttextures.com/patterns/transparent-square-tiles.png')
    background-repeat: repeat
    width: 100px
    height: 140px
    top: 0
    bottom: 0
    margin: auto 0
    left: calc(50% - calc(110px / 2))
    position: absolute
    backdrop-filter: blur(10px)
    z-index: 3
    box-shadow: 0 0 4px 2px var(--color-dark-c)
    border-radius: 10px
    display: flex
    justify-content: center
    align-items: center
    animation: pulse 4s
    animation-iteration-count: infinite

    .hole
        position: absolute
        width: 14px
        height: 14px
        border-radius: 50%
        box-shadow: inset 0 0 3px 2px var(--color-dark-c)
        &.top-left
            top: 5px
            left: 5px
        &.top-right
            top: 5px
            right: 5px
        &.bottom-left
            bottom: 5px
            left: 5px
        &.bottom-right
            bottom: 5px
            right: 5px

    .center
        opacity: 0.3
        font-size: 2rem
        position: relative
        top: 4px
.animal
    width: 60px
    height: 80px
    position: absolute
    top: 0
    bottom: 0
    margin: auto 0
    right: 0
    opacity: 0
    // border: 2px var(--color-dark) solid
    box-shadow: 0 0 4px 1px var(--color-dark-b)
    border-radius: 4px
    transform: translateX()
    animation-fill-mode: forwards
    overflow: hidden
    .pic
        height: 60px
        background-size: cover
        background-image: url('https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_3x2.jpg')
    .text
        display: flex
        justify-content: center
        align-items: center
        font-weight: 800
        height: 20px
        font-size: .9rem
    &.cat .pic
        background-image: url('https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg')
    &.fish .pic
        background-image: url('https://nypost.com/wp-content/uploads/sites/2/2022/04/fish-94.jpg?quality=75&strip=all')
    &.zebra .pic
        background-image: url('https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK-1200-80.jpg')

.animal-enter-active
    animation: roll-in 8s
    animation-timing-function: linear

.animal-leave-active
    animation: none

@keyframes roll-in
    0%
        left: 0
        opacity: 0
        height: 60px
    10%
        opacity: 1
    48%
        height: 60px
    52%
        height: 80px
    90%
        opacity: 1
    100%
        left: calc(100% - 60px)
        opacity: 0
        height: 80px
</style>

<style>
.fa-spin {
    animation-duration: 5s;
}
</style>