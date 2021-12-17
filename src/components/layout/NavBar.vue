<template>
  <b-navbar toggleable="lg" type="dark" variant="info">

    <router-link to="/" custom v-slot="{ navigate }">
      <b-navbar-brand @click="navigate" @keypress.enter="navigate" role="link">Verse</b-navbar-brand>
    </router-link>
    <span v-if="isOnline"><Login /></span>
    <span v-if="isOffline" variant="danger">offline</span>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/config" custom v-slot="{ navigate }">
          <b-nav-item @click="navigate" @keypress.enter="navigate" role="link">Config</b-nav-item>
        </router-link>

        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  components: {
    'Login': () => import('@/components/Login'),
  },
}
</script>

<style>

</style>
