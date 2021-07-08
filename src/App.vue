<template>
  <div id="app">
    <Modal>
      <template v-slot:title>
        Add new lead
      </template>
      <div class="form--wrapper">
        <Form/>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './components/Modal'
import Form from './components/Form'

export default {
  name: 'App',
  components: {
    Modal,
    Form,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;
  color: #37474F;
  margin-top: 60px;
}

button {
  border: none;
  padding: 0;
  cursor: pointer;
}

.form--wrapper {
  margin-top: 25px;
}

.default-input {
  border-radius: 5px;
  border: 1px solid #DBE1E9;
  width: 100%;
  height: 34px;
  text-indent: 10px;
  color: #000;
  resize: none;
  &::placeholder {
    font-family: Roboto, sans-serif;
    color: #BAC9DB;
    font-size: 14px;
  }
  &:hover, &:active, &:focus, &:focus-visible {
    filter: drop-shadow(0px 0px 4px rgba(0, 211, 149, 0.2));
    border: 1px solid #00D395;
    outline: none;
  }
  &.error {
    border: 1px solid #FB6868;
  }
}
</style>
