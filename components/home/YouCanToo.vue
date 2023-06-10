<template>
    <div class="niles">
        <div class="above">
            <div class="frame">
              <div class="quote">
                "Koi Fish Coding is a result of <b>10+ years</b> working at world-class software development agencies.<br><br>What we bring is a peace of mind, ease, and effortlessness to the process for you"
              </div>
              <div class="from">
                <div class="line"></div>
                <div>Niles M. Brandon</div>
              </div>
<!--                <div class="name">Niles Brandon</div>-->
<!--/*                <p style="font-size: 1rem; font-weight: 600;">Koi Fish Coding is a result of 10+ years working at world-class software development agencies. What we bring is a peace of mind, ease, and effortlessness to the process for you.</p>*/-->
<!--                <br>-->
<!--                <b><span style="font-family: 'Bungee Shade'; color: gold;">Core Value 1: </span>Communication</b>-->
<!--                <p>We know that you want to see value from your investment with us, and it's our job to ensure you consistently see it.</p>-->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const loaded = ref(false)
onMounted(() => {
    loaded.value = true
})
onBeforeUnmount(() => loaded.value = false)
</script>

<style scoped lang="sass">
.niles
    position: relative
    height: 30rem
    background-color: black
    background-image: url('~/assets/jpgs/niles.jpg')
    background-position: 0% 150%
    background-size: contain
    background-repeat: no-repeat

    //@media screen and (max-width: 670px)
    //  height: 15rem

    .above
        //background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5858937324929971) 17%, rgba(0,0,0,1) 42%, rgba(0,0,0,1) 100%)
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 42%, rgba(0,0,0,1) 100%)
        position: absolute
        top: 0
        right: 0
        bottom: 0
        left: 0
        display: flex
        justify-content: flex-end
        padding-right: 3rem
        align-items: center

        .frame
          width: 45%
          height: 50%
          color: white
          border-left: 2px var(--color-brand-4) solid
          padding: 1rem

          @media screen and (max-width: 955px)
            width: 50%
          @media screen and (max-width: 870px)
            width: 55%
          @media screen and (max-width: 790px)
            width: 65%
          @media screen and (max-width: 670px)
            width: 85%
            height: 30%

          .from
            position: relative
            display: flex
            align-items: center
            margin-top: 2rem
            font-size: 1.5rem
            padding-left: 1rem
            font-family: Kalam
            font-weight: 300

            .line
              height: 2px
              width: 15px
              background-color: var(--color-brand-4)
              background-color: var(--color-white)
              margin-right: 5px

          .quote
            padding-left: 1rem
            font-size: 1.5rem
            line-height: 2rem
            font-style: italic
            font-family: Catamaran
            font-weight: 100
            color: var(--color-brand-4)



    @media screen and (max-width: 980px)
        background-position: -40% 150%

    @media screen and (max-width: 800px)
        background-position: -90% 150%

    @media screen and (max-width: 670px)
        height: 31rem
        background-position: 0% 0%

        .above
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 42%, rgba(0,0,0,1) 100%)

    @media screen and (max-width: 500px)



</style>
