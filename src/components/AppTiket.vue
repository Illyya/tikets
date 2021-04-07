<template>
  <div class="tiket">
    <div class="display-table-cell">
      <p class="tiket__serial-number">#{{ tiket.ticket_number }}</p>
    </div>

    <div class="display-table-cell">
      <p class="tiket__full-name">{{ tiket.user.name }}</p>
    </div>

    <div class="display-table-cell">
      <div class="tiket__type-of-appeal-and-message">
        <p class="tiket__type-of-appeal">
          Тип обращения: <span>{{ tiket.subject }}</span>
        </p>
        <p class="tiket__message">
          {{ tiket.body_subject }}
        </p>
      </div>
    </div>

    <div class="display-table-cell">
      <div class="tiket__status">
        <span :class="statusIcon" class="tiket__status-icon"></span>
        <p class="tiket__status-text">{{ appealStatus }}</p>
      </div>
    </div>

    <div class="display-table-cell">
      <p class="tiket__priority">!{{ callPriority }}</p>
    </div>

    <div class="display-table-cell">
      <time datetime="2021-03-31 10:04" class="tiket__date-added">
        {{ tiket.date_added }}
      </time>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTiket",
  props: {
    tiket: {
      type: Object,
    },
  },
  computed: {
    callPriority() {
      let priority = null;

      switch (this.tiket.priority) {
        case "0":
          priority = "Низкий";
          break;
        case "1":
          priority = "Средний";
          break;
        case "2":
          priority = "Высокий";
          break;
        case "3":
          priority = "Критический";
          break;
        default:
          break;
      }

      return priority;
    },
    statusIcon() {
      return {
        "tiket__status-icon_new": this.tiket.status === "0",
        "tiket__status-icon_in-processing": this.tiket.status === "1",
        "tiket__status-icon_postponed": this.tiket.status === "2",
        "tiket__status-icon_closed": this.tiket.status === "3",
      };
    },
    appealStatus() {
      let status = null;

      switch (this.tiket.status) {
        case "0":
          status = "Новый";
          break;
        case "1":
          status = "В обработке";
          break;
        case "2":
          status = "Отложено";
          break;
        case "3":
          status = "Закрыто";
          break;
        default:
          break;
      }

      return status;
    },
  },
};
</script>

<style lang="scss">
.tiket {
  color: #9d9d9d;
  border-radius: 5px;
  background-color: #ffffff;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }

  .display-table-cell {
    padding: 10px 5px;
    display: table-cell;
    vertical-align: middle;
    border-top: 5px solid #f2f1f7;

    @media (max-width: 850px) {
      display: block;
      vertical-align: none;
      border: none;
    }
  }

  &__serial-number {
    text-align: center;
    color: #ffffff;
    border-radius: 5px;
    background-color: #f66d63;
  }

  &__full-name {
  }

  &__type-of-appeal-and-message {
    padding: 5px 20px;
    border-left: 3px solid #c1c1c1;
    background-color: #f6f6f6;
  }

  &__type-of-appeal {
    span {
      color: #9bdbe7;
    }
  }

  &__message {
  }

  &__status {
    display: flex;
    align-items: center;
  }

  &__status-icon {
    width: 10px;
    display: inline-block;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    margin-right: 5px;

    &_new {
      background-color: #a9d86e;
    }
    &_in-processing {
      background-color: #ff6c60;
    }
    &_postponed {
      background-color: #fcb322;
    }
    &_closed {
      background-color: #bec3c7;
    }
  }

  &__status-text {
    white-space: nowrap;
  }

  &__priority {
    white-space: nowrap;
  }

  &__date-added {
  }
}
</style>
