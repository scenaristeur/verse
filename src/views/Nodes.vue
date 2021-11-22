<template>
  <div>
    <b-button variant="outline-primary" @click="addNode">Add</b-button>
    <b-row>

      <b-col v-for="(node, i) in nodes" :key="i">
        <Node :node="node" @delete="deleteNode" @edit="editNode" />
      </b-col>

    </b-row>
  </div>
</template>

<script>
export default {
  name: "Nodes",
  components: {
    'Node': () => import('@/components/Node'),
  },
  created() {
    this.$store.dispatch('nodes/getNodes');
    this.$store.commit('nodes/setCurrentNode', null)
  },
  methods:{
    addNode(){
      this.$router.push({ name: 'edit', params: {modele: this.modele} });
    },
    async deleteNode(node) {
      console.log('delete', node.id);
      await this.$store.dispatch('nodes/deleteNode', node);
      this.$store.dispatch('nodes/getNodes');
    },
    editNode(node) {
      console.log('edit', node.id);
      this.$store.commit('nodes/setCurrentNode', node)
      this.$router.push({ name: 'edit'});
    }
  },
  computed: {
    nodes() {
      return this.$store.state.nodes.nodes;
    }
  },
}
</script>

<style>

</style>
