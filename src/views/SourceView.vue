<template>

  <b-container v-if="source != null">
    <h1>{{source['ve:name']}}</h1>
    <a :href="'https://scenaristeur.github.io/verse?source='+source['ve:url']" target="_blank"><b-button size="sm" variant="outline-primary">
      <b-icon icon="share-fill" aria-label="Share"></b-icon>
    </b-button>
  </a>
  <div> Age: {{source['ve:age']}} || url: <a :href="source['ve:url']" target="_blank">url</a></div>

  <PropertiesComponent :node="source" />


  <br>
  <b-button @click='hide'>
    <b-icon icon="eye-slash-fill" aria-label="Share"></b-icon>
    </b-button>
    <hr>
    <!-- {{source}} -->
  </b-container>
</template>

<script>
export default {
  name: "SourceView",
  components: {
    'PropertiesComponent': () => import('@/components/PropertiesComponent'),
  },
  methods:{
    hide(){
      this.$store.commit("nodes/setSource", null)
    }
  },
  computed:{
    source:{
      get () { return this.$store.state.nodes.source },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    }
  }
}
</script>

<style>

</style>
