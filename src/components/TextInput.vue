<template>
  <input
      class="text--input default-input"
      :class="{ 'error': validation.error }"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: "TextInput",
  props: {
    value: String,
    placeholder: String,
    validation: {
      type: Object,
      default() { return {} }
    },
  }
}
</script>

<style scoped>

</style>