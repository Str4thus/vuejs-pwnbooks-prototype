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
      let titleEndIndex = text.search("\n");
      let title = text.trim();
      title = titleEndIndex >= 0 ? title.substring(0, titleEndIndex) : title;

      let titleStartIndex = title.search(" ");
      title = titleStartIndex >= 0 ? title.substring(titleStartIndex + 1) : title;

      this.$store.dispatch("updateNoteTitle", title);
      this.$store.dispatch("updateNoteContent", text);
    },
    toggle() {
      this.showEditor = !this.showEditor;
    },
    handleUploadImage(_, insertImage, files) {
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => console.log(reader.result);

      // TODO send image to the server and get the url to pass it in 'insertImage'

      insertImage({
        url: "<insert image url here>",
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
