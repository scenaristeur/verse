<template>
  <div>
    <b-button  variant="success" class="m-3"
    @click="node['ve:type'] = node['ve:type'] == undefined || node['ve:type'] == 'html' ? 'node' : 'html'">
    {{node['ve:type'] == 'node' ? "Switch to Html Edition" : "Switch to Node Edition"}}


  </b-button>
    <b-container v-if="node['ve:type'] == 'node'">

      <b-row>
        <b-col sm="3">
          <label for="name">Name:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="name" v-model="node['ve:name']" autocomplete="off" autofocus />
        </b-col>
        <b-col sm="3">
          <label for="age"><code>Age</code>:</label>
        </b-col>
        <b-col>
          <b-form-input
          id="age"
          v-model="node['ve:age']"
          required type="number"  />
        </b-col>
      </b-row>


      <b-row v-for="p in node['ve:properties']" :key="p.name">
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

      <Values :values="p.values" />

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
      <b-btn variant="outline-primary" size="sm" @click="add">+ add a property or a link</b-btn>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <!-- <b-button  :variant="node['ve:privacy'] == 'public' ? 'warning' : 'outline-success'"
      @click="node['ve:privacy'] = node['ve:privacy'] == undefined || node['ve:privacy'] == 'public' ? 'private' : 'public'">
      {{node['ve:privacy']}}</b-button> -->

      <b-btn variant="success" @click="save">Save Node</b-btn>
      <Permissions
      :permissions="permissions"
      :url="node['ve:url']"
      :autorized="autorized" />
    </b-col>
  </b-row>

  <b-modal id="fieldModal" size="xl" :title="node['ve:name']+' -> '+currentProp.name">
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
        v-model="link.name"
        placeholder="name"
        />
        <b-form-input
        v-model="link.href"
        placeholder="link"
        @change="addNewLink"/>
      </b-tab>
      <!-- <b-tab title="tiny" @click="fieldType = 'tiny'">

      <editor

      v-model="tinycontent"
      :init="{
      height: 500,
      menubar: false,
      plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
      ],
      toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
    }"
    />
  </b-tab> -->
</b-tabs>
</b-modal>

</b-container>
<b-container v-else>

  <!-- <Quasar /> -->
  <CKWysiwyg />
</b-container>
</div>
</template>

<script>
// import Editor from '@tinymce/tinymce-vue'

export default {
  name: "Edit",
  components: {
    'NodeSelector': () => import('@/components/NodeSelector'),
    // 'NodeLite': () => import('@/components/NodeLite'),
    'Values': () => import('@/components/Values'),
    'Permissions': () => import('@/components/layout/Permissions'),
    // 'Quasar': () => import('@/views/Quasar'),
    'CKWysiwyg': () => import('@/views/CKWysiwyg'),
    // 'editor': Editor
  },
  data() {
    return {
      node:null,
      field : null,
      clearing: false,
      fieldType: "text",
      show: false,
      currentProp: {},
      newvalue: null,
      link: {},
      // privacy: "private",
      permissions: null
      // tinycontent: ""
    }
  },
  async created() {
    this.node = this.$store.state.nodes.currentNode ||
    {  "@context": {
      "@vocab": "https://www.w3.org/ns/activitystreams#",
      "ve": "https://scenaristeur.github.io/verse#",
      "id": "@id",
      "type": "@type"
    },
    "ve:name":"",
    "ve:age": 0 ,
    "ve:privacy": "private",
    "ve:type": "node",
    "ve:properties": [],
    test: "test vocab"}
    console.log("--- hack temporaire du type", this.node['ve:type'])
    this.node['ve:type'] != 'html' ? this.node['ve:type'] = 'node' : ''
    await this.getPermissions()
    // if(this.$route.params.node) {
    //   this.node = this.$route.params.node;
    // } else {
    //   this.node = { name:'', age: 0 , properties: []};
    // }

  },
  methods: {
    async save() {
      await this.$store.dispatch('nodes/saveNode', this.node);
      this.$store.commit('nodes/setCurrentNode', null)
      this.$router.push('/');
    },
    add(){
      this.field = {name: ""}
    },
    fieldNameChanged(field_name){
      console.log(field_name)
      if(this.clearing == false){
        let p = {name: field_name, values: []}
        this.node['ve:properties'] == undefined ? this.node['ve:properties'] = [] : ""
        var index = this.node['ve:properties'].findIndex(x => x.name==p.name);
        index === -1 ? this.node['ve:properties'].push(p) : alert(p.name+" already exist")
      }
    },
    clear_field(){
      this.clearing = true
      this.field = null
      this.clearing = false
    },
    showFieldModal(p){
      console.log(p)
      this.fieldType= "text"
      this.currentProp = p
      this.$bvModal.show("fieldModal")
    },
    addNewValue(){
      let val = {value: this.newvalue,  type: this.fieldType}
      this.currentProp.values.push(val)
      this.newvalue = null
    },
    addNewLink(){
      //console.log(this.link)
      let val = {value: this.link,  type: this.fieldType}
      this.currentProp.values.push(val)
      this.link = {}
    },
    async getPermissions(){
      this.permissions = this.node['ve:url'] != undefined ? await this.$getPermissions(this.node) : null
      console.log("PERMISSIONS", this.permissions)
    }

    // tinyChanged(e,editor){
    //   console.log(e, editor)
    // }
  },
  watch:{
    currentNode(){
      console.log("CURRENT NODE Changed")
      this.getPermissions()
    }
    // tinycontent(){
    //   console.log(this.tinycontent)
    // }
  },
  computed: {
    currentNode() {
      return this.$store.state.nodes.currentNode
    },
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
};
</script>
