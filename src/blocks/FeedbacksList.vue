<template>
  <div class="feedbacks">
    <div class="f-item" v-for="(fb, key) in feedbacks" :key="key">
      <div class="f-head">
        <img :src="fb.pic" class="f-image" alt="">
        <div>
          <div class="f-name">{{fb.name}}</div>
          <div class="f-stars"></div>
        </div>
      </div>
      <div class="f-body">
        <div class="f-title">Комментарий</div>
        <div class="f-text">{{fb.comment}}</div>
        <lined-button class="f-read-more">Читать полностью</lined-button>
      </div>
    </div>
  </div>
</template>

<script>
import LinedButton from "@/components/buttons/LinedButton";
export default {
  components: {LinedButton},
  props: {
    feedbacks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.f-item{
  margin-bottom: 20px;
}
.f-head{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.f-image{
  min-width: 40px;
  height: 40px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  margin-right: 10px;
}
.f-name{
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
}
.f-stars{
  width: 75px;
  height: 15px;
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
  background-image: url(@/assets/img/stars.svg);
}
.f-title{
  font-size: 12px;
  font-weight: 600;
}
.f-text{
  font-size: 14px;
  height: 30px;
}
.f-body{
  position: relative;
}
.f-read-more{
  position: absolute;
  right: 0;
  margin-top: -10px;
}
</style>