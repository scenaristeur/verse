<template>
  <div>
    {{storage}}
    <b-breadcrumb>
      <!-- <b-breadcrumb-item href="#home">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      Home
    </b-breadcrumb-item> -->
    <b-breadcrumb-item
    v-for="p in path" :key="p.text"
    @click="changePath(p)">{{p.text}}</b-breadcrumb-item>
    <!-- <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item> -->

  </b-breadcrumb>
  <div v-if="addingFile">
    <b-form-input  v-model="filename" placeholder="filename.ext"></b-form-input>
    <b-button variant="primary" size="sm" @click="addFile">create</b-button>
    <b-button variant="primary" size="sm" @click="addingFile = false">cancel</b-button>
  </div>
  <div v-else>
    <b-button variant="primary" size="sm" @click="addingFile = true">+</b-button>
    <b-form-select v-model="selected" :options="options"></b-form-select>
  </div>
  <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>

  {{editorContent}}
</div>
</template>

<script>
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

export default {
  name: "CKWysiwyg",
  // components: {
  //            // Use the <ckeditor> component in this view.
  //            ckeditor: ClassicEditor.component
  //        },
  data() {
    return {
      editor: InlineEditor, //ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      },
      selected: null,
      path: null,
      options: [],
      addingFile: false,
      filename: ""
      // path: [
      //   {
      //     text: 'Admin',
      //     href: '#'
      //   },
      //   {
      //     text: 'Manage',
      //     href: '#'
      //   },
      //   {
      //     text: 'Library',
      //     active: true
      //   }
      // ]
    };
  },
  created(){
    this.path = [
      {text: "Home",
      url: this.storage,
      type: "folder"}
    ]
    this.updateOptions(this.storage)
  },
  methods:{
    addFile(){
      console.log(this.filename)
      let last = this.path.pop()
      console.log(last)
      this.addingFile = false
    },
    changePath(p){
      let index = this.path.findIndex(b => b.url == p.url)
      this.path = this.path.slice(0, index+1);
      this.updateOptions(p.url)
    },
    async updateOptions(root){
      let children = await this.$getChildren(root)
      console.log(children)

      this.options =  children.map(c => {
        let child = {}
        let parts = c.split('/')
        console.log(parts)
        if(c.endsWith('/')){
          child.text = parts[parts.length - 2]+"...";
          child.value = {type:'folder', url:c, text: child.text}
        }else{
          child.text = parts[parts.length - 1];
          child.value = {type: "file", url:c, text: child.text}
        }

        return child

      })
      console.log(this.options)
      console.log(this.path)
    },
  },
  watch:{
    async selected(){
      console.log("selected", this.selected)
      this.path.push(this.selected)
      if (this.selected.type == 'folder'){
        this.options = []
        this.updateOptions(this.selected.url)
      }else{
        let content = await this.$getContent(this.selected.url)
        console.log(content)
      }

    },
    editorData(){
      console.log(this.editorData)
    },
    storage(){
      this.path = [
        {text: "Home",
        url: this.storage,
        type: "folder"}
      ]
      this.updateOptions(this.storage)
    },
    editorContent(){
      this.editorData = this.editorContent
    }
  },
  computed: {
    storage() {
      return this.$store.state.solid.pod.storage
    },
    editorContent() {
      return this.$store.state.nodes.editorContent
    },
  }

}
</script>

<style>

</style>
