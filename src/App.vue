<template>
  <div id="app">
    <Modal/>
  </div>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  components: {
    Modal,
  }
}
</script>

<style>
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
</style>
