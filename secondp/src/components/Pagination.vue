<template>
  <div class="pag">
    <button @click="prevPage" :disabled="page == 1">&lt;</button>
    <button v-for="(n, ind) in countPages" :key="ind" @click="chosedPage(n)">
      {{ n }}
    </button>
    <button @click="nextPage" :disabled="page == countPages">&gt;</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      page: 1,
    };
  },
  props: {
    length: {
      type: Number,
    },
  },

  methods: {
    prevPage() {
      this.page--;
      this.$emit("chosedPage", this.page);
    },
    nextPage() {
      this.page++;
      this.$emit("chosedPage", this.page);
    },
    chosedPage(numb) {
      this.page = numb;
      this.$emit("chosedPage", this.page);
    },
  },
  computed: {
    countPages() {
      return Math.ceil(this.length / 5);
    },
  },
};
</script>

<style lang="scss" scoped>
.pag {
  text-align: center;
  padding: 10px;
  margin-left: 100px;
  border: 2px solid rgb(193, 200, 201);
  width: 215px;
}
button {
  background: transparent;
  border: none;
  cursor: pointer;
}
button:hover {
  color: darkcyan;
}
button:disabled {
  cursor: auto;
  color: rgb(193, 200, 201);
}
</style>