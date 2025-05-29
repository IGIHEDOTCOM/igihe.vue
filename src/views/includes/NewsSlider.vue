<template>
  <div class="news-slider" v-if="newsItems && newsItems.length">
    <div class="news-slider-track" :style="{ animationDuration: animationDuration + 's' }">
      <div class="news-item" v-for="(news, index) in newsItems" :key="index">
        {{ news }}
      </div>
      <!-- Duplicate for seamless scroll -->
      <div class="news-item" v-for="(news, index) in newsItems" :key="'dup-' + index">
        {{ news }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsSlider",
  props: {
    newsItems: {
      type: Array,
      required: true,
    },
    animationDuration: {
      type: Number,
      default: 20, // seconds, you can adjust scroll speed by passing this prop
    },
  },
};
</script>

<style scoped>
.news-slider {
  overflow: hidden;
  white-space: nowrap;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  padding: 0.5rem 0;
  margin-top: 10px;
}

.news-slider-track {
  display: inline-flex;
  animation-name: scroll-left;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 20s; /* default overridden by inline style */
}

.news-item {
  display: inline-block;
  padding: 0 2rem;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
  border-right: 1px solid #ccc;
}

.news-item:last-child {
  border-right: none;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
