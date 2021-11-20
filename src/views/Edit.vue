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

 <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <!-- <b-button-group size="sm" variant="outline-primary" class="mr-1">
    <b-button>Save</b-button>
    <b-button>Cancel</b-button>
    <b-button @click="fieldType = 'text'">Text</b-button>
    <b-button @click="fieldType = 'textarea'">TextArea</b-button>
    <b-button @click="fieldType = 'link'">Link</b-button>
  </b-button-group> -->
  <b-dropdown size="sm" class="mx-1" right text="+" variant="outline-primary">
     <b-dropdown-item @click="fieldType = 'text'">Text</b-dropdown-item>
     <b-dropdown-item @click="fieldType = 'textarea'">Textarea</b-dropdown-item>
     <b-dropdown-item @click="fieldType = 'node'">Node</b-dropdown-item>
     <b-dropdown-item @click="fieldType = 'link'">Link</b-dropdown-item>
   </b-dropdown>
 </b-button-toolbar>

 {{ p.values}}
{{fieldType}}
        <!-- <b-form-input id="name" v-model="node.name" required /> -->
      </b-col>
    </b-row>

    <b-row v-if="field != null" class="mt-3">
      <b-col sm="3">
        <b-form-input @change="fieldNameChanged" v-model="field.name" required placeholder="property name" />
      </b-col>
      <b-col sm="9">
        <b-button variant="outline-secondary" size="sm" @click="clear_field">X</b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
      </b-col>
      <b-col>
        <b-btn variant="outline-primary" size="sm" @click="add">+ add property or link</b-btn>
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
      clearing: false,
      fieldType: null
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
      this.field = {name: ""}
    },
    fieldNameChanged(field_name){
      console.log(field_name)
      if(this.clearing == false){
        let p = {name: field_name, values: []}
        this.node.properties == undefined ? this.node.properties = [] : ""
        var index = this.node.properties.findIndex(x => x.name==p.name);
        index === -1 ? this.node.properties.push(p) : alert(p.name+" already exist")
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
