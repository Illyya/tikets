<template>
  <div class="modal-add-tiket">
    <div @click="closeModal" class="modal-add-tiket__background"></div>

    <AddForm @closeModal="closeModal" class="modal-add-tiket__add-form" />
  </div>
</template>

<script>
import AddForm from "./AddForm.vue";
export default {
  components: { AddForm },
  name: "ModalAddTiket",
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss">
.modal-add-tiket {
  &__background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #8a8a8ab2;
  }

  &__add-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>