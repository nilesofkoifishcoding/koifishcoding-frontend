<template>
    <div class="enroll">
        <KHeader />
        <EnrollHero />
        <div class="enroll-body">
            <EnrollStartDate />
            <UiCalendar />
            <div style="height: 1000px"></div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="sass" scoped>
.enroll
    max-width: 1600px
    box-shadow: 0 30px 50px rgb(0 0 0 / 10%)
    margin: 0 auto
    position: relative
    .enroll-body
        max-width: 1200px
        margin: 0 auto
        padding-top: 1rem

</style>