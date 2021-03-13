<template>
  <div
    class="project-card"
    @contextmenu.prevent.stop="onrightclick($event, project)"
    @dblclick="ondoubleclick(project)"
  >
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
    </grid-item>
  </div>
</template>

<script>
import "@/scss/projectOverview.scss";
import VueGridLayout from "vue-grid-layout";

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
    ondoubleclick: Function,
    onrightclick: Function,
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
