<template>
  <div :class="showEditor ? 'note-editor-wrapper' : 'note-preview-wrapper'">
    <button @click="toggle" class="preview-toggle-button">
      Switch to {{ this.showEditor ? "preview" : "editor" }}
    </button>
    <v-md-editor
      v-if="showEditor"
      v-model="activeNoteContent"
      v-on:change="onChange"
      @upload-image="handleUploadImage"
      :codemirror-config="codemirrorConfig"
      :disabled-menus="[]"
      class="note-editor"
      left-toolbar="undo redo | h bold italic strikethrough quote | ul ol table hr | tip code | save"
      right-toolbar="fullscreen"
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
      let title = text.trim().substring(0, text.search("\n"));
      let startIndex = title.search(" ");
      title = startIndex >= 0 ? title.substring(startIndex + 1) : title;

      this.$store.dispatch("updateNoteTitle", title);
      this.$store.dispatch("updateNoteContent", text);
    },
    toggle() {
      this.showEditor = !this.showEditor;
    },
    handleUploadImage(_, insertImage, files) {
      console.log(files);

      insertImage({
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg",
      });
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
