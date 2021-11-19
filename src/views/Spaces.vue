<template>
  <div>
    <Things modele="space" />
  </div>
</template>

<script>
export default {
  name: "Spaces",
  components: {
    'Things': () => import('@/views/Things'),
  },
}
</script>

<style>

</style>
