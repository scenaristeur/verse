<template>
      <b-container>
        <b-row>
          <b-col sm="3">
            <label for="name">Name:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input id="name" v-model="node.name" required />
          </b-col>
          <b-col sm="3">
            <label for="age"><code>Age</code>:</label>
          </b-col>
          <b-col>
            <b-form-input
            id="age"
             v-model="node.age"
              required type="number"  />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-btn variant="success" @click="save">Save Node</b-btn>
          </b-col>
        </b-row>
      </b-container>
</template>

<script>

export default {
  name: "Edit",
  data() {
    return {
      node:null
    }
  },
  created() {
    if(this.$route.params.node) {
      this.node = this.$route.params.node;
    } else {
      this.node = { name:'', age: 0 };
    }
  },
  methods: {
    async save() { console.log(this.node)
      await this.$store.dispatch('nodes/saveNode', this.node);
      console.log('back');
      this.$router.push('/');
    }
  }
};
</script>
