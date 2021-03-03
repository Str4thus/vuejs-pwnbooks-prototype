<template>
  <modal
    name="add-note-modal"
    :classes="['modal', 'add-note-modal']"
    height="auto"
    :adaptive="true"
    @before-close="beforeClose"
    @before-open="beforeOpen"
  >
    <div class="add-note-modal-content">
      <h1>Add a new note!</h1>
      <input v-model="noteTitle" placeholder="Note Title" />
      <button @click="createNote">Create</button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "AddNoteModal",
  data() {
    return {
      noteTitle: "",
      tryToCreate: false,
    };
  },
  methods: {
    createNote: function () {
      this.tryToCreate = true;
      this.$store.dispatch("addNote", {
        title: this.noteTitle.trim(),
        bookId: this.book.id,
      });
      this.$modal.hide("add-note-modal");
    },
    beforeOpen(event) {
      this.book = event.params.book;
    },
    beforeClose(event) {
      if (this.tryToCreate && this.noteTitle.trim() == "") {
        this.tryToCreate = false;
        event.cancel();
      }

      this.noteTitle = "";
    },
  },
};
</script>