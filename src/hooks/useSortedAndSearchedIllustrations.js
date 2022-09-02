import { computed, ref } from 'vue';

export default function useSortedAndSearchedIllustrations(sortedIllustrations) {
  const searchQuery = ref('');
  const sortedAndSearchedIllustrations = computed(() => {
    return sortedIllustrations.value.filter(illustration =>
      illustration.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
  });
  return {
    searchQuery, sortedAndSearchedIllustrations
  }
}