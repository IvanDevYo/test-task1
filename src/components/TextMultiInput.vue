<template>
  <div class="multi_input">
    <input class="default-input" type="text">
    <button-component
      class="btn-add"
    >
      <div class="plus-icon"></div>
      Add
    </button-component>
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: "TextMultiInput",
  components: {
    'button-component': Button,
  }
}
</script>

<style lang="scss" scoped>
  .multi_input {
    display: flex;
    align-items: center;
  }

  .plus-icon {
    width: 14px;
    height: 14px;
    background: url("../assets/plus.svg");
    margin-right: 9px;
  }

  .btn-add {
    padding: 0 12px 0 16px;
    height: 28px;
    min-width: initial;
    margin-left: 7px;
  }
</style>