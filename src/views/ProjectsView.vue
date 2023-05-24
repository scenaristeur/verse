<template>
  <div>
    <ThingsView modele="project" />
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
  components: {
    'ThingsView': () => import('@/views/ThingsView'),
  },
}
</script>

<style>

</style>
