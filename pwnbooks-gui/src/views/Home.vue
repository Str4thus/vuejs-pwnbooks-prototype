<template>
  <div class="home">
    <h1 class="welcome-title">Welcome, Str4thus!</h1>
    <ProjectOverview>
      <ProjectCard />
    </ProjectOverview>
  </div>
</template>

<script>
import "@/scss/projectOverview.scss";
import ProjectOverview from "../components/Home/ProjectOverview";
import ProjectCard from "../components/Home/ProjectCard";

export default {
  name: "Home",
  components: {
    ProjectOverview,
    ProjectCard,
  },
};
</script>
