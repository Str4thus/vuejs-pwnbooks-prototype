<template>
  <modal
    name="rename-book-modal"
    :classes="['modal', 'rename-book-modal']"
    height="auto"
    :adaptive="true"
    @before-close="beforeClose"
    @before-open="beforeOpen"
  >
    <div class="rename-book-modal-content">
      <h1>Rename a book!</h1>
      <input v-model="bookTitle" placeholder="Book Title" />
      <button @click="renameBook">Rename</button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "RenameBookModal",
  data() {
    return {
      bookTitle: "",
      tryToRename: false,
    };
  },
  methods: {
    renameBook: function () {
      this.tryToRename = true;
      this.$store.dispatch("renameBook", {
        bookId: this.book.id,
        newName: this.bookTitle.trim(),
      });
      this.$modal.hide("rename-book-modal");
    },
    beforeOpen(event) {
      this.book = event.params.book;
    },
    beforeClose(event) {
      if (this.tryToRename && this.bookTitle.trim() == "") {
        this.tryToRename = false;
        event.cancel();
      }

      this.bookTitle = "";
    },
  },
};
</script>