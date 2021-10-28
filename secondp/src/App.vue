<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.header]">My personal costs</div>
        <h3>Total Value: {{ getFPV }}</h3>
      </header>
      <main>
        <button :class="[$style.newcost_btn]" @click="show = !show">
          ADD NEW COST +
        </button>
        <add-payment-form v-if="show" @addNewPayment="addDataToPaymentList" />
        <table>
          <payments-display :items="paymentList" :pageNum="page" />
        </table>
        <pagination
          :length="paymentListLength"
          @chosedPage="renderPaymentList"
        />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import Pagination from "./components/Pagination.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      //paymentList: [],
      paymentListLength: 0,
      show: false,
      page: 1,
    };
  },
  computed: {
    ...mapGetters({
      paymentList: "getPaymentList",
      category: "getCategoryList",
    }),
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
  },
  methods: {
    ...mapMutations({
      myMutationName: "setPaymentListData",
      addData: "addPaymentListData",
    }),
    /*fetchData() {
      return [
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
          category: "Transport",
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
          category: "Transport",
          value: 360,
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
      ];
    },*/
    addDataToPaymentList(item) {
      item.id = this.paymentList.length + 1;
      this.addData(item);
    },

    getLengthPaymentList() {
      return this.paymentList.length;
    },
    renderPaymentList(num) {
      this.page = num;
    },
  },
  created() {
    this.$store.dispatch("fetchData");
    //this.myMutationName(this.fetchData());
    //this.$store.commit("setPaymentListData", this.fetchData());
    //this.paymentList = this.fetchData();
  },
  mounted() {
    this.paymentListLength = this.getLengthPaymentList();
  },
  updated() {
    this.paymentListLength = this.getLengthPaymentList();
  },
};
</script>

<style lang="scss" module>
body {
  font-family: sans-serif;
}
.header {
  font-size: 30px;
  text-align: center;
}
.newcost_btn {
  cursor: pointer;
  margin-left: 1%;
  margin-bottom: 4%;
  padding: 15px 10px;
  background-color: rgb(7, 145, 145);
  color: white;
  border: transparent;
}
</style>
