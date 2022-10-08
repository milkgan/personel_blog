<template>
    <div class="project-container">
        <div class="project-item" v-for="item in data" :key="item.id">
            <a :href="item.url ? item.url : `javascript:alert('该项目暂时无法通过外网访问')`" :target="item.url ? `_blank` : `_self`">
                <img class="thumb" :src="item.thumb" :alt="item.name">
            </a>
            
            
            <div class="info">
                <a :href="item.url ? item.url : `javascript:alert('该项目暂时无法通过外网访问')`" :target="item.url ? `_blank` : `_self`">
                <h2>{{ item.name }}</h2>
                </a>
                <a class="github" target="_blank" :href="item.github" v-if="item.github">github地址</a>
                
                <p v-for="(desc, i) in item.description" :key="i">
                    {{ desc }}
                </p>
            </div>

        </div>
        
    </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getProjects } from "@/api/project";
export default {
     mixins: [fetchData([])],
     methods: {
        async fetchData() {
            console.log(await getProjects())
            return await getProjects();
        },
    }
    
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    scroll-behavior: smooth;
}
.project-item {
    border: 1px solid @lightWords;
    border-radius: 10px;
    margin: 20px 30px;
    padding: 20px;
    display: flex;
    &:hover {
        box-shadow: -1px 1px 5px rgba(0, 0, 0, .5);
        transform: scale(1.01) translate(3px, -3px);
    }
}
.thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
}
.info {
    h2 {
        margin: 0 0 10px;
    }
}
.github {
    font-size: 14px;
    color: @primary;
  }

</style>