<template>
  <div>
    <Things modele="agent" />
  </div>
</template>

<script>
export default {
  name: "Agents",
  components: {
    'Things': () => import('@/views/Things'),
  },
}
</script>

<style>

</style>
