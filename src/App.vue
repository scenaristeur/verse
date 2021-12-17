<template>
  <div id="app">
    <NavBar />
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">H0m€</router-link> |
    <router-link to="/sync">$y^c</router-link> | -->
    <!--      <router-link to="/about">About</router-link> | -->
    <!-- <router-link to="/nodes">Nodes</router-link> | -->
    <!-- <router-link to="/notes">Notes</router-link> |
    <router-link to="/persons">Personnes</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/groups">Groups</router-link> |
    <router-link to="/agents">Agents</router-link> |
    <router-link to="/spaces">Spaces</router-link> |
    <router-link to="/schemas">Schemas</router-link> -->
    <Source />
    <!-- </div> -->
    <router-view/>
    <br><br>
    <hr>

    {{session}}
    <br>
    <hr>
    <br>
    <small><i>0.0.10 - permissions et html </i></small> |
    <small><a href="https://github.com/scenaristeur/verse" target="_blank">source</a></small>
    <!-- <Synchro /> -->
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
    'Source': () => import('@/views/Source'),
    'NavBar': () => import('@/components/layout/NavBar'),
  },
  created(){

    // not compatible with route.query this.$checkSession()

  },
  mounted(){

  },
  watch:{
    $route(){
      //  console.log(this.$route, to, from)
      if(this.$route.query.source != undefined && this.$route.query.source.length >0){
        this.$processSource(this.$route.query)
      }else{
        this.$store.commit('nodes/setSource', null)
        this.$checkSession()
      }
    }
  },
  computed:{
    session:{
      get () { return this.$store.state.solid.session },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
