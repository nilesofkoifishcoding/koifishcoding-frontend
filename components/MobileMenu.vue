<template>
    <Transition name="mobile-menu" :duration="{ enter: 950, leave: 800 }">
        <div v-if="props.visible" class="mobile-menu">
            <div class="cross" @click="emit('click')">
                <font-awesome-icon :icon="['fas', 'fa-x']" />
            </div>
            <div class="items">
                <NuxtLink @click="emit('click')" to="/programs/developer" class="item developer">
                    <span>Full Stack</span>
                    <span>Developer Program</span>
                </NuxtLink>
                <div class="item instructor">Instructor</div>
                <div class="item nashville">Nashville</div>
                <div class="item faq">FAQ</div>
                <div class="item break"></div>
                <div class="item enroll">Enroll</div>
                <div class="item login">Student Login</div>
            </div>
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
    background-color: rgba(255, 255, 255, 0.95)
    backdrop-filter: blur(8px)
    color: var(--color-dark)
    opacity: 1
    font-family: 'Catamaran'
    overflow: hidden

    display: flex
    justify-content: center
    align-items: center

    .cross
        position: absolute
        top: 1rem
        right: 1rem
        font-size: 1rem
        color: var(--color-dark-a)
        padding: .4rem 1rem
        border-radius: 50%
        cursor: pointer

        @media screen and (min-width: $breakpoint-small)
            &:hover
                background-color: var(--color-dark-e)

    .items
        .item
            display: flex
            flex-direction: column
            align-items: center
            margin: 2.5rem
            font-size: 200%
            font-weight: 300
            line-height: 2.4rem
            padding: 1rem 4rem
            & > *
                opacity: 1
            &.break
                height: 1px
                margin: 0 auto
                width: 20rem
                background-color: var(--color-dark-d)
                padding: 0
            &.enroll
                background-color: var(--color-button-1)
                color: var(--color-white)
                padding: 1.2rem 6rem
                border-radius: 4px
            &.login
                font-size: 1.2rem
            
            &:hover:not(.enroll)
                background-color: var(--color-dark-e)
                padding: 1rem 4rem

            @media screen and (max-height: 900px)
                margin: 1rem
                font-size: 150%
                &.enroll
                    padding: .5rem 2rem
    

.mobile-menu-enter-active
    transition: all .3s cubic-bezier(.4, 0, .2, 1)
.mobile-menu-leave-active
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .5s
.mobile-menu-enter-from, .mobile-menu-leave-to
    opacity: 0
    backdrop-filter: blur(0)

.mobile-menu-enter-active .cross
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .3s
.mobile-menu-leave-active .cross
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .35s
.mobile-menu-enter-from .cross, .mobile-menu-leave-to .cross
    transform: rotateZ(45deg)
    opacity: 0

.mobile-menu-enter-active .developer
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .3s
.mobile-menu-leave-active .developer
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .3s
.mobile-menu-enter-from .developer, .mobile-menu-leave-to .developer
    opacity: 0 !important
.mobile-menu-enter-active .instructor
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .4s
.mobile-menu-leave-active .instructor
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .25s
.mobile-menu-enter-from .instructor, .mobile-menu-leave-to .instructor
    opacity: 0 !important
.mobile-menu-enter-active .nashville
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .5s
.mobile-menu-leave-active .nashville
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .2s
.mobile-menu-enter-from .nashville, .mobile-menu-leave-to .nashville
    opacity: 0 !important
.mobile-menu-enter-active .faq
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .6s
.mobile-menu-leave-active .faq
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .15s
.mobile-menu-enter-from .faq, .mobile-menu-leave-to .faq
    opacity: 0 !important
.mobile-menu-enter-active .break
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .7s
.mobile-menu-leave-active .break
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .1s
.mobile-menu-enter-from .break, .mobile-menu-leave-to .break
    opacity: 0 !important
.mobile-menu-enter-active .enroll
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .8s
.mobile-menu-leave-active .enroll
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .05s
.mobile-menu-enter-from .enroll, .mobile-menu-leave-to .enroll
    opacity: 0 !important
.mobile-menu-enter-active .login
    transition: all .3s cubic-bezier(.4, 0, .2, 1) .9s
.mobile-menu-leave-active .login
    transition: all .3s cubic-bezier(.4, 0, .2, 1)
.mobile-menu-enter-from .login, .mobile-menu-leave-to .login
    opacity: 0 !important

</style>