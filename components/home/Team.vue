<script setup lang="ts">

</script>

<template>
  <div class="team" id="team">
<!--    <div class="arrow"></div>-->
    <div class="title">Our Team</div>
    <div class="members">
      <div class="member niles">
        <div class="circle"></div>
        <div class="name">Niles Brandon</div>
        <div class="title">Founder/CTO</div>
      </div>
      <div class="member whitney">
        <div class="circle"></div>
        <div class="name">Whitney Pledger</div>
        <div class="title">Operations</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
$arrow-size: 20px

.team
  margin: 0rem 0 0rem
  background-color: var(--color-brand-1)
  background-color: var(--color-white-a)
  padding-bottom: 4rem
  position: relative

  .arrow
    position: absolute
    width: $arrow-size
    height: $arrow-size
    left: calc(50% - ($arrow-size / 2))
    top: -1 * $arrow-size / 2
    background-color: black
    transform: rotateZ(45deg)


  & > .title
    //margin-top: 1rem
    padding-top: 2rem
    text-align: center
    font-family: 'Catamaran'
    font-weight: 700
    font-size: 1rem
    color: var(--color-power-gray)
    letter-spacing: 0.03rem

    font-family: 'Bungee Shade'
    color: var(--color-white)
    color: var(--color-brand-3)
    font-size: 5rem
    margin-bottom: 4rem



  .members
    margin: 0 auto
    margin-top: 2rem
    max-width: 24rem
    display: flex
    justify-content: space-between
    color: var(--color-white)
    color: var(--color-brand-3)

    @media screen and (max-width: 600px)
      flex-direction: column

    .member
      display: flex
      flex-direction: column
      align-items: center
      font-family: 'Catamaran'

      @media screen and (max-width: 600px)
        margin-bottom: 3rem

      .circle
        width: 6rem
        height: 6rem
        border-radius: 50%
        background-size: cover
        box-shadow: 0 0 3px 1px var(--color-power-gray)

      .name
        margin-top: 1.4rem
        font-weight: 500
        font-size: 1.2rem
      .title
        font-size: .95rem
        font-weight: 400
        letter-spacing: 0.04rem

      &.niles
        .circle
          background-image: url('~/assets/jpgs/niles2.jpg')
          background-position: 60% 30%
          background-size: 220%
          background-repeat: no-repeat

      &.whitney
        .circle
          background-image: url('~/assets/jpgs/whitney.jpeg')
          background-position: center
          background-size: 150%
          background-repeat: no-repeat
</style>
