<template>
  <div class="project-overview">
    <div class="project-overview-header">
      <h2>Projects</h2>
      <button @click="onClick()" class="start-new-project-button">
        + Start new Project
      </button>
    </div>
    <hr />
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <slot></slot>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import "@/scss/projectOverview.scss";

export default {
  name: "ProjectOverview",
  props: {
    layout: Array,
    onClick: Function,
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
  },
};
</script>