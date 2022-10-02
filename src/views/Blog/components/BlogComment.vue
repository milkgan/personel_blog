<template>
    <div class="blog-comment-container">
        <MessageArea :list="data.rows" :subTitle="data.total" @submit="handleSubmit"/>
    </div>
</template>

<script>
// postComment
import MessageArea from "@/components/MessageArea";
import { getComments, postComment } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
export default {
    mixins: [fetchData({ raw: [], total: 0 })],
    components: {
        MessageArea
    },
    methods: {
        async fetchData() {
            console.log(await getComments())
            return await getComments();
        },
        async handleSubmit(commentInfo, callback) {
            const res = await postComment({
                blogId: this.$route.params.id,
                ...commentInfo
            });
            console.log(res)
            this.data.rows.unshift(res);
            this.data.total++;
            callback("评论成功啦");
        }
        
    }
    
}
</script>

<style lang="less" scoped>
// .blog-comment-container {
    
// }
</style>