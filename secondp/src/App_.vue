<template>
  <div id="app">
    <router-link to="/">My costs</router-link>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  /*components: {
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
  },*/
  //created() {
  // this.$store.dispatch("fetchData");
  //this.myMutationName(this.fetchData());
  //this.$store.commit("setPaymentListData", this.fetchData());
  //this.paymentList = this.fetchData();
  //},
  /*mounted() {
    this.paymentListLength = this.getLengthPaymentList();
  },
  updated() {
    this.paymentListLength = this.getLengthPaymentList();
  },*/
};
</script>

<style lang="scss" module>
</style>
