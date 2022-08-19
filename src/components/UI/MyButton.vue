<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'my-button',
  }
</script>
<style>
  .btn {
    margin-top: 1rem;
    padding: 1rem;
    background: none;
    color:teal;
    border: 1px solid teal;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn:hover {
    color: cyan;
    background-color: teal;
    opacity: 0.7;
    font-weight: 500;
    box-shadow: 3px 0px 15px 3px grey;

  }
</style>