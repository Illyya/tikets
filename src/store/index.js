import { createStore } from "vuex";

export default createStore({
  state: {
    tikets: [],
    ticketNumber: 1,
  },
  getters: {
    tikets(state) {
      return state.tikets;
    },
    ticketNumber(state) {
      return state.ticketNumber;
    }
  },
  mutations: {
    addTiket(state, dataTiket) {
      state.ticketNumber++;

      state.tikets.push(dataTiket);
    },
  },
  actions: {},
  modules: {},
});
