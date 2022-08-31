<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="input"
  >  
</template>
<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
<style scoped>
  .input {
    width: 100%;
    margin: 1rem;
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid teal;
    border-radius: 4px;
    box-shadow: 5px 0px 10px 5px lightgray;
  }
</style>