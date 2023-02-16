<template>
    <Transition name="animal">
        <div class="animal" v-if="show"></div>
    </Transition>
</template>

<script setup lang="ts">
const show = ref(false)

setTimeout(() => show.value = true, 1000)
</script>

<style lang="sass" scoped>
.animal
    width: 30px
    height: 30px
    background-color: rgba(80, 80, 210, 1)

.animal-enter-active
    animation: roll-in 3s
.animal-leave-active
    animation: roll-in 3 reverse

@keyframes roll-in
    0%
        background-color: rgba(255, 0, 0, 0)
    10%
        background-color: rgba(180, 200, 30, 0.4)
    100%
        background-color: rgba(80, 80, 210, 1)
</style>