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


    <b-row v-for="p in node.properties" :key="p.name">
      <b-col sm="3">
        <label for="name">{{p.name}}</label>
      </b-col>
      <b-col sm="9">
        {{ p.values}}
        <!-- <b-form-input id="name" v-model="node.name" required /> -->
      </b-col>

    </b-row>



    <b-row v-if="field != null">
      <b-col sm="3">
        <b-form-input @change="fieldNameChanged" v-model="field.name" required placeholder="field name" />
      </b-col>
      <b-col sm="9">
        <b-button variant="outline-secondary" size="sm" @click="clear_field">X</b-button>
        <!-- <b-form-input id='value' v-model="field.value" required placeholder="value"/> -->
      </b-col>
    </b-row>

    <b-row>
      <b-col>
      </b-col>
      <b-col>
        <!-- <b-btn variant="outline-primary" size="sm" @click="addProperty">Add property</b-btn> -->
        <b-btn variant="outline-primary" size="sm" @click="add">+</b-btn>
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
      node:null,
      field : null,
      clearing: false
    }
  },
  created() {
    if(this.$route.params.node) {
      this.node = this.$route.params.node;
    } else {
      this.node = { name:'', age: 0 , properties: []};
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch('nodes/saveNode', this.node);
      this.$router.push('/');
    },
    add(){
      console.log("add")
      this.field = {name: "property", value:"val"}
    },
    fieldNameChanged(field_name){
      console.log(field_name)
      if(this.clearing == false){
        let p = {name: field_name, values: []}
        this.node.properties.push(p)/* == undefined ? this.node.properties[field_name] = [] : alert(field_name+" already exist")*/
        console.log(this.node)

      }
    },
    clear_field(){
      this.clearing = true
      this.field = null
      this.clearing = false
    }

  }
};
</script>
