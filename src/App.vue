<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/notes">Notes</router-link> |
      <router-link to="/persons">Personnes</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <Login />
    </div>
    <router-view/>
    <small><i>0.0.1 - modele</i></small>
  </div>
</template>
<script>
export default {
  name: "Notes",
  components: {
    'Login': () => import('@/components/Login'),
  },
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
