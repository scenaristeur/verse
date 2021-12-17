<template>
  <b-alert :show="url != undefined && autorized ==false" variant="warning" class="mt-2">
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
  name: "Permissions",
  props: ['permissions', 'url'],
  computed: {
    autorized() {
      if(this.permissions == null){
        return false
      }else{
        return this.permissions.user.append == true ||
        this.permissions.user.write == true ||
        this.permissions.public.append == true ||
        this.permissions.public.write == true
      }
    },
  }
}
</script>
