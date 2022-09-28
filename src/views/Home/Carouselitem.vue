<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- 图片 -->
    <div class="carousel-img" ref="image" :style="imgPosition">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.smallImg"
        :alt="carousel.title"
        @load="showWords"
      />
    </div>
    <!-- 标题和描述 -->
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>


<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  components: {
    ImageLoader,
  },
  props: {
    carousel: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      containerSize: null, // 容器宽高
      innerSize: null, // 图片宽高
      mouseX: 0, // 鼠标横坐标
      mouseY: 0, // 鼠标纵坐标
      // containerReact: null
      titleWidth: 0,
      descWidth: 0,
    };
  },
  computed: {
    // 容器中心点位置
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
    // 图片定位
    imgPosition() {
      if (!this.containerSize || !this.innerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;
      const left = -(extraWidth / this.containerSize.width) * this.mouseX;
      const top = -(extraHeight / this.containerSize.height) * this.mouseY;
      return { transform: `translate(${left}px, ${top}px)` };
    },
  },
  mounted() {
    // 获取容器宽高
    this.containerSize = {
      width: this.$refs.container.clientWidth,
      height: this.$refs.container.clientHeight,
    };
    // 获取图片宽高
    this.innerSize = {
      width: this.$refs.image.clientWidth,
      height: this.$refs.image.clientHeight,
    };
    // 获取容器相对于视口等信息
    // ！！！这句话写在这里，对于多张图的this.containerReact.top会有问题
    // this.containerReact = this.$refs.container.getBoundingClientRect();
    // 设置中心点
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.test);
    // 保存到标题和描述的初始宽度
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
  },
  methods: {
    // 鼠标移入时获取鼠标位置
    handleMouseMove(e) {
      // this.mouseX = e.clientX - this.containerReact.left;
      // this.mouseY = e.clientY - this.containerReact.top;
      const containerReact = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - containerReact.left;
      this.mouseY = e.clientY - containerReact.top;
    },
    // 鼠标移出时，归位
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
    // 图片加载完显示标题和描述
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 先截断，重新渲染，将上面两个属性先设置上
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // 先截断，重新渲染，将上面两个属性先设置上
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
  },
};
/* 
先是放大图片容器，获取到容器尺寸以及图片尺寸
获取到中心点的位置
获取到鼠标的位置
根据鼠标移动对应比例的距离
*/
/* 
首先先设置文字基本样式
获取到原来文字的宽度
动画将文字从透明度0变成1，宽度由0变成原来的宽度
*/
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
}
@shadow_color: rgba(0, 0, 0, 0.5);
.title,
.desc {
  position: absolute;
  left: 30px;
  color: #fff;
  letter-spacing: 2px;
  // ========显示打字效果的关键===========
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  // ===================================
  text-shadow: 1px 0 0 @shadow_color, -1px 0 0 @shadow_color,
    0 1px 0 @shadow_color, 0 -1px 0 @shadow_color;
}
.title {
  top:calc(50% - 60px);
  font-size: 2em;
}
.desc {
  top:calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 10%);
}
</style>