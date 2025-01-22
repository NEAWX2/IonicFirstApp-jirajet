<template>
  <base-layout  :page-title="'Add a Memory'"
    :page-default-back-link="'/memories'"
    >
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from "../component/memories/CreateMemoryForm.vue";

export default {
  components: {
    CreateMemoryForm,
  },
  
  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch('addMemory', memoryData);
      this.$router.replace('/memories');
    }
  }
};
</script>

<style scoped>
  header{
     
    -webkit-box-reflect: below 1px linear-gradient(transparent,rgba(20, 208, 255, 0.37));
    color: #6317b9;
    font-size: 30px;
  }
  body {
    background: #07252d;
  }
</style>