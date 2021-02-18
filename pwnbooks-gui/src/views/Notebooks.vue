<!-- https://code-farmer-i.github.io/vue-markdown-editor/ -->

<template>
  <split-pane
    v-on:resize="onResize"
    :default-percent="10"
    :min-percent="10"
    split="vertical"
  >
    <template slot="paneL">
      <NotebookList />
    </template>

    <template slot="paneR">
      <v-md-editor
        class="pwnbook-editor"
        v-model="text"
        left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save tip"
        :codemirror-config="codemirrorConfig"
      ></v-md-editor>
    </template>
  </split-pane>
  <!-- Toggle preview-only and use the preview component <v-md-preview :text="text"></v-md-preview> -->
</template>


<script>
import NotebookList from "../components/NotebookList/NotebookList";

export default {
  data() {
    return {
      text: "",
      codemirrorConfig: {
        lineNumbers: false,
        styleActiveLine: true,
        scrollbarStyle: "overlay",
        mode: "markdown",
        lineWrapping: "wrap",
      },
    };
  },
  methods: {
    onResize(newSize) {
      newSize; //console.log(newSize);
    },
  },
  components: {
    NotebookList,
  },
};
</script>


<style lang="scss">
.pwnbook-editor {
  height: 100%;
}

.CodeMirror {
  background-color: $background-light;
}
</style>