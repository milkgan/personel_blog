<template>
  <!-- 文章详情目录 -->
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toSwitchToc" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
import { debounce } from "@/utils";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeAnchor: "", // 被选中的锚点
    };
  },
  created() {
    // 函数防抖处理
    this.setSelectDebounce = debounce(this.setSelect, 50);
    // 监听文章详情滚轮滑动，对应锚点位置高亮显示
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  computed: {
    /* 根据toc属性以及activeAnchor得到带有isSelect属性的数组 */
    toSwitchToc(){
        // 防止t.children为undefined,所以需要给toc一个[]默认值
        const getToc = (toc=[]) => {
            return toc.map((t) => ({
                ...t,
                isSelect: t.anchor === this.activeAnchor,
                children: getToc(t.children)
            }))
        };
        return getToc(this.toc)
    },
     /* 根据toc得到它们对应的元素数组 */
    doms() {
      const doms = [];
      const addDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if(t.children && t.children.length) {
            addDoms(t.children)
          }
        }
      };
      addDoms(this.toc)
      return doms;
    },
  },
  
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    /* 设置选中效果 */
    setSelect(scrollDom) {
        if(!scrollDom) {
            return;
        }
        this.activeAnchor = ""; // 清空状态
        // 设置范围
        const range = 200;
        // 确定dom元素是不是该被选中
        for(let dom of this.doms) {
            if(!dom) {
                continue;
            }
            // 确定dom元素离视口顶部的距离
            const top = dom.getBoundingClientRect().top;
            if (top >= 0 && top <= range) {
               // 在规定的范围内 
               this.activeAnchor = dom.id;
               return;
            }else if (top > range) {
                // 在规定的范围下方
                return;
            }else {
                // 在规定的范围上方
                this.activeAnchor = dom.id; // 先假设自己是激活的，然后继续看后面,这里不应该再return
            }
        }  
    },
  },
};
/* 
根据父组件的滑动，确定滑动文章详情的标题id的大概位置，给定一个范围
首先需要获取对应dom元素的位置，然后根据位置进行判断
然后赋予对应的值
防抖
然后再将处理组装过的的toc数据传给目录列表组件
*/
</script>

<style lang="less" scoped>
.blog-toc-container {
  h2 {
    text-align: center;
  }
}
</style>