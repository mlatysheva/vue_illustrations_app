<template>
  <div>  
    <h3 class="small-title">Illustrations you can buy:</h3>
  </div>
  <illustration-item
    v-for="illustration in illustrations"
    :illustration="illustration"
  />
</template>
<script>
import IllustrationItem from './IllustrationItem.vue';
  export default {
    props: {
        illustrations: {
            type: Array,
            required: true,
        }
    },
    components: { IllustrationItem }
}
</script>
<style>
</style>
