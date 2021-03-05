<template>
  <div
    v-if="note.bookId == book.id"
    v-on:click="selectNote(note.id)"
    :class="['book-note', note.active ? 'active-note' : '']"
    @contextmenu.prevent.stop="onrightclick($event, note)"
  >
    <h4>{{ note.title }}</h4>
  </div>
</template>

<script>
import "@/scss/bookList.scss";

export default {
  name: "Note",
  props: {
    book: Object,
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
