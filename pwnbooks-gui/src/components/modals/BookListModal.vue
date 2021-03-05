<template>
  <modal
    name="booklist-modal"
    :classes="['modal', 'booklist-modal']"
    height="auto"
    :adaptive="true"
    @before-open="beforeOpen"
    @before-close="beforeClose"
  >
    <div class="booklist-modal-content">
      <h1 class="booklist-modal-title">{{ titleText }}</h1>
      <input class="booklist-modal-input" v-model="inputValue" :placeholder="placeholderText" />
      <button class="booklist-modal-commit-button" @click="commit">Create</button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "BookListModal",
  data() {
    return {
      inputValue: "",
      userCommited: false,

      type: null,
      book: null,
    };
  },
  computed: {
    placeholderText: {
      get() {
        if (this.type == "addBook") return "Book Title";
        if (this.type == "addNote") return "Note Title";
        if (this.type == "renameBook") return "New Title";

        return "";
      },
    },
    titleText: {
      get() {
        if (this.type == "addBook") return "Add a new Book";
        if (this.type == "addNote") return "Add a new Note";
        if (this.type == "renameBook") return "Rename '" + this.book.name + "'";

        return "";
      },
    },
    buttonText: {
      get() {
        if (this.type == "addBook" || this.type == "addNote") return "Add";
        if (this.type == "renameBook") return "Rename";

        return "";
      },
    },
  },
  methods: {
    commit() {
      this.userCommited = true;
      this.$modal.hide("booklist-modal");
    },
    isInputValid() {
      return this.inputValue !== "";
    },
    beforeOpen(event) {
      this.type = event.params.type;
      this.book = event.params.book || null;

      this.inputValue = "";

      if (this.type == "renameBook") {
        this.inputValue = this.book.name;
      }
    },
    beforeClose(event) {
      this.inputValue = this.inputValue.trim();

      if (!this.userCommited) return;

      if (!this.isInputValid()) {
        this.userCommited = false;
        return event.cancel();
      }

      switch (this.type) {
        case "renameBook": {
          this.$store.dispatch("renameBook", {
            bookId: this.book.id,
            newName: this.inputValue,
          });
          break;
        }

        case "addBook":
          this.$store.dispatch("addBook", this.inputValue);
          break;

        case "addNote": {
          let newNote = {
            title: this.inputValue,
            bookId: this.book.id,
          };

          this.$store.dispatch("addNote", newNote);
          break;
        }

        default:
          console.error("Invalid type!");
          break;
      }
    },
  },
};
</script>