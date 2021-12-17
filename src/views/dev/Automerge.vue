<template>
  <div>
    Test Automerge
    node: {{ node}}
    <hr>
    <b-button @click="from">From</b-button>
    <b-button @click="history">History</b-button>
    <b-button @click="change">Change</b-button>
    <b-button @click="history2">History 2</b-button>
    <b-button @click="save">Save</b-button>
    <b-button @click="load">Load</b-button>
    <b-button @click="getChanges"> Get Changes</b-button>
        <b-button @click="applyChanges"> apply Changes</b-button>
    result: {{result}}
  </div>
</template>

<script>
import * as Automerge from 'automerge'
export default {
  name: "Automerge",
  props: ['node'],
  data(){
    return {
      result: null
    }
  },
  methods:{
    async from(){
      this.doc1 = await Automerge.from(this.node)
      console.log("doc1", this.doc1)

    },
    async history(){
      let state = await Automerge.getHistory(this.doc1)
      console.log(state, /*state.change.message, state.snapshot*/)
      for(const s of state){
        console.log(s.change.message, s.snapshot)
      }
    },
    async change(){
      this.newDoc = Automerge.change(this.doc1, 'add date', doc => {

        doc.bidule = Date.now()
      })
      console.log("newDoc", this.newDoc)
    },
    async history2(){
      let state = await Automerge.getHistory(this.newDoc)
      console.log(state, /*state.change.message, state.snapshot*/)
      for(const s of state){
        console.log(s.change.message, s.snapshot)
      }
    },
    async save(){
      this.id1 = await Automerge.getActorId(this.newDoc)
      this.saved = await Automerge.save(this.newDoc)
      console.log(this.id1, this.saved)
    },
    async load(){
      this.loaded = await Automerge.load(this.saved)
      console.log("loaded", this.loaded)
    },
    async getChanges(){
      this.changes = await Automerge.getChanges(this.newDoc, this.loaded)
      console.log(this.changes)
    },
    async applyChanges(){
      let [afterDoc, patch] = Automerge.applyChanges(this.newDoc, this.changes)
      console.log("after", afterDoc, patch)
    }
  }
}
</script>

<style>

</style>
