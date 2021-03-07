<template>
  <div class="home">
    <h1 class="welcome-title">Welcome, Str4thus!</h1>
    <ProjectOverview :layout="projects">
      <ProjectCard
        v-for="project in projects"
        :project="project"
        :key="project.id + '-projectcard'"
      />
    </ProjectOverview>
  </div>
</template>

<script>
import "@/scss/projectOverview.scss";
import ProjectOverview from "../components/Home/ProjectOverview";
import ProjectCard from "../components/Home/ProjectCard";

export default {
  name: "Home",
  computed: {
    projects: {
      get() {
        return this.$store.getters.projects;
      },
    },
  },
  components: {
    ProjectOverview,
    ProjectCard,
  },
};
</script>