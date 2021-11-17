<template>
  <div>
    <Things modele="note" />
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
