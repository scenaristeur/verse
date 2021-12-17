<template>
  <b-container v-if="pod!=null">
    <b-row>
      (Experimental / expert )  Collaborate on other Workspaces
      <b-btn v-if="space == null" variant="outline-primary" size="sm" @click="add" class="mx-2">+ add a workspace</b-btn>
      <b-button variant="outline-primary" size="sm" @click="exploreFriendsWorkspaces" class="mx-2">todo explore friends</b-button>
      <span v-if="loading > 0" class="mx-2">Loading : {{loading}}</span>
    </b-row>


    <b-row v-if="space != null">
      <b-form-input  v-model="space.name"  placeholder="workspace name" />
      <b-form-input  v-model="space.url"  placeholder="workspace url" />
      <b-button @click="cancel" variant="outline-warning">Cancel</b-button>
      <b-button @click="save" variant="outline-success">Add it</b-button>

    </b-row>

    <b-list-group>
      <b-list-group-item button @click="use()" variant="success"><b>Default</b> {{pod.storage}}public/neurones/</b-list-group-item>
      <b-list-group-item v-for="s in workspaces" :key="s.url" button @click="use(s)">
        <b>{{s.name}}</b> {{s.url}} ({{s.nodes != undefined ? s.nodes.length : "--"}})
      </b-list-group-item>

    </b-list-group>

    <div v-if="currentWorkspace != null">
      <h1>{{currentWorkspace.name}}</h1>
      <small>{{currentWorkspace.url}}</small>
      <b-row>

        <b-col v-for="(node, i) in currentWorkspace.nodes" :key="i">
          <Node :node="node" @delete="deleteNode" @edit="editNode" />
        </b-col>

      </b-row>
    </div>
    <!-- {{ currentWorkspace}} -->

    <hr>


    <b-card-group columns v-if="friends_pods.length>0">
      <b-card
      v-for="fp in friends_pods" :key="fp.webId">
      <b-card-img-lazy
      v-if="fp.photo != null"
      :src="fp.photo"
      :alt="fp.photo"
      class="rounded-5"
      top
      />


      <b-card-title class="mt-3">
        {{fp.name}}
      </b-card-title>
      <b-card-header>
        <small>{{fp.webId}}</small>
      </b-card-header>
      <b-card-text>

        <!-- {{fp.neurones}} -->
        <NodeR v-for="(node, i) in fp.neurones" :key="i"
        :node="node" />


        <!-- {{fp.neurones}} -->
        <hr>
        neuroneStore {{fp.neuroneStore}}
        workspaces {{fp.workspaces}}
        <!-- This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer. -->
      </b-card-text>
      <b-card-footer v-if="fp.friends.length > 0">
        <small>
          <b-button>Explore {{fp.friends.length}} friends</b-button>
          <!-- <ul>
          <li v-for="f in fp.friends" :key="f.webId">
          {{f.webId}}
        </li>
      </ul> -->
    </small>
  </b-card-footer>
</b-card>
</b-card-group>


<!-- <b-row v-if="friends_pods.length>0">
<p v-for="fp in friends_pods" :key="fp.webId">
{{fp}}
</p>

</b-row> -->



</b-container>
</template>

<script>
export default {
  name: "Workspaces",
  components: {
    'Node': () => import('@/components/Node'),
    'NodeR': () => import('@/components/NodeR'),
  },
  data(){
    return{
      space : null,
      loading: 0,
      friends_pods: []
    }
  },
  methods: {
    add(){
      this.space = {name: ""}
    },
    save(){
      console.log(this.space)
      this.$store.dispatch('solid/addWorkspace', this.space)
      this.space = null
    },
    cancel(){
      this.space = null
    },
    use(s){
      console.log("use",s)
      this.$changeWorkspace(s)
    },
    editNode(node){
      console.log('edit', node.id);
      this.$store.commit('nodes/setCurrentNode', node)
      this.$router.push({ name: 'edit'});
    },
    deleteNode(n){
      console.log(n)
    },
    async exploreFriendsWorkspaces(){
      this.loading = this.pod.friends.length
      this.friends_pods = []
      for (const f of this.pod.friends){
        let p = await this.$getPodInfos(f)
        p.neurones = await this.$getNeurones(p.neuroneStore)
        this.friends_pods.push(p)
        this.loading --
      }
      this.loading == 0
      console.log(this.friends_pods)
    },
  },
  computed:{
    workspaces:{
      get () { return this.$store.state.solid.pod != null && this.$store.state.solid.pod.workspaces },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    currentWorkspace:{
      get () { return this.$store.state.nodes.currentWorkspace },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    pod:{
      get () { return this.$store.state.solid.pod },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    }
  }
}
</script>

<style>

</style>
