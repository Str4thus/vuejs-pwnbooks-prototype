<template>
  <div class="notebook-note">
    <h3>{{ note.label }}</h3>
  </div>
</template>

<script>
import "@/scss/notebookList.scss";

export default {
  name: "Note",
  props: {
    note: Object,
    default: () => {},
  },
};
</script>
