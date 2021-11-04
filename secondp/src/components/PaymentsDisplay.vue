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
        <td :id="item.id" class="menu" @click="openContextMenu($event)">...</td>
      </tr>
    </table>
    <div class="context" v-if="opendMenu">
      <transition name="fade">
        <context-menu
          id="cont_menu"
          :style="{ top: contextMenuTop, left: contextMenuLeft }"
          :settings="modalSettings"
          :idElem="contextId"
          @closeMenu="opendMenu = false"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import ContextMenu from "./ContextMenu.vue";
export default {
  components: { ContextMenu },
  name: "PaymentsDisplay",
  data() {
    return {
      opendMenu: false,
      modalSettings: {},
      contextId: 0,
      contextMenuTop: "",
      contextMenuLeft: "",
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    pageNum: {
      type: Number,
    },
  },
  methods: {
    openContextMenu(event) {
      this.opendMenu = !this.opendMenu;

      this.contextMenuLeft = event.target.getBoundingClientRect().left + "px";
      this.contextMenuTop = event.target.getBoundingClientRect().top + "px";

      this.contextId = Number(event.target.id);
    },

    onOpend(settings) {
      this.modalSettings = settings.settings;
    },

    onClosed() {
      this.modalSettings = {};
    },
  },
  computed: {
    filteredItems() {
      return this.items.slice(
        5 * (this.pageNum - 1),
        5 * (this.pageNum - 1) + 5
      );
    },
  },
  mounted() {
    this.$modal.EventBus.$on("opend", this.onOpend);
    this.$modal.EventBus.$on("closed", this.onClosed);
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
.menu {
  cursor: pointer;
}
.menu:hover {
  color: darkcyan;
}
#cont_menu {
  position: absolute;
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