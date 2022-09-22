<template>
    <!-- 无数据显示组件 -->
    <div class="empty-container">
        <Icon :type="type" />
        <div>{{ text }}</div>
    </div>
</template>

<script>
import Icon from '../Icon';
export default {
    props: {
        text: {
            type: String,
            default: "无数据"
        }
    },
    components: {
        Icon
    },
    data() {
        return {
            type: 'empty'
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
    .self-center();
    text-align: center;
    color: @lightWords;
}
.icon-container {
    font-size: 80px;
}

</style>