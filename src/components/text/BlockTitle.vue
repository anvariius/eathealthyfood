<template>
  <div class="block">
    <div class="line"></div>
    <div class="title">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.block{
  margin-bottom: 10px;
}
.line{
  margin-bottom: 5px;
  height: 1px;
  background-color: var(--lightgrey);
}
.title{
  font-size: 14px;
  font-weight: 500;
  color: var(--grey);
}
</style>