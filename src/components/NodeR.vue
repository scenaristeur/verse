<template>
  <div>
    <!-- {{node}} Lite <hr>
    {{liteNode}} -->
    <div v-if="loading !=null">{{Loading}}</div>
    <div v-if="neurone != null">
      <b-button variant="info" size="sm" @click="editNode" class="my-2 mr-2">{{neurone['ve:name']}}</b-button>
      <small>age: {{neurone['ve:age']}}</small><br>
      <ul v-if="neurone['ve:properties'].length > 0">
        <li v-for="p in neurone['ve:properties']" :key="p.name">
          {{p.name}} ({{p.values.length}})
        </li>

      </ul>
      <!--  {{neurone}}  -->
    </div>
    <!-- <b-button v-if="liteNode" size="sm" variant="info" @click="editNode">{{liteNode['ve:name']}}</b-button>
    <b-alert v-else show variant="warning">Oh oh, it seems that node with id {{node.id}} as been deleted :-(</b-alert> -->
  </div>
</template>

<script>
export default {
  name: "NodeR",
  props: ['url'],
  data(){
    return{
      neurone : null,
      loading: null
    }
  },
  created(){
    this.init()
  },
  methods:{
    async init(){
      console.log("NODER", this.url)
      this.loding = "loading"
      this.neurone = await this.$getNeurone(this.url)
      console.log("neurone",this.neurone)
      this.loading = null
      //this.content = await this.neurone.content
    },
    // editNode(){
    //   this.$store.commit('nodes/setCurrentNode', this.liteNode)
    //   this.$router.push({ name: 'edit'});
    // }

    editNode(){
      this.$store.commit('nodes/setCurrentNode', this.neurone)
      this.$router.push({ name: 'edit'});
    }
  },
  watch:{
    async url(){
      await this.init()
    }
  },
  computed: {
    // node() {
    //   return this.$getNeurone(this.url)
    // },
  }
}
</script>

<style>

</style>
