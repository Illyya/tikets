<template>
  <button :type="typeButton" @click="clickButton" class="btn">
    {{ buttonName }}
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    buttonName: {
      type: String,
    },
    typeButton: {
      type: String,
      default: "button",
    },
  },
  methods: {
    clickButton() {
      this.$emit("clickButton");
    },
  },
};
</script>

<style lang="scss">
.btn {
  padding: 10px 20px;
  color: #ffffff;
  border-radius: 5px;
  transition: 0.2s ease-out;
  user-select: none;

  &:hover {
    background-color: #000000;
  }

  &_create {
    background-color: #78cd51;
    margin-right: 10px;
  }

  &_cancel {
    background-color: #f67a6e;
  }
}
</style>