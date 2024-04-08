<template>
  <div class="image" :style="{backgroundImage: `url(${url})`}"></div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.image{
  margin-top: 40px;
  height: 300px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>