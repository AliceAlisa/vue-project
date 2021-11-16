import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: []
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentList = payload
    },
    addPaymentListData(state, payload) {
      state.paymentList.push(payload)
    },
    setCategoryList(state, payload) {
      state.categoryList = payload
    },
    addNewCategory(state, payload) {
      state.categoryList.push(payload)
    },
    deleteData(state, payload) {
      const itemIndex = state.paymentList.findIndex((obj => obj.id == payload))
      state.paymentList.splice(itemIndex, 1)
    },
  },
  actions: {
    fetchCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = ['Sport', 'Food', 'Education', 'Transport', 'Internet', 'Entertainment']
          resolve(items)
        }, 500)
      }).then(res => {
        commit('setCategoryList', res)
      });
    },

    fetchData({ commit }) {
      commit('setPaymentListData', [
        {
          id: 1,
          date: "01.3.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 2,
          date: "02.3.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 3,
          date: "03.3.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 4,
          date: "04.3.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 5,
          date: "05.3.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 6,
          date: "06.3.2020",
          category: "Education",
          value: 360,
        },
        {
          id: 7,
          date: "07.3.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 8,
          date: "08.3.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 9,
          date: "09.3.2020",
          category: "Education",
          value: 500,
        },
        {
          id: 10,
          date: "10.3.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 11,
          date: "11.3.2020",
          category: "Transport",
          value: 360,
        },
      ])
    },
    upgradeData({ commit }, payload) {
      const itemIndex = this.state.paymentList.findIndex((obj => obj.id == payload.id))
      this.state.paymentList[itemIndex].category = payload.category
      this.state.paymentList[itemIndex].value = payload.value
      commit('setPaymentListData', this.state.paymentList)
    },
  },
  getters: {
    getPaymentList: state => state.paymentList,
    getCategoryList: state => state.categoryList,
    getFullPaymentValue: state => {
      return state.paymentList.reduce((res, cur) => res + cur.value, 0)
    }
  }
})
