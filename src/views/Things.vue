<template>
  <div>
    <h2>{{modele}}</h2>
    <b-button variant="outline-primary" @click="addThing">Add {{modele}}</b-button>
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
  props: ['modele'],
  components: {
    'Thing': () => import('@/components/Thing'),
  },
  created() {
    this.$store.dispatch('getCats');
  },
  methods:{
    addThing(){
      this.$router.push({ name: 'edit', params: {modele: this.modele} });
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
