<template>
  <div class="form">
    <InputBlock>
      <template v-slot:title>
        Enter your name
      </template>
      <TextInput placeholder="https://goo.gl/maps/id"></TextInput>
    </InputBlock>
  </div>
</template>

<script>
import InputBlock from './InputBlock'
import TextInput from './TextInput'

export default {
  name: "Form",
  components: {
    InputBlock,
    TextInput,
  }
}
</script>

<style scoped>

</style>