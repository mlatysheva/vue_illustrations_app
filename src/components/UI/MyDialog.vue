<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>  

  </div>
</template>
<script>
import toggleMixin from "@/mixins/toggleMixin";
export default {
  name: 'my-dialog',
  mixins: [toggleMixin],
}
</script>
<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog-content {
  margin: auto;
  padding: 2rem;
  background: white;
  border-radius: 5px;
  min-height: 50px;
  min-width: 500px;
}
</style>
