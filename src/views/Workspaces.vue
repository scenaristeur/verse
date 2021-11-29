<template>
  <b-container>
    Workspaces
    <b-btn v-if="space == null" variant="outline-primary" size="sm" @click="add">+ add a workspace</b-btn>

    <b-row v-if="space != null">
      <b-form-input  v-model="space.name"  placeholder="workspace name" />
      <b-form-input  v-model="space.url"  placeholder="workspace url" />
      <b-button @click="cancel" variant="outline-warning">Cancel</b-button>
      <b-button @click="save" variant="outline-success">Add it</b-button>

    </b-row>

    <b-list-group>
      <b-list-group-item button @click="use()" variant="success">Default</b-list-group-item>
      <b-list-group-item v-for="s in workspaces" :key="s.url" button @click="use(s)">
        {{s.name}} / {{s.url}} ({{s.nodes != undefined ? s.nodes.length : "--"}})
      </b-list-group-item>

    </b-list-group>


{{ currentWorkspace}}

    <hr>
  </b-container>
</template>

<script>
export default {
  name: "Workspaces",
  data(){
    return{
      space : null
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
    }
  }
}
</script>

<style>

</style>
