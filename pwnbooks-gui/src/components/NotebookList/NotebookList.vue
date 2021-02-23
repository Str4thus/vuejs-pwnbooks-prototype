<template>
  <div class="notebook-list">
    <Notebook
      v-for="notebook in notebooks"
      :key="notebook"
      :notebook="notebook"
    />
  </div>
</template>

<script>
import "@/scss/notebookList.scss";
import Notebook from "./Notebook";

export default {
  name: "NotebookList",
  computed: {
    notebooks() {
      return this.$store.getters.notebooks;
    },
  },
  components: {
    Notebook,
  },
};
</script>
