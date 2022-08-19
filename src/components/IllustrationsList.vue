<template>
  <div v-if="illustrations.length > 0">  
    <h3
      class="small-title"
      style="margin-left: 1rem;"
    >
      Illustrations you can buy:
    </h3> 
    <illustration-item
      v-for="illustration in illustrations"
      :illustration="illustration"
      :key="illustration.id"
      @remove="$emit('remove', illustration)"
    />
  </div>
  <h3 v-else class="small-title" style="color: teal">
    No illustrations are currently available
  </h3>
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
