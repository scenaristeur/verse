<template>
  <div>
    <h2>{{modele}}</h2>
    <b-button variant="outline-primary" @click="addThing">Add {{modele}}</b-button>
    <b-row>
      <div v-for="(cat, i) in cats" :key="i">
      <b-col v-if="cat.modele == modele">
        <Thing :cat="cat" @delete="deleteCat" @edit="editCat" />
      </b-col>
    </div>
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
    this.$store.dispatch('cats/getCats');
  },
  methods:{
    addThing(){
      this.$router.push({ name: 'edit', params: {modele: this.modele} });
    },
    async deleteCat(cat) {
      console.log('delete', cat.url);
      await this.$store.dispatch('cats/deleteCat', cat);
      this.$store.dispatch('cats/getCats');
    },
    editCat(cat) {
      console.log('edit', cat.url);
      this.$router.push({ name: 'edit', params: {cat: cat} });
    }
  },
  computed: {
    cats() {
      return this.$store.state.cats.cats;
    }
  },

}
</script>

<style>

</style>
