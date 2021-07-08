<template>
  <input
      class="text--input default-input"
      :class="{ 'error': errorValidation }"
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
    errorValidation: Boolean,
  }
}
</script>

<style scoped>

</style>