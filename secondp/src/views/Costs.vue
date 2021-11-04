<template>
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
      <pagination :length="paymentListLength" @chosedPage="renderPaymentList" />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
import Pagination from "../components/Pagination.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Costs",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
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
    addDataToPaymentList(item) {
      item.id = this.paymentList[this.paymentList.length - 1].id + 1;
      this.addData(item);
    },

    getLengthPaymentList() {
      return this.paymentList.length;
    },
    renderPaymentList(num) {
      this.page = num;
    },
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth();
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  created() {
    this.$store.dispatch("fetchData");
  },
  mounted() {
    this.paymentListLength = this.getLengthPaymentList();
    if (this.$route.params.section === "payment") {
      this.show = true;
      if (this.$route.params.category && this.$route.query.value) {
        this.addData({
          id: this.paymentList.length + 1,
          category: this.$route.params.category,
          value: Number(this.$route.query.value),
          date: this.getCurrentDate(),
        });
      }
    }
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