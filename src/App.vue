<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <SiteAside />
      </template>
      <router-view></router-view>
      <!-- <template #right>
        <div>123</div>
      </template> -->
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
  height: 100%;
}
</style>