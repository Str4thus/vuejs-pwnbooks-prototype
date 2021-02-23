<template>
  <div class="book">
    <div
      v-on:click="toggleBook(book['id'])"
      class="book-title"
      @contextmenu.prevent.stop="onrightclick($event, book.id)"
    >
      <h2>{{ book.name }}</h2>
    </div>

    <div v-if="book.expanded" class="book-notes">
        <slot></slot>
    </div>
</template>

<script>
import "@/scss/bookList.scss";

export default {
  name: "Book",
  props: {
    book: Object,
    onrightclick: Function,
  },
  methods: {
    toggleBook: function (id) {
      this.$store.dispatch("toggleBook", id);
    },
  },
};
</script>
