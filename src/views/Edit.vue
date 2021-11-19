<template>
  <div>
    Edit {{modele}}
    <b-container fluid>
      <b-row class="my-1" v-for="f in fields" :key="f.label">
        <b-col sm="3">
          <label :for="`field-${f.label}`"><code>{{ f.label }}</code>:</label>
        </b-col>
        <b-col sm="9">
          <div v-if="f.type=='select'">
            <span v-for="r in cat[f.label]" :key="r.url">{{r.name}} </span>
            <b-button v-b-toggle="`collapse-${f.label}`" variant="primary">+</b-button>
            <b-collapse :id="`collapse-${f.label}`" class="mt-2">
              <b-card>
                <b-form-select
                @change="add(`${f.label}`)"
                v-model="selected"
                :options="f.options || options"
                >
              </b-form-select>
            </b-card>
          </b-collapse>
        </div>

        <b-form-textarea
        v-else-if="f.type=='textarea'"
        id="textarea"
        v-model="cat[f.label]"
        placeholder="..."
        rows="3"
        max-rows="6"
        ></b-form-textarea>
        <b-form-input v-else v-model="cat[f.label]" :id="`field-${f.label}`" :type="f.type"></b-form-input>
      </b-col>
    </b-row>
    <b-button @click="save">Save</b-button>
    <!-- {{ cats}}
    <hr>
    {{ options}} -->
  </b-container>
</div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      cat:null,
      selected: null,
      fields: [
        {'label': 'name', type: 'text'},
        {'label': 'content', type: 'text'},
        {'label': 'age', type: 'number'},
        {'label': 'property', type: 'select', options: ["one", "two"]},
        {'label': 'link', type: 'select'},
        {'label': 'watch', type: 'select'},
        {'label': 'send', type: 'select'},
        {'label': 'action', type: 'textarea'},
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
      ],

    }
  },
  created() {
    console.log("params",this.$route.params.modele)
    this.modele = this.$route.params.modele
    console.log("route",this.$route)
    if(this.$route.params.cat) {
      this.cat = this.$route.params.cat;
      this.modele = this.cat.modele
    } else {
      this.cat = { };
    }
  },
  methods: {
    add(field){
      console.log(typeof this.cat[field], field, this.selected)
      this.cat[field] ==  undefined ? this.cat[field] = [] : ""
      //
      // if (this.cat[field])){
      //   let new_array = []
      //   new_array.push(this.cat[field])
      //   this.cat[field] = new_array
      // }
      // console.log(this.cat)
      this.selected != null ? this.cat[field].push(this.selected) : ""
    },
    async save() {
      console.log(this.cat)
      this.cat.modele = this.modele
      this.cat.updated = Date.now()
      await this.$store.dispatch('cats/saveCat', this.cat);
      console.log('back');
      this.$router.go(-1);
    }
  },
  computed: {
    cats() {
      return this.$store.state.cats.cats;
    },
    options() {
      let opts = this.$store.state.cats.cats.map(c => {return{value: {url:c.url, name:c.name}, text: c.name+" ("+c.modele+")"}})
      return opts;
    }
  },
}
</script>

<style>

</style>
