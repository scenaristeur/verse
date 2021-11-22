<template>
  <div>
    <b-button variant="outline-primary" @click="addNode">Add</b-button>
    <b-row>

      <b-col v-for="(node, i) in nodes" :key="i">
        <Node :node="node" @delete="deleteNode" @edit="editNode" />
      </b-col>

    </b-row>
    not both :  <b-table small responsive striped hover :items="notBoth" :fields="fields">

      <template #cell(update)="data">
        {{data}}
        <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
      </template>

    </b-table>
    {{JSON.stringify(notBoth)}}<hr>
    must update :
    <b-table striped small responsive hover :items="mustUpdate"  :fields="fields"></b-table>{{JSON.stringify(mustUpdate)}}<hr>
  </div>
</template>

<script>
export default {
  name: "Nodes",
  components: {
    'Node': () => import('@/components/Node'),
  },
  data(){
    return{
      fields: ['id', 'local', 'update', 'remote'],
    }
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
    },
    notBoth() {
      return this.$store.state.nodes.notBoth;
    },
    mustUpdate() {
      return this.$store.state.nodes.mustUpdate;
    }
  },
}
</script>

<style>

</style>
notBoth
