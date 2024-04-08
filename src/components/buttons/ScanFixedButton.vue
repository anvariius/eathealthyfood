<template>
  <div class="button">
    <div class="button-text" @click="addFile">+</div>
  </div>
  <input type="file" class="file-input" ref="fileInput">
</template>

<script>
export default {
  methods: {
    addFile() {
      this.$refs.fileInput.click();
    }
  },
  mounted() {
    const that = this;
    this.$refs.fileInput.addEventListener('change', function () {
      that.$emit('changeProduct');
    });
  }
}
</script>

<style scoped>
.button{
  position: fixed;
  right: 20px;
  bottom: 20px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  border-radius: 100%;
  opacity: 1;
  transition: 0.3s;
  border: 2px solid #fff;
}
.button-text{
  font-size: 40px;
  line-height: 1;
  color: var(--white);
  margin-bottom: 5px;
}
.file-input{
  display: none;
}
.button:hover{
  opacity: 0.8;
}
</style>