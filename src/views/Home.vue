<template>
  <HeaderLayout />
  <div class="container-lg bg-light">
    <div class="row mt-4 position-relative">
      <div class="col-lg-12">
        <NewsCarousel :newsItems="latestArticles" />
      </div>
    </div>
  </div>
  <div class="container-lg" style="background:#FFF;">
     
    <div class="row mt-4 position-relative">
      <!-- Left Column: Featured Article -->
      <div class="col-md-6 position-relative">
        <div
          id="homeCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div class="carousel-inner">
            <div
              v-for="(article, index) in latestArticles"
              :key="article.id"
              :class="['carousel-item', { active: index === currentIndex }]"
            >
              <img
                :src="article.img"
                class="d-block w-100"
                :alt="article.title"
                style="max-height: 400px; object-fit: cover;"
              />
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <small class="text-light">{{ article.date }}</small>
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
        <!-- Vertical Carousel Indicator -->
        <div class="carousel-indicator-vertical d-none d-md-flex flex-column align-items-center justify-content-center">
          <div
            v-for="(article, idx) in latestArticles"
            :key="'dot-'+idx"
            :class="['carousel-dot', { active: idx === currentIndex }]"
            @click="goToSlide(idx)"
            style="cursor:pointer"
          ></div>
        </div>
      </div>
      <!-- Right Column: Article List -->
      <div class="col-md-3">
        <div class="article-listing">
            <div
              v-for="(article, index) in latestArticles"
              :key="article.id"
              class="article-item"
              @click="goToSlide(index)"
              :class="{ active: index == currentIndex }"
            >
              <small class="article-date">{{ article.date }}</small>
              <h5 class="article-title">{{ article.title }}</h5>
              <hr class="article-separator" />
            </div>
        </div>       
      </div>
      <!-- Ad Banner and Main Articles Column -->
      <div class="col-md-3">
        <div class="row">
          <div class="ad-box mb-2">
            <span class="ad-label">ADVERTISEMENT</span>
            <img src="https://new.igihe.com/wp-content/uploads/2025/05/ads-rect-01.gif" style="width:100%;">
          </div>
        </div>
        <!-- Main articles under the ad -->
        <div class="main-articles-list w-100 mt-3">
          <div
            v-for="article in mainArticles"
            :key="article.id"
            class="main-article-item mb-3 p-2 bg-white rounded shadow-sm"
            style="overflow: hidden;"
          >
            <img
              v-if="article.img"
              :src="article.img"
              alt="thumbnail"
              class="main-article-thumb-float me-3 mb-2"
            />
            <small class="text-muted">{{ article.date }}</small>
            <div class="fw-bold">{{ article.title }}</div>
            <div class="text-muted small">{{ article.chapo }}</div>
          </div>
        </div>
        <div class="row">       
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
    <div class="row">
      <div class="col-lg-9">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="ele-header-title">INKURU ZIHERUKA</h1>
            <Ziheruka :item="ziherukaItems" />
          </div>
          <div class="col-lg-9">            
            <h1 class="ele-header-title">&nbsp;</h1>
            <Featured/>
            <BR/>
            <!---- LIST OF ADS AND MODULES -->
            <div class="row">
              <div class="col-lg-6 d-flex flex-column align-items-center mb-3">
                <div class="ad-box mb-2">
                  <span class="ad-label">ADVERTISEMENT</span>
                  <img src="https://new.igihe.com/wp-content/uploads/2025/06/ac3372dded2230d796aecf1b3bba92b7eeef639a.gif" style="width:100%;">
                </div>
              </div>
              <div class="col-lg-6 d-flex flex-column align-items-center mb-3">
                <div class="ad-box mb-2">
                  <span class="ad-label">ADVERTISEMENT</span>
                  <img src="https://new.igihe.com/wp-content/uploads/2025/06/82bd56c8d1020fa0e55f0d6eff98d280e3b4e262.gif" style="width:100%;">
                </div>
              </div>
            </div>
            <div class="row">
              <img src="https://new.igihe.com/wp-content/uploads/2025/06/2236ef361f973aecb9ffcbfbb89d2d390ba6879e.png" style="width:200px;">
            </div>
            <div class="row">
              <div class="col-lg-4">              
                <div class="card mb-3 ziheruka-card" style="max-width: 100%;">
                  <img src="https://new.igihe.com/wp-content/uploads/2025/06/matama.webp" class="card-img-top ziheruka-thumb" alt="article"/>
                  <div class="card-body py-2 px-3 text-start d-flex flex-column">                  
                    <div class="d-flex align-items-center mb-1">
                      <span class="meta-divider"></span>
                      <small class="text-muted ms-2">June 2, 2025</small>
                    </div>
                    <h6 class="card-title mb-0 ziheruka-title">Tshisekedi’s reluctance to embrace peace: A barrier to regional stability</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="article-list-simple">
                      <div
                      v-for="(article, idx) in newsItems.slice(0, 3)"
                      :key="'simple-article-left-' + idx"
                      class="article-list-simple-item"
                      >
                        <div class="d-flex flex-column">
                          <small class="article-date">{{ article.meta }}</small>
                          <div class="article-title">{{ article.title }}</div>
                        </div>
                        <hr class="article-simple-separator" v-if="idx !== 2" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="article-list-simple">
                      <div
                      v-for="(article, idx) in newsItems.slice(3, 6)"
                      :key="'simple-article-right-' + idx"
                      class="article-list-simple-item"
                      >
                        <div class="d-flex flex-column">
                          <small class="article-date">{{ article.meta }}</small>
                          <div class="article-title">{{ article.title }}</div>
                        </div>
                        <hr class="article-simple-separator" v-if="idx !== 2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <img src="https://new.igihe.com/wp-content/uploads/2025/06/b8d3a170489c0dfe4499cb597d633f665e3fdf07.gif" style="width:100%; height: auto; max-height: 300px; object-fit: cover;">
              </div>
            </div>
<div class="row">
          <div class="col-lg-12">
            <br/>
            <img src="https://new.igihe.com/wp-content/uploads/2025/06/1fed67e700cb1551d06e2b3e83d1ac5296c74ef5.png" style="width:200px;"/>
            <br/>
          </div>
        </div>
        <div class="row">
            <div class="col-lg-4">              
              <div class="card mb-3 ziheruka-card" style="max-width: 100%;">
                <img src="https://new.igihe.com/wp-content/uploads/2025/06/matama.webp" class="card-img-top ziheruka-thumb" alt="article"/>
                <div class="card-body py-2 px-3 text-start d-flex flex-column">                  
                  <div class="d-flex align-items-center mb-1">
                    <span class="meta-divider"></span>
                    <small class="text-muted ms-2">June 2, 2025</small>
                  </div>
                  <h6 class="card-title mb-0 ziheruka-title">Tshisekedi’s reluctance to embrace peace: A barrier to regional stability</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-6">
                  <div class="article-list-simple">
                    <div
                      v-for="(article, idx) in newsItems.slice(0, 3)"
                      :key="'simple-article-left-' + idx"
                      class="article-list-simple-item"
                    >
                      <div class="d-flex flex-column">
                        <small class="article-date">{{ article.meta }}</small>
                        <div class="article-title">{{ article.title }}</div>
                      </div>
                      <hr class="article-simple-separator" v-if="idx !== 2" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="article-list-simple">
                    <div
                      v-for="(article, idx) in newsItems.slice(3, 6)"
                      :key="'simple-article-right-' + idx"
                      class="article-list-simple-item"
                    >
                      <div class="d-flex flex-column">
                        <small class="article-date">{{ article.meta }}</small>
                        <div class="article-title">{{ article.title }}</div>
                      </div>
                      <hr class="article-simple-separator" v-if="idx !== 2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              &nbsp;<br/>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 d-flex flex-column align-items-center mb-3">
              <div class="ad-box mb-2">
                <span class="ad-label">ADVERTISEMENT</span>
                <img src="https://new.igihe.com/wp-content/uploads/2025/06/ac3372dded2230d796aecf1b3bba92b7eeef639a.gif" style="width:100%;">
              </div>
            </div>
            <div class="col-lg-6 d-flex flex-column align-items-center mb-3">
              <div class="ad-box mb-2">
                <span class="ad-label">ADVERTISEMENT</span>
                <img src="https://new.igihe.com/wp-content/uploads/2025/06/82bd56c8d1020fa0e55f0d6eff98d280e3b4e262.gif" style="width:100%;">
              </div>
            </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <br/>
            <img src="https://new.igihe.com/wp-content/uploads/2025/06/7040b891258b4e8abca64b7d850a386de7723113.png" style="width:200px;"/>
            <br/>
          </div>
        </div>
        <div class="row">
            <div class="col-lg-4">              
              <div class="card mb-3 ziheruka-card" style="max-width: 100%;">
                <img src="https://new.igihe.com/wp-content/uploads/2025/06/matama.webp" class="card-img-top ziheruka-thumb" alt="article"/>
                <div class="card-body py-2 px-3 text-start d-flex flex-column">                  
                  <div class="d-flex align-items-center mb-1">
                    <span class="meta-divider"></span>
                    <small class="text-muted ms-2">June 2, 2025</small>
                  </div>
                  <h6 class="card-title mb-0 ziheruka-title">Tshisekedi’s reluctance to embrace peace: A barrier to regional stability</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-6">
                  <div class="article-list-simple">
                    <div
                      v-for="(article, idx) in newsItems.slice(0, 3)"
                      :key="'simple-article-left-' + idx"
                      class="article-list-simple-item"
                    >
                      <div class="d-flex flex-column">
                        <small class="article-date">{{ article.meta }}</small>
                        <div class="article-title">{{ article.title }}</div>
                      </div>
                      <hr class="article-simple-separator" v-if="idx !== 2" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="article-list-simple">
                    <div
                      v-for="(article, idx) in newsItems.slice(3, 6)"
                      :key="'simple-article-right-' + idx"
                      class="article-list-simple-item"
                    >
                      <div class="d-flex flex-column">
                        <small class="article-date">{{ article.meta }}</small>
                        <div class="article-title">{{ article.title }}</div>
                      </div>
                      <hr class="article-simple-separator" v-if="idx !== 2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
              <!--- LIST OF ADS AND MODULES -->

              
          </div>
        </div>        

          </div>
      </div>
      <div class="col-lg-3">
        <!-- Inkuru zikunzwe-->
         <h1 class="ele-header-title">INKURU ZIKUNZWE</h1>
        <!-- End inkuru zikunzwe -->
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
import Ziheruka from './includes/Ziheruka.vue'
import axios from 'axios'
import Featured from './includes/Featured.vue'

export default {
  name: 'Home',
  components: { HeaderLayout, NewsCarousel , Ziheruka, Footer, Featured },
  data() {
    return {
      currentIndex: 0,
      hoveredArticleIndex: null,
      articles: [],
      ziherukaItems: [],
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
      newsItems: [
        {
          title: "Xi says China ready to work with Germany",
          summary: "May 20th, 2024",
          thumbnail: "https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg",
          meta: "Posted by Admin | May 20, 2024"
        },
        {
          title: "Breaking News: Market hits all-time high",
          summary: "May 20th, 2024",
          thumbnail: "https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg",
          meta: "Posted by Jane Smith | May 20, 2024"
        },
        {
          title: "Breaking News: Market hits all-time high",
          summary: "May 20th, 2024",
          thumbnail: "https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg",
          meta: "Posted by John Doe | May 20, 2024"
        },
        {
          title: "Breaking News: Market hits all-time high",
          summary: "May 20th, 2024",
          thumbnail: "https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg",
          meta: "Posted by Admin | May 20, 2024"
        },
        {
          title: "Breaking News: Market hits all-time high",
          summary: "May 20th, 2024",
          thumbnail: "https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg",
          meta: "Posted by Jane Smith | May 20, 2024"
        },
        {
          title: "Breaking News: Market hits all-time high",
          summary: "May 20th, 2024",
          thumbnail: "https://new.igihe.com/wp-content/uploads/2025/05/DSC_7601-1024x682-1.jpg",
          meta: "Posted by John Doe | May 20, 2024"
        }
        // ... other news items ...
      ],
      mainArticles: []
    }
  },
  computed: {
    latestArticles() {
      // Only the 4 latest stories
      return this.articles.slice(0, 4)
    }
  },
  methods: {
    goToSlide(index) {
      this.currentIndex = index    
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
    // Fetch hero stories from API and adapt to new structure
    axios.get('https://en.igihe.com/api/articles?keyword=HomeHighlights')
      .then(response => {
        // Map the API response to the expected structure
        this.articles = (response.data || []).map(item => ({
          id: item.id_article,
          title: item.titre,
          date: item.date,
          img: item.image,
          chapo: item.chapo
        }))
      })
      .catch(error => {
        console.error('Failed to fetch hero stories:', error)
      })

    // Fetch main articles for the middle column
    axios.get('https://en.igihe.com/api/articles?keyword=Home_main_article&limit=1')
      .then(response => {
        this.mainArticles = (response.data || []).map(item => ({
          id: item.id_article,
          title: item.titre,
          date: item.date,
          img: item.image,
          chapo: item.chapo
        }))
      })
      .catch(error => {
        console.error('Failed to fetch main articles:', error)
      })

    // Fetch for Ziheruka
    axios.get('https://en.igihe.com/api/articles?keyword=HomeNews&limit=12')
      .then(response => {
        this.ziherukaItems = (response.data || []).map(item => ({
          id: item.id_article,
          title: item.titre,
          date: item.date,
          img: item.image,
          chapo: item.chapo,
          meta: item.date // or any other meta info you want to show
        }))
      })
      .catch(error => {
        console.error('Failed to fetch Ziheruka articles:', error)
      })

    document.getElementById('homeCarousel').addEventListener('slid.bs.carousel', (e) => {
      this.currentIndex = e.to;
    });
  },
}
</script>

<style scoped>
.position-relative {
  position: relative;
}

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
.ele-header-title{
  color:rgb(18, 18, 18);
  display:block;
  font-family:Visby, sans-serif;
  font-size:16px;
  font-weight:700px;
}
.carousel-indicator-vertical {
  position: absolute;
  top: 0;
  /* Center between carousel and article list */
  left: 100%;
  transform: translateX(-50%);
  height: 100%;
  z-index: 10;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
}
.carousel-indicator-vertical::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 4px;
  height: 100%;
  background: #0d6efd;
  transform: translateX(-50%);
  z-index: -1;
  border-radius: 2px;
  opacity: 0.2;
}
.carousel-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  margin: 18px 0;
  border: 3px solid #0d6efd;
  transition: background 0.2s, border 0.2s;
  box-shadow: 0 2px 8px rgba(13,110,253,0.08);
}
.carousel-dot.active {
  background: #0d6efd;
  border: 3px solid #0d6efd;
}
@media (max-width: 991px) {
  .carousel-indicator-vertical {
    display: none !important;
  }
}
h1{
  box-sizing: border-box;
  color: rgb(18, 18, 18);
  display: block;
  font-family: Raleway, sans-serif;
  font-size: 24px;
  font-weight: 700;
}
.meta-divider {
  display: inline-block;
  width: 3px;
  height: 18px;
  background: #111;
  border-radius: 2px;
}
.vertical-article-indicator {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 32px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.vertical-article-indicator::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 4px;
  height: 100%;
  background: #0d6efd;
  transform: translateX(-50%);
  z-index: -1;
  border-radius: 2px;
  opacity: 0.2;
}

.article-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #0d6efd;
  margin: 0;
  transition: background 0.2s, border 0.2s;
  box-shadow: 0 2px 8px rgba(13,110,253,0.08);
}

.article-dot.active {
  background: #0d6efd;
  border: 3px solid #0d6efd;
}

.article-listing-with-dots {
  margin-left: 32px; /* leave space for the vertical indicator */
}

.article-list-item {
  transition: background 0.2s;
}

.article-list-item.hovered {
  background: #e9f0ff;
}
.ad-box {
  position: relative;
  width: 100%;
  min-height: 180px; /* Both boxes same height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #f1f1f1;
}

.ad-box img {
  width: 100%;
  height: auto;
  max-height: 320px;
  object-fit: contain;
  display: block;
}

.ad-label {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(13, 110, 253, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
}
.article-list-simple {
  width: 100%;
}

.article-list-simple-item {
  padding: 10px 0;
}

.article-simple-separator {
  margin: 10px 0 0 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
}

/* Add to your <style scoped> if not present */
.main-articles-list {
  width: 100%;
}
.main-article-item {
  align-items: flex-start;
}
.main-article-thumb {
  flex-shrink: 0;
}
.main-article-thumb-float {
  float: left;
  width: 90px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 16px;
  margin-bottom: 8px;
}
.main-article-item {
  overflow: hidden; /* Ensures container wraps floated image */
}
</style>
