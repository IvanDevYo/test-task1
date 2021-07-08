<template>
  <div class="input--block">
    <div class="input--block-title">
      <slot name="title">
        Input!
      </slot>
    </div>
    <div class="input--block-content">
      <slot>
        <input class="default-input" type="text">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBlock"
}
</script>

<style lang="scss" scoped>
  .input--block-title {
    font-size: 12px;
    font-weight: 500;
    margin-left: 6px;
  }

  .input--block-content {
    margin-top: 5px;
  }
</style>