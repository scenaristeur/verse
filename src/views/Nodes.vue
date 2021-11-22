<template>
  <div>
    <b-button variant="outline-primary" @click="addNode">Add</b-button>
    <b-row>

      <b-col v-for="(node, i) in nodes" :key="i">
        <Node :node="node" @delete="deleteNode" @edit="editNode" />
      </b-col>

    </b-row>
    not both :  <b-table small responsive striped hover :items="notBoth" :fields="fields">

      <!-- <template #cell(id)="data">
      {{data.item.local['ve:name'] || data.item.remote['ve:name']}}
    </template> -->
    <template #cell(update)="data">
      <!-- {{ data.value}}<hr>
      {{data.item}} -->
      <b-button-toolbar>
        <b-button-group class="mx-1">
          <b-button v-if="data.item.local == null" @click="createLocal(data.item.remote)" variant="success">&laquo;</b-button>
          <b-button v-if="data.item.remote == null" @click="removeLocal(data.item.local)" variant="danger">X</b-button>
          <!-- </b-button-group>
          <b-button-group class="mx-1">
          <b-button>Edit</b-button>
          <b-button>Undo</b-button>
          <b-button>Redo</b-button>
        </b-button-group>
        <b-button-group class="mx-1"> -->
        <b-button v-if="data.item.local == null" @click="removeRemote(data.item.remote)" variant="danger">X</b-button>
        <b-button v-if="data.item.remote == null" @click="createRemote(data.item.local)" variant="success">&raquo;</b-button>
      </b-button-group>
    </b-button-toolbar>
    <!-- {{data}} -->
    <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
  </template>

</b-table>
must update :
<b-table striped small responsive hover :items="mustUpdate"  :fields="fields">
  <template #cell(update)="data">
    <!-- {{ data.value}}<hr>
    {{data.item}} -->
    <b-button-toolbar>
      <b-button-group class="mx-1">
        <b-button >&laquo;</b-button>
        <b-button >&raquo;</b-button>
      </b-button-group>
    </b-button-toolbar>
    {{data}}
    <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
  </template>
</b-table>
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
    },
    createLocal(n){
      console.log("create local",n)
    },
    createRemote(n){
      console.log("create remote",n)
    },
    removeLocal(n){
      console.log("remove local",n)
    },
    removeRemote(n){
      console.log("remove remote",n)
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
