<template>
  <modal
    name="add-book-modal"
    :classes="['modal', 'add-book-modal']"
    height="auto"
    :adaptive="true"
    @before-close="beforeClose"
  >
    <div class="add-book-modal-content">
      <h1>Add a new book!</h1>
      <input v-model="bookTitle" placeholder="Book Title" />
      <button @click="createBook">Create</button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "AddBookModal",
  data() {
    return {
      bookTitle: "",
      tryToCreate: false,
    };
  },
  methods: {
    createBook: function () {
      this.tryToCreate = true;
      this.$store.dispatch("addBook", this.bookTitle.trim());
      this.$modal.hide("add-book-modal");
    },
    beforeClose(event) {
      if (this.tryToCreate && this.bookTitle.trim() == "") {
        this.tryToCreate = false;
        event.cancel();
      }

      this.bookTitle = "";
    },
  },
};
</script>