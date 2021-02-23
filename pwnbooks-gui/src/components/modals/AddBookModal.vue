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
    };
  },
  methods: {
    createBook: function () {
      console.log(this.bookTitle);
      this.$modal.hide("add-book-modal");
    },
    beforeClose(event) {
      if (this.bookTitle.trim() == "") {
        event.cancel();
      }
    },
  },
};
</script>