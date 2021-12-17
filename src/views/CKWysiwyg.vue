<template>
  <div>
    <div v-if="storage != false">
      <!-- {{storage}} -->
      <b-breadcrumb>
        <!-- <b-breadcrumb-item href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Home
      </b-breadcrumb-item> -->
      <b-breadcrumb-item
      v-for="p in path" :key="p.text"
      @click="changePath(p)">{{p.text}}</b-breadcrumb-item>
      <!-- <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item> -->


      <div v-if="addingFile">
        <b-form-input  v-model="filename" placeholder="filename.ext"></b-form-input>
        <b-button variant="primary" size="sm" @click="addFile">create</b-button>
        <b-button variant="primary" size="sm" @click="addingFile = false">cancel</b-button>
      </div>
      <div v-else>

        <b-form-select v-model="selected" :options="options">
        </b-form-select>
        <b-button variant="primary" size="sm" @click="addingFile = true">+</b-button>
      </div>
    </b-breadcrumb>

    <div v-if="selected != null" >Share your <b><a :href="selected.url" target="_blank">{{selected.text}}</a></b> page.</div>
      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @blur="savedata"></ckeditor>
    <!-- {{editorContent}} -->
  </div>
  <div v-else>
    Please login to update files on your pod
  </div>
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
      editorData: '<p>Select a file or create a new one with "+".</p>',
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
    console.log("sto", this.storage)
    if (this.storage != false){
      this.path = [
        {text: "Home",
        url: this.storage,
        type: "folder"}
      ]
      this.updateOptions(this.storage)
    }
  },
  methods:{
    async savedata(){
      console.log(this.editorData)
      console.log(this.selected)
      let file = {name: this.selected.text, url : this.selected.url}
      file.content = `
      <html>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      `
      file.content += this.editorData
      let fileSaved = await this.$updateFile(file)
      console.log(fileSaved)
    },
    async addFile(){
      console.log(this.filename)
      let path = []
      Object.assign(path, this.path)
      let last = {}
      while (last.type == undefined || last.type != "folder"){
        last = path.pop()
      }
      console.log(last)
      this.addingFile = false
      let file = {name: this.filename, path: last.url,
        content: "<h1>"+this.filename+
        "</h1><br><small>created : "+Date.now()+
        "<p>CLiCk HERE to mAgiC-eDiT</p>"+
        "</small><p>this page has been made with the <a href='https://scenaristeur.github.io/verse'>verse app&nbsp;</a></p>"}
      let fileSaved = await this.$updateFile(file)
      console.log(fileSaved)

      let opt = {text: this.filename, type: "file", url: last.url+this.filename}
      this.selected = opt

    },
    changePath(p){
      let index = this.path.findIndex(b => b.url == p.url)
      this.path = this.path.slice(0, index+1);
      this.updateOptions(p.url)
    },
    async updateOptions(root){
      let children = await this.$getChildren(root)
      //  console.log(children)

      this.options =  children.map(c => {
        let child = {}
        let parts = c.split('/')
        //  console.log(parts)
        if(c.endsWith('/')){
          let text = parts[parts.length - 2]+"...";
          child.value = {type:'folder', url:c, text: text}
          child.html= "📁"+text
        }else{
          child.text = parts[parts.length - 1];
          child.value = {type: "file", url:c, text: child.text}
        }

        return child

      })
      //  console.log(this.options)
      //  console.log(this.path)
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
        //  this.editorData = content
      }

    },
    editorData(){
      console.log(this.editorData)
    },
    storage(){
      if (this.storage != false){
        this.path = [
          {text: "Home",
          url: this.storage,
          type: "folder"}
        ]
        this.updateOptions(this.storage)
      }

    },
    editorContent(){
      this.editorData = this.editorContent
    }
  },
  computed: {
    storage() {
      return this.$store.state.solid.pod != null && this.$store.state.solid.pod.storage
    },
    editorContent() {
      return this.$store.state.nodes.editorContent
    },
  }

}
</script>

<style>

</style>
