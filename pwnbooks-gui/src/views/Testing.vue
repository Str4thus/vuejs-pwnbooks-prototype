<template>
  <div class="testing">
    <h1>Testing Area</h1>
    <button v-on:click="increment()">Add 1</button>
    <p>
      The button above has been clicked {{ this.$store.state.count }} times.
    </p>
  </div>
</template>


<script>
export default {
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>
