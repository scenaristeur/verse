<template>
  <div>
    <h2>{{thing}}</h2>
    {{cats}}
    <b-button @click="addThing">Add {{thing}}</b-button>

    <hr>
  </div>
</template>

<script>
export default {
  name: "Things",
  props: ['thing'],
  created() {
    this.$store.dispatch('getCats');
  },
  methods:{
    addThing(){
      this.$router.push({ name: 'edit', thing: this.thing });
    }
  },
  computed: {
    cats() {
      return this.$store.state.cats;
    }
  },

}
</script>

<style>

</style>
