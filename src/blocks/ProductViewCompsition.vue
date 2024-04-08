<template>
  <div class="composition">
    <div class="composition-text" ref="compositionText">{{composition}}</div>
    <div ref="showMoreButton">
      <lined-button class="show-more" @click="showMore">Читать полностью</lined-button>
    </div>
  </div>
</template>

<script>
import VText from "@/components/text/VText";
import LinedButton from "@/components/buttons/LinedButton";
export default {
  components: {LinedButton, VText},
  props: {
    composition: {
      type: String,
      required: true
    },
    lifetime: {
      type: String,
      required: true
    },
  },
  methods: {
    showMore() {
      this.$refs.compositionText.style.height = 'auto';
      this.$refs.showMoreButton.style.display = 'none';
    }
  }
}
</script>

<style scoped>
.composition{
  position: relative;
}
.composition-text{
  font-size: 14px;
  height: 50px;
  overflow-y: hidden;
}
.show-more{
  position: absolute;
  right: 0;
  margin-top: -15px;
  font-size: 14px;
}
</style>