<template>
  <div>
    Edit
    <b-container fluid>
      <b-row class="my-1" v-for="f in fields" :key="f.label">
        <b-col sm="3">
          <label :for="`field-${f.label}`"><code>{{ f.label }}</code>:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="cat[f.label]" :id="`field-${f.label}`" :type="f.type"></b-form-input>
        </b-col>
      </b-row>
      <b-button @click="save">Save</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      cat:null,
      fields: [
        {'label': 'name', type: 'text'},
        {'label': 'content', type: 'text'},
        {'label': 'age', type: 'number'}
        // 'text',
        // 'number',
        // 'email',
        // 'password',
        // 'search',
        // 'url',
        // 'tel',
        // 'date',
        // 'time',
        // 'range',
        // 'color'
      ]
    }
  },
  created() {
    console.log("params",this.$route.params)
    console.log("route",this.$route)
    if(this.$route.params.cat) {
      this.cat = this.$route.params.cat;
    } else {
      this.cat = { name:'', age: 0 };
    }
  },
  methods: {
    async save() {
      console.log(this.cat)
      await this.$store.dispatch('saveCat', this.cat);
      console.log('back');
      this.$router.go(-1);
    }
  }
}
</script>

<style>

</style>
