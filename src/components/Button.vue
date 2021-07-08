<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style lang="scss" scoped>
  .btn {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00d395;
    border-radius: 5px;
    color: #fff;
    height: 38px;
    min-width: 150px;
    padding: 0 16px;
  }
</style>