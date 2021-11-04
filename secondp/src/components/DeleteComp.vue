<template>
  <div class="del-comp">
    <p>Do you really want to delete this id = {{ contextIdElem }} payment?</p>
    <div class="buttons">
      <button @click="onYes">YES</button>
      <button @click="onNo">NO</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteComp",
  props: {
    contextIdElem: Number,
  },
  methods: {
    onYes() {
      this.$store.commit("deleteData", this.contextIdElem);
      this.$modal.close();
    },
    onNo() {
      this.$modal.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: space-around;
  border: rgb(193, 200, 201) 2px solid;
  margin-bottom: 15px;

  padding: 5px 3px;
}
button {
  cursor: pointer;
}
</style>