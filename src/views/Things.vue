<template>
  <div>
    <h2>{{thing}}</h2>
    <b-button variant="outline-primary" @click="addThing">Add {{thing}}</b-button>
    <b-row>
      <b-col v-for="(cat, i) in cats" :key="i">
        <Thing :cat="cat" @delete="deleteCat" @edit="editCat" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Things",
  props: ['thing'],
  components: {
    'Thing': () => import('@/components/Thing'),
  },
  created() {
    this.$store.dispatch('getCats');
  },
  methods:{
    addThing(){
      this.$router.push({ name: 'edit', thing: this.thing });
    },
    async deleteCat(cat) {
      console.log('delete', cat.id);
      await this.$store.dispatch('deleteCat', cat);
      this.$store.dispatch('getCats');
    },
    editCat(cat) {
      console.log('edit', cat.id);
      this.$router.push({ name: 'edit', params: {cat: cat} });
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
