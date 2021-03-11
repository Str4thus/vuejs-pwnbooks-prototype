<template>
  <modal
    name="project-modal"
    :classes="['modal', 'project-modal']"
    height="auto"
    :adaptive="true"
    @before-open="beforeOpen"
    @before-close="beforeClose"
    @opened="onOpen"
  >
    <div class="project-modal-content">
      <h1 class="project-modal-title">{{ titleText }}</h1>
      <input
        ref="nameInput"
        class="project-name-input"
        v-model="titleValue"
        v-on:keyup.enter="commit"
        placeholder="Project Title"
      />
      <input
        ref="modalinput"
        class="project-description-input"
        v-model="descriptionValue"
        v-on:keyup.enter="commit"
        placeholder="Description"
      />
      <button class="project-modal-commit-button" @click="commit">
        {{ buttonText }}
      </button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "ProjectModal",
  data() {
    return {
      titleValue: "",
      descriptionValue: "",
      colorValue: "",
      userCommited: false,

      type: null,
      project: null,
    };
  },
  computed: {
    placeholderText: {
      get() {
        if (this.type == "createProject") return "Project Title";
        return "";
      },
    },
    titleText: {
      get() {
        if (this.type == "createProject") return "Create a new Project";
        if (this.type == "editProject")
          return "Edit '" + this.project.title + "'";

        return "";
      },
    },
    buttonText: {
      get() {
        if (this.type == "createProject") return "Create";
        if (this.type == "editProject") return "Edit";

        return "";
      },
    },
  },
  methods: {
    commit() {
      this.userCommited = true;
      this.$modal.hide("project-modal");
    },
    isInputValid() {
      return this.titleValue !== "" && this.descriptionValue !== "";
    },
    onOpen() {
      this.$refs.nameInput.focus();
    },
    beforeOpen(event) {
      this.type = event.params.type;
      this.project = event.params.project || null;

      this.titleValue = "";
      this.descriptionValue = "";
      this.colorValue = "#333";

      if (this.type == "editProject") {
        this.titleValue = this.project.title;
        this.descriptionValue = this.project.description;
        this.colorValue = this.project.color;
      }
    },
    beforeClose(event) {
      this.titleValue = this.titleValue.trim();
      this.descriptionValue = this.descriptionValue.trim();

      if (!this.userCommited) return;

      if (!this.isInputValid()) {
        this.userCommited = false;
        return event.cancel();
      }

      let project = {
        title: this.titleValue,
        description: this.descriptionValue,
        color: this.colorValue,
      };
      switch (this.type) {
        case "createProject": {
          this.$store.dispatch("createProject", project);
          break;
        }

        case "editProject": {
          project = { id: this.project.id, ...project };
          this.$store.dispatch("editProject", project);
          break;
        }

        default:
          console.error("Invalid type!");
          break;
      }
    },
  },
};
</script>