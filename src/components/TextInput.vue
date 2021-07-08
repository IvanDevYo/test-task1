<template>
  <input
      class="text--input default-input"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event)"
  >
</template>

<script>
export default {
  name: "TextInput",
  props: {
    value: String,
    placeholder: String,
  }
}
</script>

<style scoped>

</style>