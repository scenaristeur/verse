<template>
  <div>
    <Things thing="person" />
  </div>
</template>

<script>
export default {
  name: "Persons",
  components: {
    'Things': () => import('@/views/Things'),
  },
}
</script>

<style>

</style>
