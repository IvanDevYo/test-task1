<template>
  <div class="form">
    <InputBlock class="default--input_block">
      <template v-slot:title>
        Enter your name
      </template>
      <TextInput placeholder="https://goo.gl/maps/id"></TextInput>
    </InputBlock>
    <InputBlock class="default--input_block">
      <template v-slot:title>
        Email
      </template>
      <TextMultiInput :items="emailItems" @add="addEmailItems" @remove="removeEmailItem"></TextMultiInput>
    </InputBlock>
    <InputBlock class="default--input_block">
      <template v-slot:title>
        Phone
      </template>
      <TextMultiInput :items="phoneItems" @add="addPhoneItems" @remove="removePhoneItem"></TextMultiInput>
    </InputBlock>
    <InputBlock class="default--input_block">
      <template v-slot:title>
        Manager
      </template>
      <TextInput></TextInput>
    </InputBlock>
    <InputBlock class="default--input_block">
      <template v-slot:title>
        Status
      </template>
      <TextInput></TextInput>
    </InputBlock>
    <InputBlock class="default--input_block">
      <template v-slot:title>
        Comment
      </template>
      <InputTextArea></InputTextArea>
    </InputBlock>
    <Button>Save Lead</Button>
  </div>
</template>

<script>
import InputBlock from './InputBlock'
import TextInput from './TextInput'
import TextMultiInput from './TextMultiInput'
import InputTextArea from './InputTextArea'
import Button from './Button'

export default {
  name: "Form",
  components: {
    InputBlock,
    TextInput,
    TextMultiInput,
    InputTextArea,
    Button,
  },
  data() {
    return {
      phoneItems: [],
      emailItems: [],
    }
  },
  methods: {
    removeEmailItem(id) {
      const index = this.emailItems.findIndex(item => item.id === id)
      this.emailItems.splice(index, 1)
    },
    addEmailItems(item) {
      this.emailItems.push(item)
    },
    addPhoneItems(item) {
      this.phoneItems.push(item)
    },
    removePhoneItem(id) {
      const index = this.phoneItems.findIndex(item => item.id === id)
      this.phoneItems.splice(index, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
  .default--input_block {
    margin-bottom: 17px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>