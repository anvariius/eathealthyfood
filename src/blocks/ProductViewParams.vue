<template>
  <div class="params">
    <div
        class="param"
        v-for="(param, key) in params"
        :key="key"
    >
      <div class="value">{{param}}</div>
      <div class="name">{{key}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.params{
  display: flex;
  justify-content: space-between;
}
.param{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.value{
  font-size: 18px;
}
</style>