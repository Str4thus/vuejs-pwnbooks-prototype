<template>
  <div
    v-on:click="selectNote(note.id)"
    :class="['notebook-note', note.active ? 'active-note' : '']"
    @contextmenu.prevent.stop="onrightclick($event, note.id)"
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
    onrightclick: Function,
  },
  methods: {
    selectNote: function (id) {
      this.$store.dispatch("selectNote", id);
    },
  },
};
</script>
