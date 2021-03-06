<template>
  <div class="project-overview">
    <div class="project-overview-header">
      <h2>Projects</h2>
      <button class="start-new-project-button">+ Start new Project</button>
    </div>
    <hr />
    <slot></slot>
  </div>
</template>

<script>
import "@/scss/projectOverview.scss";

export default {
  name: "ProjectOverview",
};
</script>