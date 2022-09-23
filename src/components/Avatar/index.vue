<template>
  <!-- 头像组件 -->
  <img
    class="avatar-container"
    :style="{ width: size + 'px', height: size + 'px' }"
    :src="url"
    alt="avatar"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>


<style lang="less" scoped>
.avatar-container {
  border-radius: 50%;
}
</style>