<template>
  <div class="warnings">
    <div class="warning-item" v-for="(warn, key) in warnings" :key="key">
      <v-button danger outline>{{warn}}</v-button>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/buttons/VButton";
export default {
  components: {VButton},
  props: {
    warnings: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.warnings{
  display: flex;
  flex-wrap: wrap;
}
.warning-item{
  margin-right: 10px;
}
</style>