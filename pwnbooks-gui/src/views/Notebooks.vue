<!-- https://code-farmer-i.github.io/vue-markdown-editor/ -->

<template>
  <split-pane
    v-on:resize="onResize"
    :default-percent="12"
    :min-percent="12"
    split="vertical"
  >
    <template slot="paneL">
      <NotebookList />
    </template>

    <template slot="paneR">
      <NoteEditor />
    </template>
  </split-pane>
  <!-- Toggle preview-only and use the preview component <v-md-preview :text="text"></v-md-preview> -->
</template>


<script>
import NotebookList from "../components/NotebookList/NotebookList";
import NoteEditor from "../components/NoteEditor";

export default {
  methods: {
    onResize(newSize) {
      newSize; //console.log(newSize);
    },
  },
  components: {
    NotebookList,
    NoteEditor,
  },
};
</script>
