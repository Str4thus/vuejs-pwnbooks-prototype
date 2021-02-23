<template>
  <div
    v-on:click="selectNote(note.id)"
    :class="['book-note', note.active ? 'active-note' : '']"
    @contextmenu.prevent.stop="onrightclick($event, note)"
  >
    <h3>{{ note.label }}</h3>
  </div>
</template>

<script>
import "@/scss/bookList.scss";

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
