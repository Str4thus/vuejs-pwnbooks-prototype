<template>
  <div class="project-card">
    <grid-item
      :x="project.x"
      :y="project.y"
      :w="project.w"
      :h="project.h"
      :i="project.i"
      :style="style"
      @resized="resizedEvent"
      @moved="movedEvent"
    >
      {{ project.title }}
      {{ project.description }}
      <button @click="onClick(project)">Edit</button>
    </grid-item>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import "@/scss/projectOverview.scss";

export default {
  name: "ProjectCard",
  computed: {
    style: {
      get() {
        return {
          backgroundColor: this.$store.getters.getProjectById(this.project.id)
            .color,
        };
      },
    },
  },
  props: {
    project: Object,
    onClick: Function,
  },
  methods: {
    movedEvent(i, newX, newY) {
      this.$store.dispatch("updateProjectPosition", { id: i, newX, newY });
    },
    resizedEvent(i, newH, newW) {
      this.$store.dispatch("updateProjectSize", { id: i, newH, newW });
    },
  },
  components: {
    GridItem: VueGridLayout.GridItem,
  },
};
</script>
