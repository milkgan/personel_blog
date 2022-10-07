<template>
  <div class="detail-container">
    <Layout>
        <div ref="mainContainer" class="main-container" v-loading="isLoading">
            <BlogDetail v-if="data" :blog="data" />
            <!-- <BlogComment v-if="!isLoading" /> -->
        </div>
        <template #right>
            <div class="right-container" v-loading="isLoading">
                <BlogTOC :toc="data.toc" v-if="data" />
            </div>
        </template>
    </Layout>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "@/views/Blog/components/BlogDetail";
// import BlogComment from '@/views/Blog/components/BlogComment';
import BlogTOC from "@/views/Blog/components/BlogToc";


export default {
    mixins: [fetchData(null)],// 传入null，这样v-if="data"的判断才会生效
    components: {
        Layout,
        BlogDetail,
        // BlogComment,
        BlogTOC
    },
    computed: {
        blogId() {
            return this.$route.params.id;
        }
    },
    mounted() {
        // 文章详情滚轮滑动通知右侧目录高亮显示对应内容
        this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
    },
    updated() {
        // 解决刷新页面的时候，锚点跳转失败以及右侧目录高亮显示丢失问题
        const hash = location.hash;
        location.hash = "";
        setTimeout(() => {
            location.hash = hash;
        }, 50);
    },
    methods: {
        /* 获取文章详情数据（因为详情和目录组件都需要用到data，所以在父组件这里进行data的获取） */
        async fetchData() {
            return await getBlog(this.blogId);
        },
        handleScroll() {
            this.$bus.$emit("mainScroll", this.$refs.mainContainer);
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
    padding: 30px 40px 60px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
}
.right-container {
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    position: relative;
}
</style>