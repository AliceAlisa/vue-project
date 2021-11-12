<template>
  <div>
    <select @change="onChange($event)">
      <option
        :selected="$route.params.category === option"
        v-for="(option, idx) in getCategoryList"
        :key="idx"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SelectCategory",
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      selectedItem: "",
    };
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
  },
  methods: {
    ...mapActions(["fetchCategoryList"]),
    onChange(event) {
      this.$emit("input", event.target.value);
    },
  },
  mounted() {
    if (!this.getCategoryList?.length) {
      this.fetchCategoryList();
    }
  },
};
</script>

<style lang="scss" scoped>
select {
  padding: 10px 0 10px 10px;
  border: rgb(193, 200, 201) 2px solid;
  margin-bottom: 10px;
  width: 300px;
}
</style>