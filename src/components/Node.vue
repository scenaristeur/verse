<template>
  <b-card>
    <b-card-title>{{node['ve:name']}}</b-card-title>
    <!-- <b-card-header>

  </b-card-header> -->
  <b-card-text>
    {{node['ve:age']}}
  </b-card-text>

  <b-button size="sm" variant="danger" @click="$emit('delete',node)">Delete</b-button>
  <b-button size="sm" @click="$emit('edit',node)">Edit</b-button>

  <b-card-footer>
      <!-- {{node['ve:properties']}} -->

    <!-- {{new Date(node['ve:synchronized'])}} -->
    <!--[[dendrites- watch]]{{node.modele}}[[axione - send]]-->
  </b-card-footer>
  <Properties :node="node" />
  </b-card>
</template>

<!-- title="Card Title"
img-src="https://picsum.photos/600/300/?image=25"
img-alt="Image"
img-top
tag="article"
style="max-width: 20rem;"
class="mb-2" -->
<script>
export default {
  name: "Node",
  props: ['node'],
  components: {
    'Properties': () => import('@/components/Properties'),
  },
}
</script>

<style>

</style>
