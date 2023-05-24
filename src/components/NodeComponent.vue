<template>
  <b-card>
    <b-card-title>{{node['ve:name']}}</b-card-title>
    <b-button size="sm" variant="danger" @click="$emit('delete',node)">Delete</b-button>
    <b-button size="sm" @click="$emit('edit',node)">Edit</b-button>
    <a :href="'https://scenaristeur.github.io/verse?source='+node['ve:url']" target="_blank">
      <b-button size="sm" variant="outline-primary">
      <b-icon icon="share-fill" aria-label="Share"></b-icon>
    </b-button>
    </a>
      {{node['ve:age']}}
    <!-- <b-card-header>

  </b-card-header> -->
  <!-- <b-card-text>


  </b-card-text> -->




  <!-- <b-card-footer>

    [[dendrites- watch]]{{node.modele}}[[axione - send]]
  </b-card-footer> -->
  <PropertiesComponent :node="node" />
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
  name: "NodeComponent",
  props: ['node'],
  components: {
    'PropertiesComponent': () => import('@/components/PropertiesComponent'),
  },
}
</script>

<style>

</style>
