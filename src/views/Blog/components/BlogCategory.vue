<template>
  <!-- 文章分类组件 -->
  <div class="blog-category-container">
    <h3>文章分类</h3>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlogCategories } from "@/api/blog";
import RightList from "@/views/Blog/components/RightList";
export default {
  mixins: [fetchData([])],
  components: { RightList },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    /* 加工分类数据 */
    list() {
      // 添加“全部”项分类
      const totalArticleCount = this.data.reduce(
        (pre, cur) => pre + cur.articleCount,
        0
      );
      const result = [
        { id: -1, name: "全部", articleCount: totalArticleCount },
        ...this.data,
      ];
      // 加工isSelect、aside信息
      return result.map((item) => ({
        ...item,
        isSelect: item.id === this.categoryId,
        aside: `${item.articleCount}篇`,
      }));
    },
  },
  methods: {
    /* 获取博客分类数据 */
    async fetchData() {
      return await getBlogCategories();
    },
    /* 选择分类路由跳转处理 */
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 根据选择的分类id来进行路由跳转
      const categoryId = item.id;
      if (categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  height: 100%;
  overflow-y: auto;
  h3 {
    text-align: center;
  }
}
</style>