<template>
  <div>
    <!-- {{node}} Lite <hr>
    {{liteNode}} -->
    <b-button v-if="liteNode" size="sm" variant="info" @click="editNode">{{liteNode['ve:name']}}</b-button>
    <b-alert v-else show variant="warning">Oh oh, it seems that node with id {{node.id}} as been deleted :-(</b-alert>
  </div>
</template>

<script>
export default {
  name: "NodeLite",
  props: ['node'],
  methods:{
    editNode(){
      this.$store.commit('nodes/setCurrentNode', this.liteNode)
      this.$router.push({ name: 'edit'});
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
