<template>
    <div class="home-container">
        <div @click="test">首页</div>
        <!-- <div class="message message-info">
            <span class="icon">
                <Icon :type="'success'"/>
            </span>
            <div>测试测试测试</div>
        </div> -->
    </div>
    
</template>

<script>
// import axios from "axios";
import {getBanners} from "@/api/banner";
// import Icon from "@/components/Icon";
export default {
    // components: {
    //     Icon
    // },
    data() {
        return {
            banner: '',
        }
    },
    methods: {
        async test() {
            this.banner = await getBanners();
            console.log(666)
            console.log(this.banner)
            // axios.get("/api/banner").then((res) => {
            //     console.log(res)
            // })
        }
        // test() {
        //     console.log(getBanners())
        // }
    }
}
</script>

<style lang="less" scoped>
// @import "~@/styles/mixin.less";
// @import "~@/styles/var.less";
// .home-container {
//     border: 1px solid #000;
//     margin: 100px;
//     height: 400px;
//     position: relative;
// }

</style>