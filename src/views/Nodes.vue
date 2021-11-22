<template>
  <div>
    <b-button variant="outline-primary" @click="addNode">Add</b-button>
    <b-row>

      <b-col v-for="(node, i) in nodes" :key="i">
        <Node :node="node" @delete="deleteNode" @edit="editNode" />
      </b-col>

    </b-row>
    <div v-if="notBoth.length > 0">
      <h2>not both</h2>  <b-table small responsive striped hover :items="notBoth" :fields="fields">

        <template #cell(id)="data">
          {{data.item.local && data.item.local['ve:name'] || data.item.remote &&data.item.remote['ve:name']}}
          <hr>
          {{data.item.id}}

        </template>
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
  </div>

  <div v-if="mustUpdate.length > 0">
    <h2>must update</h2>
    <b-table striped small responsive hover :items="mustUpdate"  :fields="fields">
      <template #cell(id)="data">
        {{data.item.local && data.item.local['ve:name'] || data.item.remote &&data.item.remote['ve:name']}}
        <hr>
        {{data.item.id}}

      </template>
      <template #cell(update)="data">
        <!-- {{ data.value}}<hr>
        {{data.item}} -->
        <b-button-toolbar>
          <b-button-group class="mx-1">
            <b-button @click="updateLocal(data.item.remote)">&laquo;</b-button>
            <b-button @click="updateRemote(data.item.local)">&raquo;</b-button>
          </b-button-group>
        </b-button-toolbar>
        <!-- {{data}} -->
        <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
      </template>

      <template #cell(local)="data">
        <h5>{{data.item.local['ve:name']}}</h5>
        <small>{{new Date(data.item.local['ve:updated'])}}</small><br>
        {{ JSON.stringify(data.item.local, null, 2)}}
      </template>

      <template #cell(remote)="data">
        <h5>{{data.item.remote['ve:name']}}</h5>
        <small>{{new Date(data.item.remote['ve:updated'])}}</small><br>
        {{ JSON.stringify(data.item.remote, null, 2)}}
      </template>
    </b-table>
  </div>
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
    async createLocal(n){
      console.log("create local",n)
      await this.$store.dispatch('nodes/saveNode',n)
      await this.$store.dispatch('nodes/getNodes')
      await this.$store.commit('nodes/removeNotBoth', n)
    },
    async createRemote(n){
      await this.$store.dispatch('nodes/saveNode',n)
      await this.$store.dispatch('nodes/getNodes')
      await this.$store.commit('nodes/removeNotBoth', n)
      console.log("create remote",n)
    },
    async removeLocal(n){
      console.log("remove local",n)
    },
    async removeRemote(n){
      console.log("remove remote",n)
    },
    async updateLocal(n){
      console.log("update local", n)
      await this.$store.dispatch('nodes/saveNode',n)
      await this.$store.dispatch('nodes/getNodes')
      await this.$store.commit('nodes/removeMustUpdate', n)
    },
    async updateRemote(n){
      console.log("update remote", n)
      await this.$store.dispatch('nodes/saveNode',n)
      await this.$store.dispatch('nodes/getNodes')
      await this.$store.commit('nodes/removeMustUpdate', n)
    },

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
