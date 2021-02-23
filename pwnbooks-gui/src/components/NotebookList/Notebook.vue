<template>
  <div class="notebook-list-item">
    <div
      v-on:click="toggleNotebook(notebook['id'])"
      class="notebook-title"
      @contextmenu.prevent.stop="onrightclick($event, notebook.id)"
    >
      <h2>{{ notebook.name }}</h2>
    </div>

    <div v-if="notebook.expanded" class="notebook-notes">
        <slot></slot>
    </div>
</template>

<script>
import "@/scss/notebookList.scss";

export default {
  name: "Notebook",
  props: {
    notebook: Object,
    onrightclick: Function,
  },
  methods: {
    toggleNotebook: function (id) {
      this.$store.dispatch("toggleNotebook", id);
    },
  },
};
</script>
