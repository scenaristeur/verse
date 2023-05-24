<template>
  <div>


    <b-row v-if="nodes.length > 0">

      <b-col cols="12" md="4">

        <b-input-group class="mb-3">

          <b-form-input v-model="search" placeholder="search"></b-form-input>
          <b-input-group-append>
            <!-- <b-button variant="outline-success">Button</b-button> -->
            <b-button variant="outline-secondary" @click="search=''">X</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-col cols="12" md="4">
        <!-- <b-button variant="outline-primary" @click="addNode">Add</b-button> -->
        <b-button size="sm" variant="outline-info" @click="order == 'asc' ? order= 'desc' : order = 'asc'">{{order}}</b-button>

      </b-col>
    </b-row>
    <div v-else>
      Use the bottom right pen button to add a node.
</div>


    <b-card-group columns>
<!-- <b-row>
      <b-col v-for="(node, i) in orderedNodes" :key="i"> -->
        <NodeComponent v-for="(node, i) in orderedNodes" :key="i"
         :node="node" @delete="deleteNode" @edit="editNode" />
      <!-- </b-col>
</b-row> -->
    </b-card-group>
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
    <b-table striped small responsive hover :items="mustUpdate"  :fields="fields2">
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
            <b-button @click="updateLocal(data.item.remote)">&laquo; update local</b-button>
            <b-button @click="updateRemote(data.item.local)">update remote &raquo;</b-button>
          </b-button-group>
        </b-button-toolbar>
        <!-- {{data}} -->
        <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
      </template>

      <template #cell(difference)="data">
        <small>
          <ul>
            <li v-for="(diff, key) in data.item.difference" :key="key">{{key}} :<br>

              <div v-if="key == 've:properties'">
                <!-- {{diff}} -->
                <ul>
                  <li v-for="(p,i) in diff" :key="i">
                    <!-- {{p}} -->
                    <b>local :</b>
                    <div v-if="p.from != null">
                      <i>{{p.from.name}}</i>: {{p.from.values}} <br>
                    </div>
                    <b>remote:</b>
                    <div v-if="p.to != null">
                      <i>{{p.to.name}}</i>: {{p.to.values}}
                    </div>
                  </li>
                </ul>

              </div>
              <div v-else>
                local: {{diff.from}}<br>
                remote: {{diff.to}}
              </div>
            </li>
          </ul>
          <!-- {{data.item.difference}} -->
        </small>
        <!-- {{ JSON.stringify(data.item.difference, null, 2)}} -->
      </template>

      <!-- <template #cell(local)="data">
      <h5>{{data.item.local['ve:name']}}</h5>
      <small>{{new Date(data.item.local['ve:updated'])}}</small><br>
      {{ JSON.stringify(data.item.local, null, 2)}}
    </template>

    <template #cell(remote)="data">
    <h5>{{data.item.remote['ve:name']}}</h5>
    <small>{{new Date(data.item.remote['ve:updated'])}}</small><br>
    {{ JSON.stringify(data.item.remote, null, 2)}}
  </template> -->
</b-table>
</div>

<b-iconstack font-scale="3"  @click="addNode" class="floating-action-button" type="button">
  <b-icon stacked icon="circle-fill" variant="warning"></b-icon>
  <b-icon stacked icon="pencil" scale="0.5" variant="primary"></b-icon>
  <b-icon stacked icon="circle" variant="info"></b-icon>
</b-iconstack>

</div>
</template>

<script>
import _ from 'lodash';

export default {
  name: "NodesView",
  components: {
    'NodeComponent': () => import('@/components/NodeComponent'),
  },
  data(){
    return{
      fields: ['id', 'local', 'update', 'remote'],
      fields2: ['id', 'difference','local', 'update', 'remote'],
      'order' : 'asc',
      search: ""
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
      await this.$store.dispatch('nodes/saveNode',n,)
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
      n.exclude = "remote"
      await this.$store.dispatch('nodes/deleteNode',n)
      await this.$store.dispatch('nodes/getNodes')
      await this.$store.commit('nodes/removeNotBoth', n)
    },
    async removeRemote(n){
      console.log("remove remote",n)
      n.exclude = "local"
      await this.$store.dispatch('nodes/deleteNode',n)
      await this.$store.dispatch('nodes/getNodes')
      await this.$store.commit('nodes/removeNotBoth', n)
    },
    async updateLocal(n){
      console.log("update local", n)
      n.exclude = "remote"
      await this.$store.dispatch('nodes/saveNode',n)
      await this.$store.dispatch('nodes/getNodes')
      await this.$store.commit('nodes/removeMustUpdate', n)
    },
    async updateRemote(n){
      console.log("update remote", n)
      n.exclude = "local"
      await this.$store.dispatch('nodes/saveNode',n)
      await this.$store.dispatch('nodes/getNodes')
      await this.$store.commit('nodes/removeMustUpdate', n)
    },
    byKey(key) {
      return function (o) {
        var v = parseInt(o[key], 10);
        return isNaN(v) ? o[key] : v;
      };
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
    },
    orderedNodes: function () {
      return _.orderBy(this.filteredNodes, this.byKey('ve:age'), this.order)
    },
    filteredNodes: function (){
      return this.search.length == 0 ? this.nodes : this.nodes.filter( n => {
        return n['ve:name'].toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>
.floating-action-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index:3;
}
.add-item input {
  outline: none;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  transition: all 0.25s;
  background: inherit;
  color: white;
}
.add-item input:focus {
  border-bottom-color: rgba(255, 255, 255, 1);
}
</style>
