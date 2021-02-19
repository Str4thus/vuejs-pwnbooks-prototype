<template>
  <div class="notebook-list-item">
    <div v-on:click="toggleNotebook(notebook['id'])" class="notebook-title">
      <h2>{{ notebook.name }}</h2>
    </div>

    <div v-if="notebook.expanded" class="notebook-notes">
      <Note v-for="note in notebook.notes" :key="note" :note="note" />
    </div>
  </div>
</template>

<script>
import "@/scss/notebookList.scss";
import Note from "./Note";

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
  components: {
    Note,
  },
};
</script>
