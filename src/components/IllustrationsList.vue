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
  .illustration {
    max-width: 600px;
    height: 100%;
    margin: 1rem;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
  }
</style>
