<template>
  <div class="hero-carousel">
    <div
      class="carousel-slide"
      v-for="(article, idx) in visibleArticles"
      :key="article.id_article"
      v-show="idx === currentIndex"
    >
      <img :src="article.image" :alt="article.titre" class="hero-image" />
      <div class="hero-caption">
        <h2>{{ article.titre }}</h2>
      </div>
    </div>
    <button @click="prev" class="carousel-btn prev">&lt;</button>
    <button @click="next" class="carousel-btn next">&gt;</button>
    <div class="carousel-dots">
      <span
        v-for="(article, idx) in visibleArticles"
        :key="article.id_article"
        :class="{ active: idx === currentIndex }"
        @click="goTo(idx)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCarousel',
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      interval: null
    }
  },
  computed: {
    visibleArticles() {
      return this.articles
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.visibleArticles.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.visibleArticles.length) %
        this.visibleArticles.length;
    },
    goTo(idx) {
      this.currentIndex = idx;
    }
  },
  mounted() {
    this.interval = setInterval(this.next, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
}
</script>

<style scoped>
    .hero-carousel {    
        position: relative;
        width: 100%;
        max-width: 900px;
        margin: auto;
        overflow: hidden;
        min-height: 400px;
        height:auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #000;
        color: #fff;
    }
    .carousel-slide {
        /*display: none;*/    
        position: absolute;
        width: 100%;
        height: 400px;
    }
    .carousel-slide[v-show="true"] {
        display: block;
        position: relative;
    }
    .hero-image {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    .hero-caption {
        position: absolute;
        bottom: 30px;
        left: 40px;
        color: #fff;
        background: rgba(0,0,0,0.4);
        padding: 20px;
        border-radius: 8px;
    }
    .carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0,0,0,0.3);
        color: #fff;
        border: none;
        font-size: 2rem;
        padding: 0 15px;
        cursor: pointer;
        z-index: 2;
    }
    .carousel-btn.prev { left: 10px; }
    .carousel-btn.next { right: 10px; }
    .carousel-dots {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
    }
    .carousel-dots span {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin: 0 4px;
        background: #fff;
        border-radius: 50%;
        opacity: 0.5;
        cursor: pointer;
    }
    .carousel-dots .active {
        opacity: 1;
        background: #2196f3;
    }
</style>