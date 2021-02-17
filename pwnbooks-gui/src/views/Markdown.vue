<template>
  <v-md-editor v-model="text" height="100%" width="100%"></v-md-editor>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
};
</script>