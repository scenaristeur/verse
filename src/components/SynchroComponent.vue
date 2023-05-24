<template>
  <div v-if="pod != null">
    <b-button @click="synchronize">sync</b-button>
    <!-- {{cats}}
    <hr>
    {{verses}} -->

    <b-table striped hover small sticky-header :items="cats"></b-table>
    <b-button @click="rmlocalDB" size="sm" variant="danger">DANGER : RM LOCAL DB</b-button>
  </div>
</template>

<script>
export default {
  name: "SynchroComponent",
  methods:{
    async synchronize(){
      await this.$synchronise(this.cats)
    },
    async rmlocalDB(){
      await this.$store.dispatch('cats/rmlocalDB')
    }
  },
  // watch:{
  //   cats(){
  //     this.synchronize()
  //   },
  //   pod(){
  //     this.synchronize()
  //   }
  // },
  computed:{
    verses:{
      get () { return this.$store.state.cats.verses },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    cats:{
      get () { return this.$store.state.cats.cats },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    pod:{
      get () { return this.$store.state.solid.pod },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
