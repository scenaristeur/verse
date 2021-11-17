<template>
  <div>
    <Things modele="project" />
  </div>
</template>

<script>
export default {
  name: "Projects",
  components: {
    'Things': () => import('@/views/Things'),
  },
}
</script>

<style>

</style>
