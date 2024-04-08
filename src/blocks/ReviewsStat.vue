<template>
  <div class="reviews">
    <div class="stat">
      <v-button class="rating-button">{{review.rating}}</v-button>
      <div>
        <div class="stat-recommend">{{review.recommendPercent}} рекомендует</div>
        <div class="stat-reviews">{{review.reviewsCount}}</div>
      </div>
    </div>
    <v-button outline>Оставить отзыв</v-button>
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
.reviews{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.stat{
  display: flex;
  align-items: center;
}
.rating-button{
  margin-right: 10px;
}
.stat-recommend{
  font-size: 16px;
  margin-bottom: 5px;
}
.stat-reviews{
  font-size: 12px;
  color: var(--grey);
}
</style>