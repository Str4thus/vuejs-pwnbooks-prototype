<template>
  <div class="note-editor-wrapper">
    <v-md-editor
      class="note-editor"
      v-model="text"
      left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save tip"
      :codemirror-config="codemirrorConfig"
    ></v-md-editor>
  </div>
</template>

<script>
import "../scss/noteEditor.scss";

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
};
</script>
