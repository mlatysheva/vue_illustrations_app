<template>
  <div
    class="illustrations-section"
    v-if="illustrations.length > 0"
  >  
    <h3
      class="small-title"
      style="margin-left: 1rem;"
    >
      Illustrations you can buy:
    </h3> 
    <transition-group name="illustration-list">
      <illustration-item
        v-for="illustration in illustrations"
        :illustration="illustration"
        :key="illustration.id"
        @remove="$emit('remove', illustration)"
      />
    </transition-group>
  </div>
  <h3 v-else class="small-title" style="color: teal">
    No illustrations are currently available
  </h3>
</template>
<script>
import IllustrationItem from "@/components/IllustrationItem";
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
.illustrations-section {
  width: 100%;
  max-width: 1000px;
}
.illustration-list-item {
  display: inline-block;
  margin-right: 10px;
}
.illustration-list-enter-active, 
.illustration-list-leave-active {
  transition: all 0.4s ease;
}
.illustration-list-enter-from,
.illustration-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.illustration-list-move {
  transition: transform 0.4s ease;
}
</style>
