<template>
  <div class="root">
    <div class="header-content">
      <div class="content">
        <div class="heading">
          <span>Koi Fish Coding</span>
        </div>
        <div class="aux-heading" style="margin-bottom: 4rem;">We're <span class="maniacally">Maniacally</span> focused on quality, communication & value.</div>
        <div class="pre-heading">We build apps & websites that your organization, clients & customers will love.</div>
        <div class="description">
          Koi Fish Coding was founded by <span class="name">Niles Brandon</span> to empower organizations in their goals. <br> <br><span class="future">This is software development of the future.</span>
        </div>
        <NuxtLink to="https://calendly.com/meet-with-koi-fish-coding/30min">
          <div class="invest">
            <span>Book a Zoom Call Now</span>
            <span class="button-container">
              <font-awesome-icon :icon="['fas', 'fa-circle-right']"/>
            </span>
          </div>
        </NuxtLink>
        <div class="accepting" style="display: none;">
          <div class="icon"></div>
          <div class="text">Now Accepting New Clients</div>
        </div>
        <div class="explore" style="display: none;">Explore the Full Stack Developer Program</div>
      </div>
    </div>
    <HomeHeroTyping/>
  </div>
  <HomeOrganizations />
  <HomeBreakfast />
<!--  <HomeExperience />-->
<!--  <HomeYouCanToo/>-->
  <br><br>
  <HomeOfferings/>
  <br><br>
  <HomeTeam/>
  <HomeBookNow />
  <HomeOutro />
<!--  <HomeDesign />-->
<!--  <div style="height: 300px"></div>-->
<!--  <HomeWhatWeDo/>-->
  <div class="jobs" style="display: none;">
    <div class="left">
      <span>How many open jobs are there?</span>
    </div>
    <div class="right">
      <div>
        <span>1,365,000+</span>
        <div class="counting">And Climbing</div>
      </div>
    </div>
    <div class="arrow"></div>
  </div>
  <HomeHowItWorks v-if="false"/>
  <div class="pricing" style="display: none">
    <!-- <stripe-pricing-table pricing-table-id="prctbl_1MSSlbEtf4E1q3XKhjkvtvq7"
        publishable-key="pk_test_51MQvsfEtf4E1q3XKjzBgnwzHjWHHBSdjUbSC3rtT0AArLzVZz6T2tdemfJVDBOCHHAJfVKCX9LiBVskUtUA1gmOa00G7Nkuknh">
    </stripe-pricing-table> -->
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="sass">
.root
  height: 700px
  background-color: var(--color-bg-2)
  position: relative
  display: flex
  z-index: 0

  background-image: url('~/assets/jpgs/cubes.png')

  @media screen and (max-width: $breakpoint-medium)
    background-position: left

  .header-content
    display: flex
    align-items: center
    width: 50%

    .future
      font-family: 'Kalam'
      font-weight: 300

    .content
      padding-left: 150px

      .maniacally
        font-size: 40px
        font-family: 'Bungee Shade'
      @media screen and (max-width: $breakpoint-large)
        padding-left: 60px

      .pre-heading
        font-family: Geologica
        font-size: 0.8rem
        display: none

      .aux-heading
        font-family: 'Montserrat'
        color: var(--color-brand-1)
        font-weight: 600
        font-size: 1.2rem
        margin-bottom: 1rem
        margin-left: 2px

      .heading
        margin-top: 1.5rem
        font-family: 'Montserrat'
        font-family: 'Catamaran'
        color: var(--color-brand-3)
        font-size: 5rem
        display: flex
        justify-content: center
        align-items: flex-start
        font-weight: 700
        flex-direction: column
        letter-spacing: -.1rem

        & > span
          line-height: 5.5rem

          &:nth-child(1)
            margin-left: -1px

      .description
        padding-right: 1rem
        font-family: 'Catamaran'
        font-size: 1.1rem
        font-weight: 400
        line-height: 1.5rem
        //display: none

        .name
          font-weight: 600

      .invest
        margin-top: .3rem
        font-family: 'Catamaran'
        width: 18rem
        height: 3rem
        background-color: var(--color-button-1)

        display: flex
        justify-content: center
        align-items: center
        font-size: 1.2rem
        font-weight: 600
        border-radius: 5px
        box-shadow: 0 8px 7px 1px var(--color-dark-d)
        color: var(--color-white)
        border: none
        position: relative
        top: 0
        transition: all 0.15s cubic-bezier(.4, 0, .2, 1)
        z-index: 0

        &:hover
          cursor: pointer
          position: relative
          top: -4px
          transition: all 0.15s cubic-bezier(.4, 0, .2, 1)
          box-shadow: 0 10px 14px 1px var(--color-dark-d)

        .button-container
          right: 0
          position: absolute
          // opacity: 0
          transition: all 0.15s cubic-bezier(.4, 0, .2, 1)
          color: var(--color-button-1)

        &:hover .button-container
          position: absolute
          right: -40px
          color: var(--color-button-1)
          opacity: 1
          transition: all 0.15s cubic-bezier(.4, 0, .2, 1)

      .explore
        color: var(--color-button-1)
        font-family: 'Catamaran'
        font-weight: 600
        margin-top: 1rem
        text-decoration: underline
        cursor: pointer

  @media screen and (max-width: $breakpoint-medium)
    flex-direction: column-reverse
    align-items: center

    .header-content
      text-align: center
      width: auto
      padding: 0 1rem 1rem
      box-sizing: border-box
      height: 68%

      .content
        padding-left: 0

        .aux-heading
          font-size: 1rem

        .heading
          align-items: center
          font-size: 3.8rem
          margin: 1.6rem 0

          & > span
            line-height: 3.1rem

        .description
          padding-right: unset
          width: 80%
          margin: 0 auto .2rem

        .invest
          margin: .2rem auto 2rem

  .bg-images
    width: 30%
    display: grid
    grid-template-columns: repeat(2, 60%)
    grid-template-rows: repeat(6, 150px)
    position: relative

    .excellence-panel
      position: absolute
      top: -50px
      right: 0
      left: 50%

    & > div
      img
        width: 90%

    & > div.mini
      img
        width: 40%

.tools
  display: none
  max-width: 1000px
  height: 160px
  margin: 0 auto
  position: relative
  top: -95px
  background-color: var(--color-white-b)
  backdrop-filter: blur(8px)
  border-radius: 6px
  box-shadow: 0 0 3px 1px rgba(30, 30, 30, 0.3)

$arrow-size: 20px
.jobs
  height: 30rem
  display: flex
  margin-bottom: 100px
  position: relative
  font-family: 'Catamaran'

  & > *
    flex: 1
    height: 100%

  .left
    background-color: var(--color-brand-2b)
    display: flex
    justify-content: center
    align-items: center
    color: var(--color-white)
    font-weight: 100
    font-size: 2.4rem
    text-align: center
    box-sizing: border-box

  .right
    background-color: var(--color-brand-2)
    background-color: var(--color-brand-2)
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    font-size: 3rem
    position: relative
    color: var(---color-white)

    span
      color: var(--color-white)
      font-weight: 900
      font-size: 4rem
      letter-spacing: 0.05rem

    .counting
      position: absolute
      left: 0
      right: 0
      margin: 0 auto
      color: var(--color-white)
      font-weight: 700
      font-size: 1rem
      font-family: 'Catamaran'
      letter-spacing: 0.05rem

  .arrow
    position: absolute
    top: calc(50% - ($arrow-size / 2))
    left: 50%
    width: 0
    height: 0
    border-top: $arrow-size transparent solid
    border-bottom: $arrow-size transparent solid
    border-left: $arrow-size var(--color-brand-2b) solid

.arrow-right
  position: absolute
  width: 0
  height: 0
  border-top: 60px solid transparent
  border-bottom: 60px solid transparent
  border-left: 60px solid green
</style>
