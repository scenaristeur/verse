<template>
  <div>
    <ThingsView modele="agent" />
  </div>
</template>

<script>
export default {
  name: "AgentsView",
  components: {
    'ThingsView': () => import('@/views/ThingsView'),
  },
}
</script>

<style>

</style>
