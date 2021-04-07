<template>
  <div class="tikets">
    <AppTiket
      v-for="tiket in tikets"
      :key="tiket.name"
      :tiket="tiket"
      class="tikets__tiket"
    />
  </div>
</template>

<script>
import AppTiket from "./AppTiket";

export default {
  name: "AppTikets",
  components: {
    AppTiket,
  },
  computed: {
    tikets() {
      return this.$store.getters.tikets;
    },
  },
};
</script>

<style lang="scss">
.tikets {
  width: 100%;
  max-width: 1200px;
  display: table;
  border-collapse: collapse;

  @media (max-width: 850px) {
    display: block;
    border-collapse: none;
  }

  &__tiket {
    display: table-row;

    @media (max-width: 850px) {
      display: flex;

      &:not(:last-of-type) {
        margin-bottom: 5px;
      }
    }
  }
}
</style>