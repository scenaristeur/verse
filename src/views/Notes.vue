<template>
  <div>
    <Things thing="note" />
  </div>
</template>

<script>
export default {
  name: "Notes",
  components: {
    'Things': () => import('@/views/Things'),
  },
}
</script>

<style>

</style>
