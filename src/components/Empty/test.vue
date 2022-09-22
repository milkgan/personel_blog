<template>
    <div class="test-container">
        <Empty text="测试"/>
    </div>
</template>

<script>
import Empty from './';
export default {
    components: {
        Empty
    }   
}
</script>

<style scoped>
.test-container {
    width: 400px;
    height: 400px;
    border: 1px solid #000;
    position: relative;
}
</style>