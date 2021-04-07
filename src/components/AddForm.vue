<template>
  <form @submit.prevent="addTiket" class="add-form">
    <h3 class="add-form__title-h3">Новый тикет</h3>

    <LabelAndInputAddForm
      v-for="formEl in inputList"
      :key="formEl.idEl"
      :formEl="formEl"
      :setDefaultValueForm="setDefaultValueForm"
      @addDataUser="addDataUser"
      class="add-form__label-and-input-add-form"
    />

    <div class="add-form__row-btns">
      <AppButton
        :buttonName="buttonNameCreate"
        :typeButton="typeButtonSubmit"
        class="add-form__btn btn_create"
      />
      <AppButton
        @clickButton="closeModal"
        :buttonName="buttonNameCancel"
        class="add-form__btn btn_cancel"
      />
    </div>
  </form>
</template>

<script>
import AppButton from "./AppButton";
import LabelAndInputAddForm from "./LabelAndInputAddForm";
import { inputList } from "../const/inputList";

export default {
  name: "AddForm",
  components: {
    AppButton,
    LabelAndInputAddForm,
  },
  data() {
    return {
      buttonNameCreate: "Создать",
      buttonNameCancel: "Отмена",
      typeButtonSubmit: "submit",
      setDefaultValueForm: false,

      dataTiket: {
        user: {
          name: "",
          email: "",
        },
        body_subject: "",
        subject: "",
        status: 0,
        priority: 2,
        ticket_number: 0,
        date_added: null,
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    dateAdd() {
      const dateAdded = new Date();

      this.dataTiket.date_added = `
        ${("0" + dateAdded.getDate()).slice(-2)}.${(
        "0" +
        (dateAdded.getMonth() + 1)
      ).slice(-2)}.${dateAdded.getFullYear()}, 
        ${("0" + dateAdded.getHours()).slice(-2)}:${(
        "0" + dateAdded.getMinutes()
      ).slice(-2)}
        `;
    },
    addTiket() {
      this.dateAdd();

      this.dataTiket.ticket_number = this.$store.getters.ticketNumber;

      this.$store.commit(
        "addTiket",
        JSON.parse(JSON.stringify(this.dataTiket))
      );

      this.setDefaultValueForm = !this.setDefaultValueForm;
    },
    addDataUser(data) {
      data.name || data.email
        ? Object.assign(this.dataTiket.user, data)
        : Object.assign(this.dataTiket, data);
    },
  },
  created() {
    this.inputList = inputList;
  },
};
</script>

<style lang="scss">
.add-form {
  width: 800px;
  max-width: 100%;
  padding: 20px 10px;
  font-weight: 700;
  border-radius: 5px;
  color: #9b9ea7;
  background-color: white;

  &__title-h3 {
    font-weight: inherit;
    margin-bottom: 20px;
  }

  &__label-and-input-add-form {
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }

  &__row-btns {
    margin-top: 40px;
  }

  &__btn {
  }
}
</style>