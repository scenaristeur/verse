<template>
  <div class="accordion" role="tablist">
   <b-card v-for="p in node['ve:properties']" :key="p.name" no-body class="mb-1">
     <b-card-header header-tag="header" class="p-1" role="tab">
       <b-button block @click="$root.$emit('bv::toggle::collapse', p.name)" variant="info">{{p.name}}</b-button>
     </b-card-header>
     <b-collapse :id="p.name" visible accordion="my-accordion" role="tabpanel">
       <!-- <b-card-body> -->
             <Values :values="p.values" />
         <!-- <b-card-text v-for="v in p.values" :key="v">{{v}}</b-card-text> -->
       <!-- </b-card-body> -->
     </b-collapse>
   </b-card>
<!--
   <b-card no-body class="mb-1">
     <b-card-header header-tag="header" class="p-1" role="tab">
       <b-button block v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
     </b-card-header>
     <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
       <b-card-body>
         <b-card-text>{{ text }}</b-card-text>
       </b-card-body>
     </b-collapse>
   </b-card>

   <b-card no-body class="mb-1">
     <b-card-header header-tag="header" class="p-1" role="tab">
       <b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
     </b-card-header>
     <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
       <b-card-body>
         <b-card-text>{{ text }}</b-card-text>
       </b-card-body>
     </b-collapse>
   </b-card> -->
 </div>
</template>

<script>
export default {
name: "Properties",
props: ['node'],
components: {
  'Values': () => import('@/components/Values'),
},
data() {
  return {
    text: `
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry

    `
  }
}
}
</script>

<style>

</style>
