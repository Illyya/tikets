<template>
  <div class="label-and-input-add-form">
    <label :for="formEl.nameEl" class="label-and-input-add-form__label">
      {{ formEl.nameLabel }}:
    </label>

    <input
      v-if="formEl.formElement === 'input'"
      :name="formEl.nameEl"
      :id="formEl.nameEl"
      :type="formEl.typeInput"
      v-model.trim="dataUser[formEl.nameEl]"
      @change="addDataUser"
      @input="onlyText"
      required
      class="label-and-input-add-form__input"
    />

    <textarea
      v-if="formEl.formElement === 'textarea'"
      :name="formEl.nameEl"
      :id="formEl.nameEl"
      v-model.trim="dataUser[formEl.nameEl]"
      @change="addDataUser"
      required
      class="label-and-input-add-form__input label-and-input-add-form__input_textarea"
    >
    </textarea>

    <select
      v-if="formEl.formElement === 'select'"
      :name="formEl.nameEl"
      :id="formEl.nameEl"
      v-model="dataUser[formEl.nameEl]"
      @change="addDataUser"
      required
      class="label-and-input-add-form__input"
    >
      <option v-for="(val, name) in formEl.options" :key="name" :value="name">
        {{ val }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LabelAndInputAddForm",
  props: {
    formEl: {
      type: Object,
    },
    setDefaultValueForm: {
      type: Boolean,
    },
  },
  data() {
    return {
      dataUser: {},
    };
  },
  methods: {
    onlyText() {
      if (this.dataUser.name) {
        this.dataUser.name = this.dataUser.name.replace(/[^a-zа-я ]/gi, "");
      }
    },
    addDataUser() {
      this.$emit("addDataUser", this.dataUser);
    },
  },
  watch: {
    setDefaultValueForm() {
      this.dataUser = {};
    },
  },
};
</script>

<style lang="scss">
.label-and-input-add-form {
  display: flex;
  flex-direction: column;

  &__label {
  }

  &__input {
    padding: 7px 5px;
    width: 100%;
    color: #5a5b5f;
    background-color: #e7e8ec;
    transition: 0.2s ease-out;

    &:hover {
      background-color: darken($color: #e7e8ec, $amount: 10);
    }

    &_textarea {
      height: 50px;
      resize: none;
    }
  }
}
</style>