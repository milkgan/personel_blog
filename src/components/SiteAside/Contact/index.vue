<template>
    <ul class="contact-container">
        <li>
            <Icon type="github" />
            <a href="https://github.com/milkgan" target="_blank">https://github.com/milkgan</a>
        </li>
        <li>
            <Icon type="mail" />
            <a href="mailto:394717060@qq.com">666666666@qq.com</a>
            <div></div>
        </li>
        <li>
            <Icon type="qq" />
            <div>666666666</div>
        </li>
        <li>
            <Icon type="weixin" />
            <div>milkgan</div>
        </li>
    </ul>
    
</template>

<script>
import Icon from "@/components/Icon";
export default {
    components: {
        Icon
    }
    
}
</script>

<style lang="less" scoped>
    @import "~@/styles/global.less";
    .contact-container {
        margin: 0;
        padding: 0;
        list-style: none;
        color: @lightWords;
        font-size: 14px;
        li {
            margin: 2px 0;
            display: flex;
            height: 36px;
            line-height: 36px;
            &:hover {
                background-color: darken(@gray, 50%);
                color: #fff;
            }
            a:hover {
                color: #fff;
            }
        }
    }
    .icon-container {
        font-size: 26px;
        margin-right: 10px;
        margin-left: 20px;
    }

</style>