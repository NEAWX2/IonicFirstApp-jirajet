import { createStore } from 'vuex';

const store = createStore({
  state() {
    // Load memories from localStorage, or use default values if none exist
    const storedMemories = localStorage.getItem('memories');
    return {
      memories: storedMemories ? JSON.parse(storedMemories) : [
                {
                    id: "m1",
                    image: "https://tonkit360.com/wp-content/uploads/2023/01/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.jpg", 
                    title: "การท่องเที่ยว",
                    description: "การท่องเที่ยวในขอนแก่น"
                },
                {
                    id: "m2",
                    image: "https://image.bangkokbiznews.com/uploads/images/contents/w1024/2024/01/ZsOchTorrgpTpNjryuE6.webp?x-image-process=style/lg-webp", 
                    title: "การออกกำลังกาย",
                    description: "วิ่ง"
                },
                {
                    id: "m3",
                    image: "https://www.bedee.com/wp-content/uploads/2024/01/neurotransmitter-can-help-for-sleep.png", 
                    title: "การนอน",
                     description: "นอนไม่เกินตี1"
                },
                {
                    id: "m4",
                    image: "https://img.kapook.com/u/2018/Tanapol/money/july/aom/a1.jpg", 
                    title: "การใช้จ่ายเงิน",
                    description: "เก็บออมวันละ20",
                }
            ]
        }
    },
    mutations: {
        addMemory(state, memoryData) {
          const newMemory = {
            id: new Date().toISOString(),
            title: memoryData.title,
            image: memoryData.imageUrl,
            description: memoryData.description,
          };
    
          state.memories.unshift(newMemory);
          // Persist the updated memories list to localStorage
          localStorage.setItem('memories', JSON.stringify(state.memories));
        },
      },
      actions: {
        addMemory(context, memoryData) {
          context.commit("addMemory", memoryData);
        },
      },
      getters: {
        memories(state) {
          return state.memories;
        },
        memoryById(state) {
          return (memoryId) => {
            return state.memories.find((memory) => memory.id === memoryId);
          };
        },
      },
    });
    
    export default store;