<template>
  <b-card>
    <b-card-title>{{node.name}}</b-card-title>
    <!-- <b-card-header>

  </b-card-header> -->
    <b-card-text>
      {{node.age}}
    </b-card-text>

    <b-button size="sm" variant="danger" @click="$emit('delete',node)">Delete</b-button>
    <b-button size="sm" @click="$emit('edit',node)">Edit</b-button>

    <!-- <b-card-footer>[[dendrites- watch]]{{node.modele}}[[axione - send]]</b-card-footer> -->
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
}
</script>

<style>

</style>
