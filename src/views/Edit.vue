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
        <label for="name"><code>{{p.name}}</code>:</label>
      </b-col>
      <b-col sm="9">

        <!-- <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-dropdown size="sm" class="mx-1" right text="+" variant="outline-primary">
        <b-dropdown-item @click="fieldType = 'text'">Text</b-dropdown-item>
        <b-dropdown-item @click="fieldType = 'textarea'">Textarea</b-dropdown-item>
        <b-dropdown-item @click="fieldType = 'node'">Node</b-dropdown-item>
        <b-dropdown-item @click="fieldType = 'link'">Link</b-dropdown-item>
      </b-dropdown>

    </b-button-toolbar> -->
    <b-button @click="showFieldModal(p)" variant="outline-primary">+</b-button>
    <!-- {{ p.values}} -->
    <b-list-group>
      <b-list-group-item v-for="(v,i) in p.values" :key="i">
        <span v-if="v.type == 'text'">{{v.value}}</span>
        <div v-else-if="v.type == 'textarea'">
          <pre>{{v.value}}</pre>
        </div>
        <NodeLite v-else-if="v.type == 'node'" :node="v" />
        <div v-else>{{v}}</div>

      </b-list-group-item>
    </b-list-group>

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

<b-modal id="fieldModal" size="xl" :title="node.name+' -> '+currentProp.name">
  <!-- {{ currentProp}} -->
  <b-tabs content-class="mt-3">
    <b-tab title="text" active @click="fieldType = 'text'">
      <b-form-input
      v-model="newvalue"
      placeholder="new value"
      @change="addNewValue"/>
    </b-tab>
    <b-tab title="textarea" @click="fieldType = 'textarea'">
      <b-form-textarea
      v-model="newvalue"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
      @change="addNewValue"
      ></b-form-textarea>
    </b-tab>
    <b-tab title="node" @click="fieldType = 'node'">
      <NodeSelector :currentProp.sync="currentProp"/>
    </b-tab>
    <b-tab title="link" @click="fieldType = 'link'">
      <b-form-input
      v-model="newvalue"
      placeholder="new link todo"
      @change="addNewValue"/>
    </b-tab>
    <b-tab title="markdown" disabled @click="fieldType = 'markdown'">
      <b-form-textarea
      id="textarea"
      v-model="newvalue"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
      @change="addNewValue"
      ></b-form-textarea>
    </b-tab>
  </b-tabs>
</b-modal>

</b-container>
</template>

<script>

export default {
  name: "Edit",
  components: {
    'NodeSelector': () => import('@/components/NodeSelector'),
    'NodeLite': () => import('@/components/NodeLite'),
  },
  data() {
    return {
      node:null,
      field : null,
      clearing: false,
      fieldType: "text",
      show: false,
      currentProp: {},
      newvalue: null
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
    },
    showFieldModal(p){
      console.log(p)
      this.currentProp = p
      this.$bvModal.show("fieldModal")
    },
    addNewValue(){
      let val = {value: this.newvalue,  type: this.fieldType}
      this.currentProp.values.push(val)
      this.newvalue = ""
    }
  },
};
</script>
