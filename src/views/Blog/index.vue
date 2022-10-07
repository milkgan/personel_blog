<template>
  <div class="blog-container">
    <Layout>
      <BlogList />
      <template #right>
        <BlogCategory />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "@/views/Blog/components/BlogList";
import BlogCategory from "@/views/Blog/components/BlogCategory";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
};
</script>

<style lang="less" scoped>
.blog-container {
  width: 100%;
  height: 100%;
}
</style>