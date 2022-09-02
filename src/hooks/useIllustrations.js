import axios from 'axios';
import { onMounted, ref } from 'vue';

export default function useIllustrations(limit) {
  const illustrations = ref([]);
  // let illustrations = [];
  const totalPages = ref(0);
  const isIllustrationsLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _page: 1,
          _limit: limit,
        }  
      });
      totalPages.value = Math.ceil(response.headers["x-total-count"] / limit);
      illustrations.value = response.data;
      // illustrations = response.data;
    } catch(err) {
      console.error(err);
    } finally {
      isIllustrationsLoading.value = false;
    }
  }
  onMounted(fetching);
  
  return {
    illustrations, isIllustrationsLoading, totalPages
  }
}