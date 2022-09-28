<template>
    <div class="blog-container">
        <Layout>
            <BlogList/>
        </Layout>
    </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from '@/views/Blog/components/BlogList';
export default {
    components: {
        Layout,
        BlogList
    }   
}
</script>

<style lang="less" scoped>
.blog-container {
    width: 100%;
    height: 100%;
}
</style>