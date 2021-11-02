<template>
  <div class="form">
    <!--<input placeholder="Payment description" v-model="category" />-->
    <input placeholder="Payment amount" v-model="value" />
    <input placeholder="Payment date" v-model="date" />
    <select-category v-model="category" />
    <div class="new_category">
      <input placeholder="New Category" v-model="new_category" />
      <button class="newcat_btn" @click="addToCategoryList()">
        add new Category +
      </button>
    </div>
    <button class="save_btn" @click="onSave">ADD +</button>
  </div>
</template>

<script>
import SelectCategory from "./SelectCategory.vue";
import { mapMutations } from "vuex";

export default {
  components: { SelectCategory },
  name: "AddPaymentForm",
  data() {
    return {
      category: "",
      value: "",
      date: "",
      new_category: "",
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
    ...mapMutations({
      addCategory: "addNewCategory",
    }),
    addToCategoryList() {
      this.addCategory(this.new_category);
    },
    onSave() {
      const data = {
        id: 0,
        category: this.category,
        value: Number(this.value),
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addNewPayment", data);
    },
  },
  mounted() {
    this.category = this.$route.params.category;
    this.value = this.$route.query.value;
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
  .new_category {
    display: flex;
    & button {
      cursor: pointer;
      margin-left: 0px;
      width: 100%;
      height: 40px;
      padding: 5px 5px;
      background-color: rgb(7, 145, 145);
      color: white;
      border: transparent;
    }
  }
}
</style>