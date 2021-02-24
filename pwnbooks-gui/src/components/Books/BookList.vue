<template>
  <div class="book-list">
    <div id="book-list-header-section">
      <h2 class="book-list-header">Books <i class="add-icon fa fa-plus-square pull-right" @click="addBook"> </i></h2>
    </div>

    <Book
      v-for="book in books"
      :key="book.id"
      :book="book"
      :onrightclick="openBookCtx"
    >
      <Note
        v-for="note in getNotesForBook(book.id)"
        :key="note.id"
        :note="note"
        :onrightclick="openNoteCtx"
      />
    </Book>

    <vue-simple-context-menu
      :elementId="'bookCtxId'"
      :options="bookOptions"
      :ref="'bookCtx'"
      @option-clicked="optionClicked"
    >
    </vue-simple-context-menu>

    <vue-simple-context-menu
      :elementId="'noteCtxId'"
      :options="noteOptions"
      :ref="'noteCtx'"
      @option-clicked="optionClicked"
    >
    </vue-simple-context-menu>

    <v-dialog />
    <AddBookModal />
  </div>
</template>

<script>
import "@/scss/bookList.scss";
import "@/scss/modals.scss";

import Book from "./Book";
import Note from "./Note";
import AddBookModal from "../modals/AddBookModal";

export default {
  name: "BookList",
  data() {
    return {
      bookOptions: [
        {
          name: "Add Note",
          slug: "note-add",
        },
        {
          type: "divider",
        },
        {
          name: "Rename",
          slug: "book-rename",
        },
        {
          name: "Delete",
          slug: "book-delete",
        },
      ],
      noteOptions: [
        {
          name: "Delete",
          slug: "note-delete",
        },
      ],
    };
  },
  methods: {
    getNotesForBook: function (bookId) {
      return this.$store.getters.getNotesByBookId(bookId);
    },

    openBookCtx: function (event, book) {
      this.$refs.bookCtx.showMenu(event, book);
    },
    openNoteCtx: function (event, note) {
      this.$refs.noteCtx.showMenu(event, note);
    },
    optionClicked: function (event) {
      switch (event.option.slug) {
        case "book-add":
          this.addBook(event.item);
          break;
        case "book-rename":
          this.renameBook(event.item);
          break;
        case "book-delete":
          this.deleteBook(event.item);
          break;
        case "note-add":
          this.addNote(event.item);
          break;
        case "note-delete":
          this.deleteNote(event.item);
          break;
        default:
          console.log("Unknown option clicked!");
          break;
      }
    },

    addBook: function () {
      this.$modal.show("add-book-modal");
      console.log("addBook");
    },
    addNote: function (note) {
      console.log("addNote", note);
    },
    renameBook: function (book) {
      console.log("renameBook", book);
    },
    deleteBook: function (book) {
      this.$modal.show("dialog", {
        title: "Delete Book: '" + book.name + "'",
        text:
          "Are you sure you want to delete '" +
          book.name +
          "' and all its notes? <br><br> <b> (Cannot be restored) </b>",
        buttons: [
          {
            title: "Confirm",
            class: "vue-dialog-button positive-button",
            handler: () => {
              this.$store.dispatch("deleteBook", book.id);
              this.$modal.hide("dialog");
            },
          },
          {
            title: "Cancel",
            class: "vue-dialog-button neutral-button",
            handler: () => {
              this.$modal.hide("dialog");
            },
          },
        ],
      });
    },
    deleteNote: function (note) {
      this.$modal.show("dialog", {
        title: "Delete Note: '" + note.label + "'",
        text:
          "Are you sure you want to delete '" +
          note.label +
          "'<br><br> <b> (Cannot be restored) </b>",
        buttons: [
          {
            title: "Confirm",
            handler: () => {
              // dispatch to store
              this.$modal.hide("dialog");
            },
          },
          {
            title: "Cancel",
            handler: () => {
              this.$modal.hide("dialog");
            },
          },
        ],
      });
    },
  },
  computed: {
    books() {
      return this.$store.getters.books;
    },
  },
  components: {
    Book,
    Note,
    AddBookModal,
  },
};
</script>