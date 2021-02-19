<template>
  <div
    v-on:click="selectNote(note.id)"
    :class="['notebook-note', note.active ? 'active-note' : '']"
  >
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
  methods: {
    selectNote: function (id) {
      this.$store.dispatch("selectNote", id);
    },
  },
};
</script>
