<template>
    <ul class="contact-container">
        <li>
            <Icon type="github" />
            <a :href="data.github" target="_blank">{{ data.github }}</a>
        </li>
        <li>
            <Icon type="mail" />
            <a :href="`mailto:${data.mail}`">{{ data.mail }}</a>
            <div></div>
        </li>
        <li>
            <Icon type="qq" />
            <div>{{ data.qq }}</div>
        </li>
        <li>
            <Icon type="weixin" />
            <div>{{ data.weixin }}</div>
        </li>
    </ul>
    
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
    components: {
        Icon
    },
    computed: mapState("setting", ["data"])
    
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