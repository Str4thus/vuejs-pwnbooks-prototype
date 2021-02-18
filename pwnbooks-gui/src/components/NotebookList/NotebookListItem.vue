<template>
  <div class="notebook-list-item">
    <div class="notebook-title">
      <h2 v-on:click="toggleNotebook(notebook['id'])">
        {{ notebook.name }} {{ notebook.id }}
      </h2>
    </div>

    <div v-if="notebook.expanded" class="notebook-notes">
      <p v-for="note in notebook.notes" :key="note">{{ note }}</p>
    </div>
  </div>
</template>

<script>
import "@/scss/notebookList.scss";

export default {
  name: "NotebookListItem",
  props: {
    notebook: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    toggleNotebook: function (id) {
      this.$store.dispatch("toggleNotebook", id);
    },
  },
};
</script>
