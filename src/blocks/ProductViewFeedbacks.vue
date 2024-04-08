<template>
  <div class="feedbacks">

  </div>
</template>

<script>
import VButton from "@/components/buttons/VButton";
export default {
  components: {VButton},
  props: {
    review: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>