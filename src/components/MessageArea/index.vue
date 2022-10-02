<template>
    <div class="message-area-container">
        <DataForm v-on="$listeners"/>
        <h3>评论列表({{ subTitle }})</h3>
        <DataList :list="list" />
    </div>
</template>

<script>
import DataList from "./DataList";
import DataForm from "./DataForm";
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        subTitle: {
            type: Number,
            default: 0
        },
        list: {
            type: Array,
            default: () => []
        },
        isListLoading: {
            type: Boolean,
            default: false
        },
    },
    components: {
        DataList,
        DataForm
    }
}
</script>

<style lang="less" scoped>
.data-form-container {
    margin-top: 80px;
}
.data-list-container {
    margin: 30px auto;
    width: 80%;
}
h3 {
    margin-left: 30px
}
</style>