<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
    components: {
        Contact
    }


};
</script>

<style lang="less" scoped>
.test-container {
  width: 300px;
  height: 600px;
  background-color: #000;
}
</style>