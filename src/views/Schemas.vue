<template>
  <div>
    <Things modele="schema" />
  </div>
</template>

<script>
export default {
  name: "Schemas",
  components: {
    'Things': () => import('@/views/Things'),
  },
}
</script>

<style>

</style>
