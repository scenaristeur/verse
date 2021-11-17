<template>
  <div>
    <h2>{{thing}}</h2>
    <b-button @click="addThing">Add {{thing}}</b-button>

    <hr>
  </div>
</template>

<script>
export default {
  name: "Things",
  props: ['thing'],
  methods:{
    addThing(){
      this.$router.push({ name: 'edit', thing: this.thing });
    }
  }
}
</script>

<style>

</style>
