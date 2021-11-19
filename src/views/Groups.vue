<template>
  <div>
    <Things modele="group" />
  </div>
</template>

<script>
export default {
  name: "Groups",
  components: {
    'Things': () => import('@/views/Things'),
  },
}
</script>

<style>

</style>
