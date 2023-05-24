<template>
  <div>
    <ThingsView modele="note" />
  </div>
</template>

<script>
export default {
  name: "NotesView",
  components: {
    'ThingsView': () => import('@/views/ThingsView'),
  },
}
</script>

<style>

</style>
