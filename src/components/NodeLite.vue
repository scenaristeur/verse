<template>
  <div>
    <!-- {{node}} Lite <hr>
    {{liteNode}} -->
    <b-button size="sm" variant="info" @click="editNode">{{liteNode.name}}</b-button>
  </div>
</template>

<script>
export default {
  name: "NodeLite",
  props: ['node'],
  methods:{
    editNode(){
        this.$router.push({ name: 'edit', params: {node: this.liteNode} });
    }
  },
  computed: {
    liteNode() {
      return this.$store.state.nodes.nodes.filter(n => n.id == this.node.id)[0]
    },
  }
}
</script>

<style>

</style>
