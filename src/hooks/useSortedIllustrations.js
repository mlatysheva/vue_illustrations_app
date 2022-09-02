import { computed, ref } from 'vue';

export default function useSortedIllustrations(illustrations) {
  const selectedSort = ref('');
  const sortedIllustrations = computed(() => {
    return [...illustrations.value].sort((illustration1, illustration2) => 
      illustration1[selectedSort.value]?.localeCompare(illustration2[selectedSort.value]));
  });
  return {
    selectedSort, sortedIllustrations
  }
}