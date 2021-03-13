<template>
  <div class="book">
    <div
      v-if="book.projectId == project.id"
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
      <div v-show="book.expanded && book.projectId == project.id" class="book-notes">
        <slot v-if="numberOfNotes > 0"></slot>
        <p v-else class="empty-book-text" center>
          No notes for {{ book["name"] }}
        </p>
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
    project: Object,
    book: Object,
    onrightclick: Function,
  },
  methods: {
    toggleBook: function (id) {
      this.$store.dispatch("toggleBook", id);
    },
  },
  computed: {
    numberOfNotes: {
      get() {
        return this.$store.getters.getNotesByBookId(this.book.id).length;
      },
    },
  },
  components: {
    CollapseTransition,
  },
};
</script>
