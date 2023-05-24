<template>
  <b-container>
    <h3>Synchro</h3>
    pod storage : {{pod.storage}}<br>
    <b-row>
      <b-col sm="3">
        <label for="neuroneStore"><code>Neurone storage</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="neuroneStore" v-model="pod.neuroneStore" type="text"></b-form-input>
      </b-col>
    </b-row>
    <b-button @click="synchronize" size="sm" variant="success">Get remote Neurones</b-button>

    {{nodes}}
    <hr>
    <!-- {{remoteNodes}} -->

    <!-- <Login />  -->

  </b-container>
</template>

<script>
export default {
  name: "SynchroView",
  // components: {
  //   'Login': () => import('@/components/Login'),
  //   // 'Synchro': () => import('@/components/Synchro'),
  // },
  methods:{
    synchronize(){
          this.$synchronize()
    }
  },
    computed:{
    pod:{
      get () { return this.$store.state.solid.pod },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    nodes:{
      get () { return this.$store.state.nodes.nodes },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    // remoteNodes:{
    //   get () { return this.$store.state.nodes.nodes },
    //   set (/*value*/) { /*this.updateTodo(value)*/ }
    // }
  }
}
</script>

<style>

</style>
