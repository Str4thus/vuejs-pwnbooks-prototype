<template>
  <div class="home">
    <h1 class="welcome-title">Welcome, Str4thus!</h1>
    <ProjectOverview :layout="projects" :createProject="createProject">
      <ProjectCard
        v-for="project in projects"
        :project="project"
        :key="project.id + '-projectcard'"
        :ondoubleclick="selectProject"
        :onrightclick="openProjectCtx"
      />
    </ProjectOverview>

    <vue-simple-context-menu
      :elementId="'projectCtxId'"
      :options="projectOptions"
      :ref="'projectCtx'"
      @option-clicked="optionClicked"
    >
    </vue-simple-context-menu>

    <v-dialog />
    <ProjectModal />
  </div>
</template>

<script>
import "@/scss/projectOverview.scss";
import "@/scss/projectModal.scss";
import ProjectOverview from "../components/Home/ProjectOverview";
import ProjectCard from "../components/Home/ProjectCard";
import ProjectModal from "../components/modals/ProjectModal";

export default {
  name: "Home",
  data() {
    return {
      projectOptions: [
        {
          name: "Edit",
          slug: "project-edit",
        },
        {
          name: "Delete",
          slug: "project-delete",
        },
      ],
    };
  },
  computed: {
    projects: {
      get() {
        return this.$store.getters.projects;
      },
    },
  },
  methods: {
    openProjectCtx(event, project) {
      this.$refs.projectCtx.showMenu(event, project);
    },
    optionClicked(event) {
      switch (event.option.slug) {
        case "project-edit":
          this.editProject(event.item);
          break;
        case "project-delete":
          this.deleteProject(event.item);
          break;
        default:
          console.error("Unknown option clicked!");
          break;
      }
    },
    selectProject(project) {
      console.log(project);
      this.$store.dispatch("selectProject", project.id);
      this.$store.dispatch("deselectNote");
      this.$router.push({ name: "Books" });
    },
    createProject() {
      this.$modal.show("project-modal", { type: "createProject" });
    },
    editProject(project) {
      this.$modal.show("project-modal", {
        type: "editProject",
        project: project,
      });
    },
    deleteProject(project) {
      this.$modal.show("dialog", {
        title: "Delete Project: '" + project.title + "'",
        text:
          "Are you sure you want to delete '" +
          project.title +
          "'? <br><br> <b> (Cannot be restored) </b>",
        buttons: [
          {
            title: "Confirm",
            class: "vue-dialog-button positive-button",
            handler: () => {
              this.$store.dispatch("deleteProject", project.id);
              this.$modal.hide("dialog");
            },
          },
          {
            title: "Cancel",
            class: "vue-dialog-button neutral-button",
            handler: () => {
              this.$modal.hide("dialog");
            },
          },
        ],
      });
    },
  },
  components: {
    ProjectOverview,
    ProjectCard,
    ProjectModal,
  },
};
</script>