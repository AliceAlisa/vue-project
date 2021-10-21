<template>
  <div class="form">
    <input placeholder="Payment description" v-model="category" />
    <input placeholder="Payment amount" v-model="value" />
    <input placeholder="Payment date" v-model="date" />
    <button class="save_btn" @click="onSave">ADD +</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      category: "",
      value: "",

      date: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth();
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSave() {
      const data = {
        id: 0,
        category: this.category,
        value: this.value,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 30px;
  & input {
    padding: 10px 0 10px 10px;
    border: rgb(193, 200, 201) 2px solid;
    margin-bottom: 10px;
  }
  & button {
    cursor: pointer;
    margin-left: 180px;
    width: 120px;
    padding: 15px 40px;
    background-color: rgb(7, 145, 145);
    color: white;
    border: transparent;
  }
}
</style>