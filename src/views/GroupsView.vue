<template>
  <div>
    <ThingsView modele="group" />
  </div>
</template>

<script>
export default {
  name: "GroupsView",
  components: {
    'ThingsView': () => import('@/views/ThingsView'),
  },
}
</script>

<style>

</style>
