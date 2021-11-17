<template>
  <b-card>
    <b-card-title>{{cat.name}}</b-card-title>
    <b-card-header>
    age: {{cat.age}} - {{cat.modele}}
  </b-card-header>
    <b-card-text>
      {{cat.content}}
    </b-card-text>

    <b-button size="sm" variant="danger" @click="$emit('delete',cat)">Delete</b-button>
    <b-button size="sm" @click="$emit('edit',cat)">Edit</b-button>

    <b-card-footer>{{cat.modele}}</b-card-footer>
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
  name: "Thing",
  props: ['cat'],
}
</script>

<style>

</style>
