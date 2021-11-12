<template>
  <div class="context-menu">
    <button @click="closeMenu">X</button>
    <div class="container">
      <button @click="openEditMenu">Edit</button>
      <button @click="openDeleteMenu">Delete</button>
    </div>
    <transition name="fade">
      <div class="content-wrapper" v-if="settings.content">
        <button @click="onClose">X</button>
        <h3 class="context-header">{{ settings.header }}</h3>
        <p>Item id = {{ idElem }}</p>
        <div class="content">
          <component :is="settings.content" :contextIdElem="idElem" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
import DeleteComp from "./DeleteComp.vue";
export default {
  components: { AddPaymentForm, DeleteComp },
  name: "ContextMenu",
  props: {
    settings: Object,
    idElem: Number,
  },
  data() {
    return {};
  },
  methods: {
    onClose() {
      this.$modal.close();
    },
    openEditMenu() {
      this.$modal.open("editPaymentForm", {
        header: "Edit Payment",
        content: "AddPaymentForm",
      });
    },
    openDeleteMenu() {
      this.$modal.open("deleteElement", {
        header: "Delete Payment",
        content: "DeleteComp",
      });
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px 0 10px 10px;
  display: flex;
  justify-content: space-around;
  width: 200px;
  background-color: rgb(197, 226, 252);
  border: rgb(193, 200, 201) 2px solid;
  & button {
    cursor: pointer;
  }
}
.content-wrapper {
  background-color: rgb(206, 248, 245);
  border: rgb(193, 200, 201) 2px solid;
  position: absolute;
  margin-left: 0px;
  & button {
    cursor: pointer;
  }
  & h3,
  p {
    text-align: center;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>