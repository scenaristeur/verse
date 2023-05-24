<template>
    <WorkspacesView />
</template>

<script>
export default {
  name: "RemoteView",
  components: {
    'WorkspacesView': () => import('@/views/WorkspacesView'),
  },
}
</script>

<style>

</style>
