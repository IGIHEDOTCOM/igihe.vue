<template>
  <div class="container mt-3">
    <Swiper
      ref="swiperRef"
      :modules="modules"
      :slides-per-view="3"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :speed="600"
      :keyboard="false"
      :mousewheel="false"
      class="news-carousel"
    >
      <SwiperSlide
        v-for="(news, index) in newsItems"
        :key="index"
        class="news-slide"
      >
        <div class="news-item d-flex align-items-center gap-3 p-3 bg-light rounded shadow-sm">
          <img
            :src="news.img"
            alt="thumbnail"
            class="news-thumb rounded"
            v-if="news.img"
          />
          <div class="news-content">
            <h3 class="h6 mb-1">{{ news.title }}</h3>
            <p class="mb-0 text-muted small">{{ news.summary }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const modules = [Autoplay, Navigation]

const props = defineProps({
  newsItems: {
    type: Array,
    required: true
  }
})

const swiperRef = ref(null)

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');

.news-carousel {
  width: 100%;
}

.news-slide {
  box-sizing: border-box;
  width: 300px !important;
  height: 110px;
  display: flex;
  overflow: hidden;
  max-height: 110px;
}

.news-item {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  overflow: hidden;
}

.news-content {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow: hidden;
}

.news-content h3,
.news-content p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}

.news-content h3 {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0 0.25rem 0;
  line-height: 1.2;
}

.news-thumb {
  width: 80px;
  height: 60px;
  object-fit: cover;
  flex-shrink: 0;
}
</style>
