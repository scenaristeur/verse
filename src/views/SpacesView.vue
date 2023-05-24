<template>
  <div>
    <ThingsView modele="space" />
  </div>
</template>

<script>
export default {
  name: "SpacesView",
  components: {
    'ThingsView': () => import('@/views/ThingsView'),
  },
}
</script>

<style>

</style>
