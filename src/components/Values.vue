<template>
  <b-list-group>
    <b-list-group-item v-for="(v,i) in values" :key="i">
      <span v-if="v.type == 'text'">{{v.value}}</span>
      <div v-else-if="v.type == 'textarea'">
        <pre>{{v.value}}</pre>
      </div>
      <NodeLite v-else-if="v.type == 'node'" :node="v" />
      <span v-else-if="v.type == 'link'">
        <a :href="v.value.href" target="_blank">{{v.value.name}}</a>
      </span>
      <div v-else>{{v}}</div>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
name: 'Values',
components: {
  'NodeLite': () => import('@/components/NodeLite'),
},
props: ['values']
}
</script>

<style>

</style>
