<template>
  <div>
    <ThingsView modele="schema" />
  </div>
</template>

<script>
export default {
  name: "SchemasView",
  components: {
    'ThingsView': () => import('@/views/ThingsView'),
  },
}
</script>

<style>

</style>
