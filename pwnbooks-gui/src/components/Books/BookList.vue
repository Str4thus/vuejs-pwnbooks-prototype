<template>
  <div class="book-list">
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
  </div>
</template>

<script>
import "@/scss/bookList.scss";
import Book from "./Book";
import Note from "./Note";

export default {
  name: "BookList",
  data() {
    return {
      bookOptions: [
        {
          name: "Add Book",
          slug: "book-add",
        },
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

    addBook: function (book) {
      console.log("addBook", book);
    },
    renameBook: function (book) {
      console.log("renameBook", book);
    },
    deleteBook: function (book) {
      this.$modal.show("dialog", {
        title: "Delete Book '" + book.name + "'",
        text:
          "Are you sure you want to delete " +
          book.name +
          " and all its notes? <br><br> <b> (Cannot be restored) </b>",
        buttons: [
          {
            title: "Confirm",
            handler: () => {
              this.$store.dispatch("deleteBook", book.id);
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
    addNote: function (note) {
      console.log("addNote", note);
    },
    deleteNote: function (note) {
      console.log("deleteNote", note);
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
  },
};
</script>