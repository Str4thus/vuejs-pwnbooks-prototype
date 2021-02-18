<template>
  <div class="notebook-list">
    <h1>{{ this.name }}</h1>
    <p v-for="label in notebooks" :key="label">{{ label }}</p>
  </div>
</template>

<script>
import "@/scss/notebookList.scss";

export default {
  name: "NotebookList",
  props: {
    notebooks: Array,
  },
  data() {
    return {
      name: "Blue",
    };
  },
};
</script>
