<template>
    <div class="site-aside-container">
        <div class="self" v-if="data">
            <Avatar :url="data.avatar" />
            <h1>self name</h1>
        </div>
        <Menu />
        <Contact v-if="data" />
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu"; 
import Contact from "./Contact"; 
import { mapState } from "vuex";
export default {
    components: {
        Avatar,
        Menu,
        Contact
    },
    computed: mapState("setting", ["data"])
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