<template>
  <div class="home">
    <h1 class="welcome-title">Welcome, Str4thus!</h1>
    <ProjectOverview :layout="projects" :onClick="createProject">
      <ProjectCard
        v-for="project in projects"
        :project="project"
        :key="project.id + '-projectcard'"
        :onClick="editProject"
      />
    </ProjectOverview>

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
  computed: {
    projects: {
      get() {
        return this.$store.getters.projects;
      },
    },
  },
  methods: {
    createProject() {
      this.$modal.show("project-modal", { type: "createProject" });
    },
    editProject(project) {
      this.$modal.show("project-modal", {
        type: "editProject",
        project: project,
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