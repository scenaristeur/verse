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
    <b-row v-if="friends_pods.length>0">
      <p v-for="fp in friends_pods" :key="fp.webId">
        {{fp}}
      </p>

    </b-row>



  </b-container>
</template>

<script>
export default {
  name: "Workspaces",
  components: {
    'Node': () => import('@/components/Node'),
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
        this.friends_pods.push(p)
        this.loading --
      }
      this.loading == 0
      console.log(this.friends_pods)
    }
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
