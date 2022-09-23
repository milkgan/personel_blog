<template>
    <div class="site-aside-container">
        <div class="self">
            <Avatar :url="img_url" />
            <h1>self name</h1>
        </div>
        <Menu />
        <Contact />
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu"; 
import Contact from "./Contact"; 
export default {
    components: {
        Avatar,
        Menu,
        Contact
    },
    data() {
        return {
            img_url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp163720566.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666516250&t=7a29439a903d845a6e04d6d756bf01ef'
        }
    }
}
</script>

<style lang="less" scoped>
    .site-aside-container {
        width: 100%;
        height: 100%;
        background-color: #000;
        .self {
            text-align: center;
            padding: 30px 0;
        }
        .menu-container {
            margin-bottom: 100px;
        }
    }
</style>