<template>
  <div class="wrapper">
    <table>
      <tr>
        <th>#</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
      <tr v-for="(item, idx) in filteredItems" :key="idx">
        <td class="table">{{ item.id }}</td>
        <td class="table">{{ item.category }}</td>
        <td class="table">{{ item.value }}</td>
        <td class="table">{{ item.date }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    pageNum: {
      type: Number,
    },
  },
  computed: {
    filteredItems() {
      const filteredItems = [];
      this.items.forEach((element, n) => {
        if (n >= 5 * (this.pageNum - 1) && n < 5 * this.pageNum) {
          filteredItems.push(element);
        }
      });
      return filteredItems;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #fff;
}
td {
  padding: 10px 30px;
}
table {
  width: 430px;
}
tr {
  & th {
    font-size: 20px;
    border-bottom: 2px solid rgb(193, 200, 201);
    padding-bottom: 5px;
    color: darkcyan;
  }
}
</style>