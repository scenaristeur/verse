<template>
  <b-container v-if="pod!=null" >
    <b-row class="my-3">
    <h4>Collaboration & Fork on other Workspaces</h4>
      <b-btn v-if="space == null" variant="outline-primary" size="sm" @click="add" class="mx-2">+ add a workspace</b-btn>
      <b-button variant="outline-primary" size="sm" @click="exploreFriendsWorkspaces(pod.friends)" class="mx-2">
        explore {{pod.friends.length}} friends</b-button>
        <span v-if="loading > 0" class="mx-2">Loading : {{loading}}</span>
      </b-row>


      <b-row v-if="space != null">
        <b-form-input v-model="space.name" placeholder="workspace name" autofocus />
        <b-form-input v-model="space.url" placeholder="workspace url" />
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
        class="mb-3"
        rounded="circle"
        top
        />


        <b-card-title >
          {{fp.name}}

          <b-button
          v-if="fp.neurones != undefined && fp.neurones.length > 0"
          size="sm"
          variant="outline-success"
          @click="add(fp)">
          follow
        </b-button>

        </b-card-title>

        <small><a :href="fp.webId" target="_blank">{{fp.webId.split('/')[2]}}</a></small>


        <b-card-text v-if="fp.neurones == undefined || fp.neurones.length == 0 || fp.workspaces == undefined || fp.workspaces.length == 0">
          {{fp.name}} has no 'Neurone',
          <b-button
          onclick="alert('invitations are not implemented yet, see source link at the bottom to contribute ;-)')"
          size="sm" variant="outline-dark"
          >invite him/her/it to use 'Verse'</b-button>
          <br>or add
          <a href="https://spoggy-test5.solidcommunity.net/profile/card#me" target="_blank">
            Spoggy-test5</a>
            to your friends
          </b-card-text>

        <b-button
        v-if="fp.friends != undefined && fp.friends.length > 0"
        size="sm"
        variant="outline-success"
        @click="exploreFriendsWorkspaces(fp.friends)">
        explore {{fp.friends.length}} friends
      </b-button>

      <b-card-header v-if="(fp.neurones != undefined && fp.neurones.length > 0) || (fp.workspaces != undefined && fp.workspaces.length > 0)">



      <!-- {{fp.neurones}} -->
      <NodeR v-for="(url, i) in fp.neurones" :key="i"
      :url="url" />


      <!-- {{fp.neurones}} -->
      <hr>
      <!-- neuroneStore {{fp.neuroneStore}} -->
      workspaces {{fp.workspaces}}
      <!-- This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer. -->
    </b-card-header>


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
    add(ws){
      // this.space = {}
      if (ws == undefined){
        this.space = {name: "", url: ""}
      }else{
        this.space = {name: ws.name, url: ws.neuroneStore}
      }
      // this.$refs.spaceName.focus()
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
    async exploreFriendsWorkspaces(friends){
      this.loading = friends.length
      this.friends_pods = []
      for (const f of friends){
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
