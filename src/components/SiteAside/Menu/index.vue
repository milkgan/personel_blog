<template>
  <div class="menu-container">
    <router-link
      v-for="nav in navigation"
      :key="nav.name"
      :exact="nav.exact"
      :to="{ name: nav.name }"
      active-class="active"
    >
      <Icon :type="nav.icon" />{{ nav.title }}
    </router-link>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: { Icon },
  data() {
    return {
      navigation: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true, // 激活状态是否要精确匹配
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        // {
        //   name: "About",
        //   title: "关于我",
        //   icon: "about",
        //   exact: true,
        // },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        // {
        //   name: "Message",
        //   title: "留言板",
        //   icon: "chat",
        //   exact: true,
        // },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  color: @lightWords;
  a {
    padding: 10px 30px;
    display: block;
    &:hover,
    &.active {
      background-color: darken(@gray, 50%);
      color: #fff;
    }
  }
}
.icon-container {
  margin-right: 6px;
  font-size: 20px;
}
</style>