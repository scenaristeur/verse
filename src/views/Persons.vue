<template>
  <div>
    <Things modele="person" />
  </div>
</template>

<script>
export default {
  name: "Persons",
  components: {
    'Things': () => import('@/views/Things'),
  },
}
</script>

<style>

</style>
