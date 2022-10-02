<template>
  <!-- 评论提交表单组件 -->
  <form class="data-form-container" @submit.prevent="handleSubmit" ref="form">
    <!-- 用户名输入 -->
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          maxlength="10"
          v-model="formData.nickname"
          placeholder="请输入昵称"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">
        {{ error.nickname }}
      </div>
    </div>
    <!-- 评论内容输入 -->
    <div class="form-item">
      <div class="text-area">
        <textarea
          maxlength="300"
          v-model="formData.content"
          placeholder="请输入内容"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">
        {{ error.content }}
      </div>
    </div>
    <!-- 提交按钮 -->
    <div class="form-item">
      <button :disabled="isSubmiting">
        {{ isSubmiting ? "提交中..." : "提交" }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isSubmiting: false,
    };
  },
  methods: {
    handleSubmit() {
      // 检查
      this.error.nickname = this.formData.nickname ? "" : "请填写昵称";
      this.error.content = this.formData.content ? "" : "请填写评论内容";
      if (this.error.nickname || this.error.content) {
        return;
      }
      // 正在提交，防止重复点击
      this.isSubmiting = true;
      // 通知父组件处理评论提交事件
      this.$emit("submit", this.formData, (successMsg) => {
        this.$showMessage({
          content: successMsg,
          type: "success",
          duration: 1000,
          container: this.$refs.form,
          callback: () => {
            this.formData.nickname = "";
            this.formData.content = "";
            this.isSubmiting = false;
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.data-form-container {
  margin-bottom: 30px;
}
.form-item {
  width: 80%;
  margin: 20px 30px;
}
.input-area {
  width: 50%;
  position: relative;
}
.text-area {
  width: 80%;
  position: relative;
}
.tip {
  color: @lightWords;
  font-size: 12px;
  position: absolute;
  right: -36px;
  bottom: 6px;
}
.error {
  color: @danger;
  font-size: 12px;
  line-height: 20px;
  height: 20px;
}
button {
  width: 100px;
  color: #fff;
  border: none;
  text-align: center;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 4px;
  background-color: @primary;
  cursor: pointer;
  &:disabled {
    background-color: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
input,
textarea {
  width: 100%;
  outline: none;
  border: 1px dashed @gray;
  font-size: 14px;
  line-height: 16px;
  padding: 10px 20px;
  border-radius: 4px;
  color: @words;
}
textarea {
  height: 120px;
  resize: none;
}
</style> 