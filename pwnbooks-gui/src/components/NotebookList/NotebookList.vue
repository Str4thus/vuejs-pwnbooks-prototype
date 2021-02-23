<!-- 


      @contextmenu.prevent.stop="handleBookClick($event, notebook.name)"
      
        @contextmenu.prevent.stop="handleNoteClick($event, note.label)"
-->
<template>
  <div class="notebook-list">
    <Notebook
      v-for="notebook in notebooks"
      :key="notebook.id"
      :notebook="notebook"
      :onrightclick="openBookCtx"
    >
      <Note
        v-for="note in getNotesForBook(notebook.id)"
        :key="note.id"
        :note="note"
        :onrightclick="openNoteCtx"
      />
    </Notebook>

    <vue-simple-context-menu
      :elementId="'bookCtxId'"
      :options="bookOptions"
      :ref="'bookCtx'"
      @option-clicked="bookOptionClicked"
    >
    </vue-simple-context-menu>

    <vue-simple-context-menu
      :elementId="'noteCtxId'"
      :options="noteOptions"
      :ref="'noteCtx'"
      @option-clicked="noteOptionClicked"
    >
    </vue-simple-context-menu>
  </div>
</template>

<script>
import "@/scss/notebookList.scss";
import Notebook from "./Notebook";
import Note from "./Note";

export default {
  name: "NotebookList",
  data() {
    return {
      bookOptions: [
        {
          name: "Add Book",
          slug: "add-book",
        },
        {
          name: "Add Note",
          slug: "add-note",
        },
        {
          type: "divider",
        },
        {
          name: "Rename",
          slug: "rename-book",
        },
        {
          name: "Delete",
          slug: "delete-book",
        },
      ],
      noteOptions: [
        {
          name: "Delete",
          slug: "delete-note",
        },
      ],
    };
  },
  methods: {
    getNotesForBook: function (bookId) {
      return this.$store.getters.getNotesByBookId(bookId);
    },
    openBookCtx: function (event, item) {
      this.$refs.bookCtx.showMenu(event, item);
    },
    openNoteCtx: function (event, item) {
      this.$refs.noteCtx.showMenu(event, item);
    },
    bookOptionClicked: function (event) {
      console.log(JSON.stringify(event));
    },
    noteOptionClicked: function (event) {
      console.log(JSON.stringify(event));
    },
  },
  computed: {
    notebooks() {
      return this.$store.getters.notebooks;
    },
  },
  components: {
    Notebook,
    Note,
  },
};
</script>
