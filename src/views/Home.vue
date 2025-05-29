<template>
  <HeaderLayout />
  <div class="container-lg" style="background:#FFF;">
    <NewsCarousel :newsItems="newsItems"/>
    <div class="row mt-4">
      <!-- Left Column: Featured Article -->
      <div class="col-md-6">
        <div
          id="homeCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div class="carousel-inner">
            <div
              v-for="(article, index) in articles"
              :key="index"
              :class="['carousel-item', { active: index === currentIndex }]"
            >
              <img
                :src="article.img"
                class="d-block w-100"
                :alt="article.title"
                style="max-height: 400px; object-fit: cover;"
              />
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <small class="text-light">{{ article.meta }}</small>
                <h5 class="text-white">{{ article.title }}</h5>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
            @click.prevent="prevSlide"
          >
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
            @click.prevent="nextSlide"
          >
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- Right Column: Article List -->
      <div class="col-md-3">
        <div class="article-listing">
            <div v-for="(article, index) in articles" :key="index" class="article-item" @click="goToSlide(index)" :class="{ active: index == currentIndex }">
                <small class="article-date">{{ article.meta }}</small>
                <h5 class="article-title">{{ article.title }}</h5>
                <hr class="article-separator" />
            </div>
        </div>       
      </div>
      <div class="col-md-3">
        <div class="row">
            <img src="https://new.igihe.com/wp-content/uploads/2025/05/ads-rect-01.gif" style="width:100%;">
        </div>
        <div class="row">
            <div class="article-listing">
                <div v-for="(article, index) in articles2" :key="index" class="article-item" :class="{ active: index == currentIndex }">
                    <small class="article-date">{{ article.meta }}</small>
                    <h5 class="article-title">{{ article.title }}</h5>
                    <hr class="article-separator" />
                </div>
            </div>       
        </div>
      </div>
    </div>
    <div class="row" style="overflow:hidden;max-height:90px;">
        <div class="col-lg-6">
            <img src="https://new.igihe.com/wp-content/uploads/2025/05/ads-1-1024x137.gif" style="width:100%;">
        </div>
        <div class="col-lg-6">
            <img src="https://new.igihe.com/wp-content/uploads/2025/05/ads-2.gif" style="width:100%;">
        </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import HeaderLayout from './includes/HeaderLayout.vue'
import NewsCarousel from './includes/NewsCarousel.vue'
import Footer from './includes/Footer.vue'

import * as bootstrap from 'bootstrap'


export default {
  name: 'Home',
  components: { HeaderLayout, NewsCarousel , Footer},
  data() {
    return {
      currentIndex: 0,
      articles2: [
        {
          img: 'https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg',
          meta: 'Posted by Admin | May 29, 2025',
          title: 'Kabila visits AFC/M23 training base in Rumangabo',
        },        
        {
          img: 'https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg',
          meta: 'Posted by Jane Smith | May 27, 2025',
          title: 'Kabila visits AFC/M23 training base in Rumangabo',
        }
      ],
      articles: [
        {
          img: 'https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg',
          meta: 'Posted by Admin | May 29, 2025',
          title: 'Kabila visits AFC/M23 training base in Rumangabo',
        },
        {
          img: 'https://new.igihe.com/wp-content/uploads/2025/05/77015a93dd5b98ae08940145aa5832-1-300x189.jpg',
          meta: 'Posted by John Doe | May 28, 2025',
          title: 'Rwanda s four genocide memorials listed as World Heritage sites recorded over 190,000 visitors in 2024',
        },
        {
          img: 'https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg',
          meta: 'Posted by Jane Smith | May 27, 2025',
          title: 'Kabila visits AFC/M23 training base in Rumangabo',
        },
        {
          img: 'https://new.igihe.com/wp-content/uploads/2025/05/kjoi-902d8-1-300x158.jpg',
          meta: 'Posted by Jane Smith | May 27, 2025',
          title: 'It was a joke’: President Macron shrugs off viral push from wife',
        }      
      ],
      newsItems: [
        {
          title: "Xi says China ready to work with Germany to open new chapter in all-round strategic partnership",
          summary: "May 20th, 2024",
          thumbnail: "https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg"
        },
        {
          title: "Breaking News: Market hits all-time high",
          summary: "May 20th, 2024",
          thumbnail: "https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg"
        },
        {
          title: "Breaking News: Market hits all-time high",
          summary: "May 20th, 2024",
          thumbnail: "https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg"
        },
        {
          title: "Breaking News: Market hits all-time high",
          summary: "May 20th, 2024",
          thumbnail: "https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg"
        },
        // ... other news items ...
      ]
    }
  },
  computed: {
    currentArticle() {
      return this.articles[this.currentIndex];
    }
  },
  methods: {
    goToSlide(index) {
      this.currentIndex = index    
      // Trigger carousel slide manually
      const carousel = bootstrap.Carousel.getInstance(
        document.getElementById('homeCarousel')
      )
      if (carousel) carousel.to(index)
    },
    prevSlide() {
      const carousel = bootstrap.Carousel.getInstance(
        document.getElementById('homeCarousel')
      )
      if (carousel) carousel.prev()
    },
    nextSlide() {
      const carousel = bootstrap.Carousel.getInstance(
        document.getElementById('homeCarousel')
      )
      if (carousel) carousel.next()
    },
  },  
  mounted() {
    // Initialize Bootstrap Carousel
    // Sync carousel slide event with currentIndex
    document.getElementById('homeCarousel').addEventListener('slide.bs.carousel', (e) => {
        this.currentIndex = e.to
    })
  },
}
</script>

<style scoped>
.list-group-item.active {
  background-color: #0d6efd;
  border-color: #0d6efd;
  color: white;
  font-weight: 600;
}
.carousel-item img {
  height: 400px;           /* fixed height */
  width: 100%;             /* fill the carousel width */
  object-fit: cover;       /* crop/scale the image to cover area */
  object-position: center; /* center the image */
}
.article-listing {
  display: flex;
  flex-direction: column;
  gap: 0;
  cursor: pointer;
}

.article-item {
  padding: 10px 5px;
}

.article-date {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 2px;
  display: block;
}

.article-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  margin: 0;
}

.article-separator {
  margin: 8px 0 0 0;
  border: none;
  border-top: 1px solid #ddd;
}

/* Highlight active article */
.article-item.active {
  background-color: #e9f0ff;
}

</style>
