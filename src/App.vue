<template>
  <div class="test-container">
    <Layout>
      <template slot="left">
        <SiteAside />
      </template>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
// 布局组件
import Layout from "@/components/Layout";
// 网站侧边栏组件
import SiteAside from "@/components/SiteAside";
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style lang="less" >
html {
  height: 100%;
}
body {
  height: 100%;
}
.test-container {
  width: 260px;
  height: 100%;
}
</style>