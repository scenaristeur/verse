<template>
  <b-list-group>
    <b-list-group-item v-for="(v,i) in values" :key="i">
      <b-row>
      <b-col>
      <span v-if="v.type == 'text'">{{v.value}}</span>
      <div v-else-if="v.type == 'textarea'">
        <pre>{{v.value}}</pre>
      </div>
      <NodeLite v-else-if="v.type == 'node'" :node="v" />
      <span v-else-if="v.type == 'link'">
        <a :href="v.value.href" target="_blank">{{v.value.name}}</a>
      </span>
      <div v-else>{{v}}</div>
    </b-col>
    <b-col cols="1">
      <b-button v-if="$router.currentRoute.path == '/edit'" variant="outline-secondary" @click="remove(i)">X</b-button>
    </b-col>
  </b-row>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
name: 'Values',
components: {
  'NodeLite': () => import('@/components/NodeLite'),
},
props: ['values'],
methods:{
  remove(i){
    console.log(i)
    let values = this.values.splice(i,1);
    console.log(values)
    this.$emit('update:values', values)
  }
}
}
</script>

<style>

</style>
