<template>
  <v-md-editor
    class="pwnbook-editor"
    v-model="text"
    left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save tip"
    :codemirror-config="codemirrorConfig"
  ></v-md-editor>

  <!-- Toggle preview-only and use the preview component <v-md-preview :text="text"></v-md-preview> -->
</template>


<script>
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
};
</script>

<style>
.pwnbook-editor {
  height: 100%;
}
</style>