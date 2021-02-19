<template>
  <div class="note-editor-wrapper">
    <v-md-editor
      class="note-editor"
      v-model="activeNoteContent"
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
