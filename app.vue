<template>
  <div>
    Hello is an understatement
    <KFCButton you="hey" />
  </div>
</template>

<script setup>
const route = useRoute()
console.log(route.params)

</script>