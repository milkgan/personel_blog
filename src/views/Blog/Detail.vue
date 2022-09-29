<template>
  <div class="detail-container">
    <Layout>
        <div class="main-container">
            <!-- <BlogDetail v-if="data" :blog="data" /> -->
            <BlogComment />
        </div>
      
      
      
    </Layout>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
// import BlogDetail from "@/views/Blog/components/BlogDetail";
import BlogComment from '@/views/Blog/components/BlogComment';


export default {
    mixins: [fetchData(null)],// 传入null，这样v-if="data"的判断才会生效
    components: {
        Layout,
        // BlogDetail,
        BlogComment
    },
    computed: {
        blogId() {
            return this.$route.params.id;
        }
    },
    methods: {
        /* 获取文章详情数据（因为详情和目录组件都需要用到data，所以在父组件这里进行data的获取） */
        async fetchData() {
            return await getBlog(this.blogId);
        }
    }
};
</script>

<style lang="less">
.detail-container{
    width: 100%;
    height: 100%;  
}
.main-container {
    width: 100%;
    height: 100%;
    // background-color: red;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>