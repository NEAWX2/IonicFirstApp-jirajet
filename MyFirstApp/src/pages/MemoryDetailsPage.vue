<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"

  >
    <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <memory-overview 
      v-else 
      :title="loadedMemory.title" 
      :image="loadedMemory.image" 
      :description="loadedMemory.description"
    ></memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "../component/memories/MemoryOverview.vue";

export default {
  components: {
    MemoryOverview,
  },
  data() {
    return {
      memoryId: this.$route.params.id, 
     
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memoryById(this.memoryId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.memoryId = currentRoute.params.id;
    },
  },
};
</script>

<style scoped>
    ion-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 12px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        margin-bottom: 1rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* เพิ่ม transition */
    }

    ion-img:hover {
        transform: scale(1.05); /* ขยายเล็กน้อยเมื่อ hover */
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* เงาเพิ่มขึ้นเมื่อ hover */
    }

    h2 {
        font-size: 1.8rem; /* เพิ่มขนาดฟอนต์ */
        font-weight: bold;
        color: #5c5346; /* สีโทนเข้มแบบอบอุ่น */
        text-shadow: 1px 1px 2px rgba(92, 83, 70, 0.2); /* เพิ่มเงาให้ข้อความ */
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.8; 
        color: #6e665c; /* สีข้อความโทนอ่อนแบบอบอุ่น */
        margin-bottom: 1rem;
        text-align: justify; /* จัดข้อความให้ชิดขอบทั้งสองด้าน */
    }

    p:hover {
        color: #3f3a32; /* สีข้อความเข้มขึ้นเมื่อ hover */
        transition: color 0.3s ease; /* เพิ่ม transition */
    }
</style>
