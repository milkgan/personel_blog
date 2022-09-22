<template>
  <!-- 分页器组件 -->
  <div class="pager-container">
    <a class="to-start" :class="current === 1 ? 'no-page' : ''" @click="changePage(1)">|&lt;&lt;</a>
    <a class="to-up" :class="current === 1 ? 'no-page' : ''" @click="changePage(current - 1)">&lt;&lt;</a>
    <!-- 可见页码数 -->
    <a
      class="page-number"
      :class="item === current ? 'active' : ''"
      v-for="item in numbers"
      :key="item"
      @click="changePage(item)"
      >{{ item }}</a
    >
    <a class="to-down" :class="current === pageNumbers ? 'no-page' : ''" @click="changePage(current + 1)">&gt;&gt;</a>
    <a class="to-en" :class="current === pageNumbers ? 'no-page' : ''" @click="changePage(pageNumbers)">&gt;&gt;|</a>
  </div>
  
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数量
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {

    };
  },
  computed: {
    // 总页数
    pageNumbers() {
        return Math.ceil(this.total / this.limit);
    },
    // 可见页码的最小数
    visibleMin() {
        /* 5 6 7 8 9 */
        let min = this.current - Math.floor(this.visibleNumber / 2);
        (min < 1) && (min = 1);
        return min;
    },
    // 可见页码的最大数
    visibleMax() {
        let max = this.visibleMin + this.visibleNumber - 1;
        if(max > this.pageNumbers) { max = this.pageNumbers; }
        return max;
    },
    // 可见页码数组
    numbers() {
        let arr = [];
        for(let i = this.visibleMin; i<=this.visibleMax; i++) {
            arr.push(i)
        }
        return arr;
    }
  },
  methods: {
    changePage(current_page_num) {
      if(current_page_num < 1) {
        current_page_num = 1;
      }else if(current_page_num > this.pageNumbers) {
        current_page_num = this.pageNumbers;
      }
      if(current_page_num === this.current) {
        return;
      }
      this.$emit("pageChange", current_page_num);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  border: 1px solid #000;
  text-align: center;
  color: @primary;
  
  a {
    display: inline-block;
    margin: 8px 2px;
    padding: 4px;
    cursor: pointer;
    &.no-page {
      color: @lightWords;
    }
    &.active {
      color: @words;
    }
  }
}
</style>