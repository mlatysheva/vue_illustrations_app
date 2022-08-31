<template>
  <select class="select-field" v-model="modelValue" @change="changeOption">
    <option disabled value="">Sort by</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>
<style scoped>
.select-field {
  margin: 1rem;
  padding: 1rem;
  width: 150px;
  border: 1px solid teal;
  border-radius: 5px;
}
</style>