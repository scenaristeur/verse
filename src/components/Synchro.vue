<template>
  <div v-if="pod != null">
    <b-button @click="synchronize">sync</b-button>
    {{cats}}
    <hr>
    {{verses}}

    <b-table striped hover :items="cats"></b-table>
  </div>
</template>

<script>
export default {
  name: "Synchro",
  methods:{
    synchronize(){
      this.$synchronise(this.cats)
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
