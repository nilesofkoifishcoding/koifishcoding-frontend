<template>
    <div class="enroll">
        <KHeader />
        <EnrollHero />
        <div class="enroll-body">
            <EnrollStartDate :groups="groupData" :selected-group-id="selectedGroupId"
                @group-selected="onGroupSelected" />
            <UiCalendar :right-text="selectedGroup?.letter" />
            <div style="height: 1000px"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { groupData } from '../models/groups'

const selectedGroupId = ref<number | null>(null)
const selectedGroup = computed(() => {
    return groupData.find((group) => group.id === selectedGroupId.value)
})

function onGroupSelected(groupId: number) {
    selectedGroupId.value = groupId
}

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
        padding: 1rem

</style>