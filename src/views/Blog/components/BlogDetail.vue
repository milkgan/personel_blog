<template>
  <!-- 文章详情组件 -->
  <div class="blog-detail-contianer">
    <h1 class="title">{{ blog.title }}</h1>
    <div class="aside">
      <span>日期：{{ formatDate(blog.createDate) }}</span>
      <span>浏览量：{{ blog.scanNumber }}</span>
      <!-- <span>评论：{{ blog.commentNumber }}</span> -->
      <router-link
        :to="{ name: 'BlogCategory', params: { categoryId: blog.category.id } }"
      >
        {{ blog.category.name }}
      </router-link>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.title {
  text-align: center;
}
.aside {
  font-size: 14px;
  color: @lightWords;
  margin-bottom: 36px;
  padding: 0 30px;
  span {
    margin-right: 20px;
  }
}
.markdown-body {
  padding: 0 30px;
}
</style>