<template>
  <div :class="showEditor ? 'note-editor-wrapper' : 'note-preview-wrapper'">
    <button @click="toggle" class="preview-toggle-button">
      Switch to {{ this.showEditor ? "preview" : "editor" }}
    </button>
    <v-md-editor
      v-if="showEditor"
      class="note-editor"
      left-toolbar="undo redo | h bold italic strikethrough quote | ul ol table hr | tip code | save"
      right-toolbar="fullscreen"
      v-model="activeNoteContent"
      v-on:change="onChange"
      :codemirror-config="codemirrorConfig"
    ></v-md-editor>
    <v-md-preview v-else :text="activeNoteContent"></v-md-preview>
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
      showEditor: true,
    };
  },
  methods: {
    onChange(text) {

      let title = text.trim();
      let startIndex = title.search(" ");
      title = startIndex >= 0 ? title.substring(startIndex + 1) : title;
      
      this.$store.dispatch("updateNoteTitle", title);
      this.$store.dispatch("updateNoteContent", text);
    },
    toggle() {
      this.showEditor = !this.showEditor;
    },
  },
  computed: {
    activeNoteContent() {
      let activeNote = this.$store.getters.activeNote;
      if (activeNote == undefined) {
        return "";
      }

      return activeNote.content;
    },
  },
};
</script>
