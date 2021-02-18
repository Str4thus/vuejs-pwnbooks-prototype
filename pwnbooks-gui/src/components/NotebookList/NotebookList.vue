<template>
  <div class="notebook-list">
    <NotebookListItem
      v-for="notebook in notebooks"
      :key="notebook"
      :notebook="notebook"
    />
  </div>
</template>

<script>
import "@/scss/notebookList.scss";
import NotebookListItem from "./NotebookListItem";

export default {
  name: "NotebookList",
  computed: {
    notebooks() {
      return this.$store.getters.notebooks;
    },
  },
  components: {
    NotebookListItem,
  },
};
</script>
