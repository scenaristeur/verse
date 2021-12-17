<template>
  <div>
    Config
    <Workspaces />
  </div>
</template>

<script>
export default {
  name: "Config",
  components: {
    'Workspaces': () => import('@/views/Workspaces'),
  },
}
</script>

<style>

</style>
