<template>
    <Workspaces />
</template>

<script>
export default {
  name: "Remote",
  components: {
    'Workspaces': () => import('@/views/Workspaces'),
  },
}
</script>

<style>

</style>
