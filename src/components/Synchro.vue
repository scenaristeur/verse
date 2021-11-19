<template>
  <div v-if="pod != null">
    <b-button @click="synchronize">sync</b-button>
    <!-- {{cats}}
    <hr>
    {{verses}} -->

    <b-table striped hover :items="cats"></b-table>
    <b-button @click="rmAll" variant="danger">DANGER : clean all local</b-button>
  </div>
</template>

<script>
export default {
  name: "Synchro",
  methods:{
    async synchronize(){
      await this.$synchronise(this.cats)
    },
    async rmAll(){
      for (const c of this.cats){
        await this.$store.dispatch('cats/deleteCat', c)
      }
      this.synchronize()
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
