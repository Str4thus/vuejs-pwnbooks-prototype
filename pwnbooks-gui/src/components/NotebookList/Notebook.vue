<template>
  <div class="notebook-list-item">
    <div v-on:click="toggleNotebook(notebook['id'])" class="notebook-title">
      <h2>{{ notebook.name }}</h2>
    </div>

    <div v-if="notebook.expanded" class="notebook-notes">
      <Note
        v-for="note in getNotesForBook(notebook.id)"
        :key="note"
        :note="note"
      />
    </div>
  </div>
</template>

<script>
import "@/scss/notebookList.scss";
import Note from "./Note";

export default {
  name: "Notebook",
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
    getNotesForBook: function (bookId) {
      return this.$store.getters.getNotesByBookId(bookId);
    },
  },
  components: {
    Note,
  },
};
</script>
