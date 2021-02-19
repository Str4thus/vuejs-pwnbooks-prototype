<template>
  <div class="note-editor-wrapper">
    <v-md-editor
      class="note-editor"
      left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save tip"
      v-model="activeNoteContent"
      v-on:change="onChange"
      :codemirror-config="codemirrorConfig"
    ></v-md-editor>
  </div>
</template>

<!--
Create own anchors: https://code-farmer-i.github.io/vue-markdown-editor/senior/anchor.html
-->

<script>
import "../scss/noteEditor.scss";

export default {
  data() {
    return {
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
    onChange(text, html) {
      html;
      this.$store.dispatch("updateNoteContent", text);
    },
  },
  computed: {
    activeNoteContent: function () {
      let activeNote = this.$store.getters.activeNote;
      if (activeNote == undefined) {
        return "";
      }

      return activeNote.content;
    },
  },
};
</script>
