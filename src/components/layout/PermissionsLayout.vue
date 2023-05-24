<template>
  <b-alert :show="url != undefined && autorized ==false && pod != null" variant="warning" class="mt-2">
    You have no explicit 'append/write' permission, to
    <a :href="url" target="_blank"> URL </a><br>

    <b-row>
      <b-col v-for="(p, name) of permissions" :key="name">
        <b>{{name}}</b>:
        <span v-for="(val, type) of p" :key="type"
        :class="val == true ? 'bg-success text-white' : 'bg-danger text-white'">
        {{type}} </span>

      </b-col>
    </b-row>
    "Save Node" will fork this node on your pod.
  </b-alert>
</template>

<script>
export default {
  name: "PermissionsLayout",
  props: ['permissions', 'url', 'autorized'],
  computed: {
    pod() {
      return this.$store.state.solid.pod
    },
  }
}
</script>
