<!-- https://code-farmer-i.github.io/vue-markdown-editor/ -->

<template>
  <split-pane
    v-on:resize="onResize"
    :default-percent="12"
    :min-percent="12"
    split="vertical"
  >
    <template slot="paneL">
      <BookList />
    </template>

    <template slot="paneR">
      <NoteEditor v-if="isNoteSelected" />
    </template>
  </split-pane>
</template>


<script>
import BookList from "../components/Books/BookList";
import NoteEditor from "../components/NoteEditor";

export default {
  methods: {
    onResize(newSize) {
      newSize; //console.log(newSize);
    },
  },
  computed: {
    isNoteSelected: {
      get() {
        let activeNote = this.$store.getters.activeNote;
        return activeNote !== undefined;
      },
    },
  },
  components: {
    BookList,
    NoteEditor,
  },
};
</script>
