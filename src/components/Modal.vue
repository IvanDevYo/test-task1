<template>
  <div class="modal">
    <button class="close--button"></button>
    <div class="modal--content">
      <div class="modal--title">
        <slot name="title">
          Title!
        </slot>
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
}
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width: 460px;
    height: 950px;
    max-height: calc(100vh - 100px);
    border-radius: 25px;
    filter: drop-shadow(0px 2px 20px rgba(31, 36, 40, 0.24));
    background-color: #fff;
    padding: 24px 67px 58px 67px;
  }

  .close--button {
    position: absolute;
    right: 30px;
    top: 28px;
    width: 14px;
    height: 14px;
    background: url("../assets/close.svg");
  }

  .modal--title {
    font-weight: 500;
    font-size: 18px;
  }
</style>