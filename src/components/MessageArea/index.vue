<template>
    <div class="message-area-container">
        <DataList :list="list" />
    </div>
</template>

<script>
import DataList from "./DataList";
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        subTitle: {
            type: String,
            default: ""
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
        DataList
    }
}
</script>

<style lang="less" scoped>
.data-list-container {
    margin: 30px auto;
    width: 80%;

}
</style>