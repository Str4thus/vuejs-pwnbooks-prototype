<template>
  <div class="notebook-list-item">
    <h3>{{ Label }}</h3>
  </div>
</template>

<script>
import "@/scss/notebookList.scss";

export default {
  name: "NotebookListItem",
  props: {
    label: String,
  },
};
</script>
