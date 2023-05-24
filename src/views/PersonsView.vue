<template>
  <div>
    <ThingsView modele="person" />
  </div>
</template>

<script>
export default {
  name: "PersonsView",
  components: {
    'ThingsView': () => import('@/views/ThingsView'),
  },
}
</script>

<style>

</style>
