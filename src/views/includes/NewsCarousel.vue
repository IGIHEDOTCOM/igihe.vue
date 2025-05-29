<template>
  <div class="container mt-3"> <!-- Bootstrap container for consistent width -->
    <Swiper
      ref="swiperRef"
      :modules="modules"      
      :slides-per-view="3"
      :space-between="20"
      :loop="true"
      :loopedSlides="newsItems.length"
      :slides-per-group="1"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :speed="600"      
      
      class="news-carousel"
      
    >
      <SwiperSlide
        v-for="(news, index) in newsItems"
        :key="index"
        class="news-slide"
      >
        <div class="news-item d-flex align-items-center gap-3 p-3 bg-light rounded shadow-sm">
          <img
            :src="news.thumbnail"
            alt="thumbnail"
            class="news-thumb rounded"
            v-if="news.thumbnail"
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
import { Autoplay ,  Navigation} from 'swiper'

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

onMounted(() => {
  swiperRef.value?.swiper.autoplay.start()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');

.news-slide {
  box-sizing: border-box;
  width: 300px !important;  /* fixed width */
  height: 110px;            /* fixed height matching content */
  display: flex;            /* enable flex so .news-item fills slide */
}

.news-item {
  box-sizing: border-box;
  width: 100%;              /* fill slide width */
  height: 100%;             /* fill slide height */
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
}

.news-carousel {
  width: 100%;
  padding: 0.5rem 0;
}


.news-thumb {
  width: 80px;
  height: 60px;
  object-fit: cover;
  flex-shrink: 0;
}

.news-content h3 {
  font-family: 'Raleway', sans-serif;
  font-weight: 600; /* or whatever weight you want */
  font-size: 1rem;
  margin: 0 0 0.25rem 0;
}


.news-content p {
  margin-bottom: 0;
}/* Navigation arrow styles */
.news-carousel {
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin-top: -1.25rem;
  z-index: 10;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.8);
  color: #6c757d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0,0,0,0.15);
}

.swiper-button-prev {
  left: 0;
  padding-left: 0.25rem;
}

.swiper-button-next {
  right: 0;
  padding-right: 0.25rem;
}
</style>
