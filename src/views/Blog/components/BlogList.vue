<template>
  <!-- 文章列表组件 -->
  <div
    class="blog-list-conatiner"
    v-loading="isLoading"
    ref="blogListContainer"
  >
    <!-- 文章列表 -->
    <div class="blog-list">
      <router-link
        :to="{ name: 'BlogDetail', params: { id: article.id } }"
        tag="div"
        class="list"
        v-for="article in data.rows"
        :key="article.id"
      >
        <div class="thumb" v-if="article.thumb">
          <img :src="article.thumb" alt="article.title" />
        </div>
        <div class="main" :class="{ 'main-thumb': article.thumb }">
          <h2 class="title">{{ article.title }}</h2>
          <div class="other">
            <span>日期：{{ formatDate(article.createDate, true) }}</span>
            <span>浏览：{{ article.scanNumber }}</span>
            <!-- <span>评论：{{ article.commentNumber }}</span> -->
          </div>
          <div class="desc">
            {{ article.description }}
          </div>
        </div>
      </router-link>
    </div>
    <!-- 分页器 -->
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlogs } from "@/api/blog";
import Pager from "@/components/Pager";
import { formatDate } from "@/utils";
export default {
  components: { Pager },
  mixins: [fetchData({})],
  computed: {
    // 路由信息
    routeInfo() {
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      const categoryId = +this.$route.params.categoryId || -1;
      return {
        page,
        limit,
        categoryId,
      };
    },
  },
  methods: {
    // http://localhost:8080/article/cate/1?page=1&limit=10
    /* 时间格式化 */
    formatDate,
    /* 获取列表数据 */
    async fetchData() {
      const data = await getBlogs(this.routeInfo.page, this.routeInfo.limit);
      this.handleSetMainScroll(0);
      return data;
    },
    handlePageChange(newPage) {
      // 改动的是路由而不是直接设置data
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      const categoryId = this.routeInfo.categoryId;

      // 全部分类跳转
      if (categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 对应分类跳转
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId,
          },
        });
      }
    },
    /* 滚动条归位 */
    handleSetMainScroll(scrollTop) {
      this.$refs.blogListContainer.scrollTop = scrollTop;
    },
  },
  watch: {
    // 监听路由信息变化
    async $route() {
      this.isLoading = true;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-list-conatiner {
  overflow-y: auto;
  // =======出现滚动条的关键=======
  width: 100%;
  height: 100%;
  // =============================
}
.blog-list {
  padding: 10px 20px 40px;
  .list {
    border-bottom: 1px solid @gray;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .main {
      // 有缩略图的设置最小高度，内容少时使其不跟图片垂直居中
      &.main-thumb {
        min-height: 160px;
      }
      // 标题
      h2 {
        margin: 0;
      }
      // 其他细节
      .other {
        margin: 10px;
        font-size: 12px;
        span {
          margin-right: 14px;
          color: @lightWords;
        }
      }
      // 简介
      .desc {
        font-size: 16px;
        color: @words;
      }
    }
  }
  .thumb {
    width: 200px;
    height: 160px;
    flex: 0 0 auto;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.pager-container {
  margin-bottom: 60px;
}
</style>

