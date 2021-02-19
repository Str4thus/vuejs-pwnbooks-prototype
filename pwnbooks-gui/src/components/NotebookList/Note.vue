<template>
  <div class="note">
    <h4>{{ note.label }}</h4>
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
