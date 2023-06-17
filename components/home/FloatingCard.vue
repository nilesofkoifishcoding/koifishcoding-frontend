<script setup lang="ts">
const card = ref(null)
const glow = ref(null)
let bounds: { x: number; y: number; width: number; height: number; }

// onMounted(() => {
//     bounds = glow.value.getBoundingClientRect()
//     document.addEventListener('mousemove', rotateToMouse)
// })

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  //@ts-ignore
  card.value.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
  //@ts-ignore
  glow.value.style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

function onMouseEnter() {
    //@ts-ignore
    bounds = glow.value.getBoundingClientRect()
    document.addEventListener('mousemove', rotateToMouse)
}

function onMouseLeave() {
    document.removeEventListener('mousemove', rotateToMouse)
    //@ts-ignore
    card.value.style.transform = ''
    //@ts-ignore
    card.value.style.background = ''
}
</script>

<template>
<div class="fc-container">
  <div class="fc" ref="card" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
<!--  <div class="fc" ref="card">-->
    <div ref="glow" class="glow"></div>
  </div>
</div>
</template>

<style scoped lang="sass">
.fc-container
  display: flex
  justify-content: center
  padding: 2rem 0
  perspective: 1500px
  background: radial-gradient(farthest-side, white, var(--color-bg))

  .fc
    width: 400px
    height: 300px
    background-image: url('~/assets/jpgs/niles.jpg')
    background-size: cover
    border-radius: 10px
    box-shadow: 0 1px 5px rgb(102, 102, 102)
    position: relative

    transition-duration: 300ms
    transition-property: transform, box-shadow
    transition-timing-function: ease-out
    transform: rotate3d(0)

    &:hover
      transition-duration: 150ms
      box-shadow: 0 5px 20px 5px rgb(186.15, 186.15, 186.15)

    .glow
      position: absolute
      inset: 0
      background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)

</style>
