<template>
  <div class="multi_input">
    <div class="multi_input--title-block">
      <input class="default-input" :class="{ 'error': validation.error }" type="text" v-model="text">
      <button-component
          class="btn-add"
          @click="add"
      >
        <div class="plus-icon"></div>
        Add
      </button-component>
    </div>
    <div class="multi_input--content">
      <div class="multi_input--value-item" v-for="item in items" :key="item.id">
        <div class="multi_input--value-item-text">
          {{ item.text }}
        </div>
        <button class="multi_input--value-item-cancel" @click="$emit('remove', item.id)"></button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: "TextMultiInput",
  components: {
    'button-component': Button,
  },
  props: {
    items: Array,
    validation: {
      type: Object,
      default() { return {} }
    },
  },
  data() {
    return {
      text: null,
      counter: 1,
    }
  },
  methods: {
    add() {
      this.$emit('add', {
        id: this.counter,
        text: this.text,
      })
      this.counter++
      this.text = null
    },
  }
}
</script>

<style lang="scss" scoped>
  .multi_input--title-block {
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

  .multi_input--content {
    display: flex;
    flex-direction: column;
  }

  .multi_input--value-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #EFF3F7;
    min-width: 160px;
    width: max-content;
    margin-top: 8px;
    border-radius: 5px;
    height: 22px;
  }

  .multi_input--value-item-text {
    margin: 0 37px 0 23px;
    color: #66707f;
  }

  .multi_input--value-item-cancel {
    background: url("../assets/cancel.svg");
    width: 9px;
    height: 9px;
    margin-right: 10px;
  }
</style>