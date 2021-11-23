<template>
  <b-container fluid id="app">

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

<b-row>
      <span v-if="isOnline"><Login /></span>
      <span v-if="isOffline" variant="danger">offline</span>
</b-row>
    <!-- </div> -->
    <router-view/>
    <br><br>
    <hr>

    {{session}}
    <br>
    <hr>
    <br>
    <small><i>0.0.4 - filter / order</i></small> |
    <small><a href="https://github.com/scenaristeur/verse" target="_blank">source</a></small>
    <!-- <Synchro /> -->
  </b-container>
</template>
<script>
export default {
  name: "Notes",
  components: {
    'Login': () => import('@/components/Login'),
    // 'Synchro': () => import('@/components/Synchro'),
  },
  created(){
    this.$checkSession()
    // this.$store.dispatch('cats/getCats');

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
