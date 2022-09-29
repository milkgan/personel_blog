<template>
    <div class="blog-comment-container">
        <MessageArea :list="data.rows" />
    </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { getComments } from "@/api/blog";
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
        }
    }
    
}
</script>

<style lang="less" scoped>
// .blog-comment-container {
    
// }
</style>