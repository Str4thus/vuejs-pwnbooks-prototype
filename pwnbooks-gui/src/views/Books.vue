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
      <NoteEditor />
    </template>
  </split-pane>
  <!-- Toggle preview-only and use the preview component <v-md-preview :text="text"></v-md-preview> -->
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
  components: {
    BookList,
    NoteEditor,
  },
};
</script>
