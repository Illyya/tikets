<template>
  <div v-on:keyup.esc="closeModal" class="app">
    <AppButton
      @clickButton="showModal"
      :buttonName="buttonNameAdd"
      class="app__btn btn_create"
    />

    <AppTikets class="app__tikets" />

    <ModalAddTiket
      @closeModal="closeModal"
      v-if="showModalAddTiket"
      class="app__modal-add-tiket"
    />
  </div>
</template>

<script>
import AppTikets from "./components/AppTikets";
import ModalAddTiket from "./components/ModalAddTiket";
import AppButton from "./components/AppButton";

export default {
  name: "App",
  components: {
    AppTikets,
    ModalAddTiket,
    AppButton,
  },
  data() {
    return {
      showModalAddTiket: false,
      buttonNameAdd: "Добавить",
    };
  },
  methods: {
    closeModal() {
      this.showModalAddTiket = false;
    },
    showModal() {
      this.showModalAddTiket = true;
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1.2;
}
input,
button,
textarea {
  font-family: inherit;
  font-size: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a {
  color: inherit;
}
a,
a:visited,
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  min-width: 100%;
  min-height: 100%;
  background-color: #f2f1f7;
}

.app {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__btn {
    margin-bottom: 20px;
  }

  &__tikets {
  }

  &__modal-add-tiket {
  }
}
</style>
