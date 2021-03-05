<template>
  <div class="book">
    <div
      v-on:click="toggleBook(book['id'])"
      class="book-title"
      @contextmenu.prevent.stop="onrightclick($event, book)"
    >
      <h3>
        <i
          :class="['fa', book.expanded ? 'fa-caret-down' : 'fa-caret-right']"
          aria-hidden="true"
        >
        </i>
        {{ book.name }}
      </h3>
    </div>

    <collapse-transition>
      <div v-show="book.expanded" class="book-notes">
        <slot></slot>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import { CollapseTransition } from "@ivanv/vue-collapse-transition";
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
  components: {
    CollapseTransition,
  },
};
</script>
