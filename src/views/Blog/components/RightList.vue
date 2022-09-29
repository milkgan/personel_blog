<template>
<!-- 分类列表组件 -->
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <div
        @click="handleSelect(item)"
        :class="{ active: item.isSelect }"
        class="title"
      >
        <span>{{ item.name }}</span>
        <span class="title-aside" v-if="item.aside">({{ item.aside }})</span>
      </div>
      <!-- 组件递归 -->
      <RightList
        v-if="item.children"
        :list="item.children"
        @select="handleSelect"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSelect(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 16px;
  li {
    margin-top: 8px;
    cursor: pointer;
    .title {
      padding: 8px 20px;
      color: @words;
      font-size: 16px;
      line-height: 16px;
      .title-aside {
        margin-left: 10px;
        font-size: 12px;
        color: @lightWords;
      }
      &.active {
        background-color: lighten(@gray, 20%);
      }
      &.active span{
        color: @selected;
      } 
    }
  }
}
</style>