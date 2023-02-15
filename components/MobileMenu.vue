<template>
    <Transition name="mobile-menu" :duration="600">
        <div v-if="props.visible" class="mobile-menu">
            <div class="cross" @click="emit('click')">
                <font-awesome-icon :icon="['fas', 'fa-x']" />
            </div>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
            <p>45745</p>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
            <p>35</p>
            <p>sldkfjsdlkfj</p>
            <p>56456</p>
            <p>sldkfjsdlkfj</p>
            <p>323423</p>
            <p>2343</p>
            <p>sldkfjsdlkfj</p>
            <p>2342</p>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
            <p>sldkfjsdlkfj</p>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { watch } from 'vue';
const emit = defineEmits<{
    (e: 'click'): void
}>()
const props = defineProps<{
    visible: boolean
}>()

watch(
    () => props.visible,
    (currentVal) => {
        if (currentVal) {
            document.body.classList.add('modal-open')
        } else {
            document.body.classList.remove('modal-open')
        }
    }
)

</script>

<style lang="sass" scoped>
.mobile-menu
    position: fixed
    top: 0
    left: 0
    height: 100vh
    width: 100vw
    z-index: 100
    background-color: rgba(255, 255, 255, 0.93)
    backdrop-filter: blur(6px)
    color: var(--color-dark)
    opacity: 1
    font-family: 'Catamaran'
    overflow: hidden

    .cross
        // transform: translateX(0)
        // opacity: 1
        position: absolute
        top: 1rem
        right: 1rem
        font-size: 1rem
        color: var(--color-dark-a)
        padding: .4rem 1rem
        border-radius: 50%
        cursor: pointer
        // transform: rotateZ(0deg)
        // opacity: 1

        @media screen and (min-width: $breakpoint-small)
            &:hover
                background-color: var(--color-dark-e)
    

.mobile-menu-enter-active
    transition: all .3s cubic-bezier(.4, 0, .2, 1)
.mobile-menu-leave-active
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .3s
.mobile-menu-enter-from, .mobile-menu-leave-to
    opacity: 0
    backdrop-filter: blur(0)

.mobile-menu-enter-active .cross
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .3s
.mobile-menu-leave-active .cross
    transition: all .3s cubic-bezier(.4, 0, .2, 1)
.mobile-menu-enter-from .cross, .mobile-menu-leave-to .cross
    transform: rotateZ(45deg)
    opacity: 0

</style>