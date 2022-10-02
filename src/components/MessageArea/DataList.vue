<template>
<!-- 评论列表组件 -->
    <ul class="data-list-container">
        <li v-for="(item, i) in list" :key="i">
            <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c" :size="50" />
            <div class="data">
                <div class="desc">
                    <div class="nickname">{{ item.nickname }}</div>
                    <div class="time">{{ formatDate(item.createDate, true) }}</div>
                </div>
                <div class="content">{{ item.content }}</div>
            </div>
        </li>
    </ul>
</template>

 <script>
 import Avatar from "@/components/Avatar";
 import { formatDate } from "@/utils";
 export default {
    components: {
        Avatar
    },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        formatDate
    }
    
 }
 </script>

 <style lang="less" scoped>
 @import "~@/styles/var.less";

 .data-list-container {
    li {
        padding: 20px 30px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid @lightWords;
        .data {
            width: 100%;
        }
        .desc {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .content {
            font-size: 14px;
        }
        .nickname {
            color: @primary;
            font-weight: bold;
        }
        .time {
            color: @lightWords;
        }
    }
    .avatar-container {
        margin-right: 20px;
    }
 }
 </style>