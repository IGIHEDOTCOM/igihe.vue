<template>
  <HeaderLayout />
    <section class="container-lg" style="background:#fff;">
        <div class="row">
            <div class="col-lg-6">
                <!-- The category hero goes here -->
                <HeroCarousel :articles="visibleArticles" />
            </div>
            <div class="col-lg-3">
                <!-- The category main story goes here -->
                <!-- Display image and link to 6th article with styled overlay title -->
                <div v-if="articles.length >= 6" style="position: relative; width: 100%; max-width: 400px;">
                  <a :href="`/article/${articles[5].id_article}`" style="display: block;">
                    <img
                      :src="articles[5].image"
                      :alt="articles[5].titre"
                      style="width: 100%; height: 400px; object-fit: cover; display: block;"
                    />
                    <div
                      style="
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        background: rgba(0,0,0,0.5);
                        color: #fff;
                        padding: 20px 24px;
                        box-sizing: border-box;
                        border-bottom-left-radius: 8px;
                        border-bottom-right-radius: 8px;
                      "
                    >
                      {{ articles[5].titre }}
                    </div>
                  </a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="search-container">
                <form @submit.prevent="onSearch">
                    <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search articles, topics, or keywords..."
                    class="search-input"
                    required
                    />
                    <button type="submit" class="search-btn">
                    <span class="material-icons" style="vertical-align: middle;">search</span>
                    </button>
                </form>
                </div>
                <!-- The advertisement banner goes here-->                 
                <div class="ad-box mb-2">
                    <span class="ad-label">ADVERTISEMENT</span>
                    <img src="https://en.igihe.com/IMG/jpg/april_full_graphics4_4_.jpg" style="width:100%;" alt="Advertisement Banner">
                </div>
            </div>
        </div>
    </section>
    <section class="container-lg" style="background:#FFF;">
        <div class="row">
            <div class="col-lg-3">
                <br/>
                <h3 class="section-title">
                  <span class="icon material-icons">fiber_new</span>
                  Latest Articles
                </h3>
                <!-- The list of articles goes here-->
                <!-- Article list starting from article 7 with styled vertical timeline and hover effect -->
                <div class="article-list">
                  <div
                    v-for="(article, idx) in articles.slice(6, 25)"
                    :key="article.id_article"
                    class="article-list-item"
                    @mouseover="hovered = idx"
                    @mouseleave="hovered = null"
                  >
                    <div class="timeline">
                      <div
                        class="timeline-dot"
                        :class="{ active: hovered === idx }"
                      ></div>
                      <div class="timeline-line"></div>
                    </div>
                    <img
                      :src="article.image"
                      :alt="article.titre"
                      class="article-thumb"
                    />
                    <div class="article-info">
                      <a
                        :href="`/article/${article.id_article}`"
                        class="article-title"
                        :class="{ active: hovered === idx }"
                      >
                        {{ article.titre }}
                      </a>
                    </div>
                  </div>
                </div>
                <div v-if="loading">
                  <div class="skeleton-article" v-for="n in 5" :key="n">
                    <div class="skeleton-thumb"></div>
                    <div class="skeleton-lines">
                      <div class="skeleton-line short"></div>
                      <div class="skeleton-line"></div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <!-- Render your real articles here -->
                </div>
            </div>
            <div class="col-lg-7">
                <!-- The widgets goes here-->
                 <div class="row">
                    <div class="col-lg-6">
                        <!-- Popular articles go here-->
                         <br/>
                        <h3 class="section-title">
                          <span class="icon material-icons">whatshot</span>
                          Popular Articles
                        </h3>
                        <!-- Popular Articles List with Ad Banner after every 3 articles, showing 9 articles total -->
                        <div class="popular-articles">
                          <template v-for="(article, idx) in popularArticles" :key="article.id_article">
                            <div class="popular-article">
                              <img
                                :src="article.image"
                                :alt="article.titre"
                                class="popular-article-img"
                              />
                              <div class="popular-article-title">{{ article.titre }}</div>
                              <div class="popular-article-visits">
                                {{ article.visites }} visits
                              </div>
                              <div class="popular-divider"></div>
                            </div>
                            <div
                              v-if="(idx + 1) % 3 === 0 && idx !== popularArticles.length - 1"
                              :key="'ad-' + idx"
                              class="ad-banner"
                            >
                             <div class="ad-box mb-2">
                                <span class="ad-label">ADVERTISEMENT</span>
                                <img src="https://igihe.com/squelettes/igihe_imgs/gh_ads300x250_available.png"/>
                              </div>
                            </div>
                          </template>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <!-- More articles -->
                        <br/>
                        <h3 class="section-title">
                          <span class="icon material-icons">more_horiz</span>
                          More Articles
                        </h3>
                        <!-- Show up to 60 articles starting from article 25 with larger rounded thumbnail and title to the right -->
<div class="rest-articles-list">
  <div
    v-for="article in articles.slice(24, 57)"
    :key="article.id_article"
    class="rest-article-item"
  >
    <img
      :src="article.image"
      :alt="article.titre"
      class="rest-article-thumb"
    />
    <span class="rest-article-title">{{ article.titre }}</span>
  </div>
</div>

                    </div>
                 </div>
            </div>
            <div class="col-lg-2">
                <br/>
                <!-- The advertisment banners goes here-->
                <img src="https://en.igihe.com/squelettes/igihe_imgs/gh_ad2_default.png">
                <br/>
                <br/>
                <!-- The advertisment banners goes here-->
                <img src="https://en.igihe.com/squelettes/igihe_imgs/gh_ad2_default.png">
                <br/>
                <br/>
                <!-- The advertisment banners goes here-->
                <img src="https://en.igihe.com/squelettes/igihe_imgs/gh_ad2_default.png">
                <br/>                
                <!-- The advertisment banners goes here-->
                <img src="https://en.igihe.com/squelettes/igihe_imgs/gh_ad2_default.png">                
                <br/>
                <!-- The advertisment banners goes here-->
                <img src="https://en.igihe.com/squelettes/igihe_imgs/gh_ad2_default.png">
                <br/>
            </div>
        </div>
    </section>
  <Footer/>
   <!-- Loading overlay (does not replace content, just overlays it) -->
  <div v-if="loading" class="loading-overlay">
    <div class="spinner"></div>
  </div>
</template>

<script>
import HeaderLayout from './includes/HeaderLayout.vue'
import Footer from './includes/Footer.vue'
import HeroCarousel from './includes/HeroCarousel.vue'
import axios from 'axios'


export default {
    name: 'Category',
    data() {
        return {
            // Define any data properties needed for the category view
            currentIndex: 0,
            interval: null,
            articles: [],
            cat_id: 0, // This will be set based on the category
            hovered: null,
            loading: true,   
            wordCategoryMap : {
                'politics': 48,
                'health': 9,
                'sports': 10,
                'entertainment': 12,
                'technology': 8,
                'culture': 11,
                'tourism': 14,
                'economy': 47,
                'people': 17,
                'environment': 13,
                'religion': 15,
                'news': 5,
                'default': 0 // Fallback category ID
            }
        }
    },
    components: { HeaderLayout, Footer, HeroCarousel },
    watch: {
      category(newVal, oldVal) {
        // Update cat_id and reload articles when the category prop changes
        var wordCategoryMap = this.wordCategoryMap;
        this.cat_id = wordCategoryMap[newVal.toLowerCase()] || 0;
        this.getCategoryArticles();
      }
    },
    computed: {
        visibleArticles() {
            return this.articles
              .slice()
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 5);
          },
          popularArticles() {
            // Sort by "visites" descending and take top 9
            return this.articles
              .slice()
              .sort((a, b) => b.visites - a.visites)
              .slice(0, 9);
          }
    },
    props: {
        category: {
            type: String,
            required: true
        }
    },
    methods: {
       // Define any methods needed for the category view
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
        },
        async getCategoryArticles() {
            this.loading = true;
            try {
                // retrieve articles from endpoint en.igihe.com/api/articles/?id_rubrique=this.cat_id
                var url = `https://en.igihe.com/api/articles/?id_rubrique=${this.cat_id}`;
                const response = await axios.get(`https://en.igihe.com/api/articles/?section=${this.cat_id}`);
                this.articles = response.data; 
                // Assuming the API returns an array of articles                
                this.interval = setInterval(this.next, 5000);
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                this.loading = false;
            }
        }
    },    
    beforeUnmount() {
        clearInterval(this.interval);
    },
    mounted() {        
        // Fetch articles when the component is mounted 
        var wordCategoryMap = this.wordCategoryMap;
        // Set the category ID based on the prop
        this.cat_id = wordCategoryMap[this.category.toLowerCase()] || 0;            
        this.getCategoryArticles();        
    }
}
</script>
<style scoped>
    .category {
        padding: 16px;
        border: 1px solid #eee;
        border-radius: 4px;
        margin-bottom: 16px;
    }
    .search-container {
  width: 100%;
  max-width: 600px;
  margin: 32px auto 24px auto;
  display: flex;
  justify-content: center;
}
.search-container form {
  display: flex;
  width: 100%;
  background: #fff;
  border-radius: 32px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  overflow: hidden;
}
.search-input {
  flex: 1;
  border: 1px solid #BCBCBB;
  padding: 16px 20px;
  font-size: 1.1rem;
  outline: none;
  background: transparent;
}
.search-btn {
  background: #2196f3;
  color: #fff;
  border: none;
  padding: 0 24px;
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}
.search-btn:hover {
  background: #1769aa;
}
.article-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 32px 0;
}
.article-list-item {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 36px;
  transition: background 0.2s;
}
.timeline {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #b0c4de;
  border: 3px solid #2196f3;
  margin-top: 6px;
  margin-bottom: 2px;
  transition: background 0.2s, border-color 0.2s;
}
.timeline-dot.active {
  background: #2196f3;
  border-color: #1769aa;
}
.timeline-line {
  flex: 1;
  width: 4px;
  background: #2196f3;
  margin: 0 auto;
  border-radius: 2px;
  margin-top: 2px;
}
.article-thumb {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
  box-shadow: 0 2px 8px rgba(33,150,243,0.07);
  flex-shrink: 0;
}
.article-info {
  flex: 1;
}
.article-title {
  font-size: 1.08rem;
  color: #222;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  padding: 8px 0;
  display: inline-block;
}
.article-title.active,
.article-list-item:hover .article-title {
  color: #2196f3;
}
.popular-articles {
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.popular-article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 0 12px 0;
  position: relative;
}
.popular-article-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(33,150,243,0.07);
  display: block;
}
.popular-article-title {
  font-size: 1.05rem;
  font-weight: 500;
  color: #222;
  text-align: center;
  margin-bottom: 6px;
}
.popular-article-visits {
  font-size: 0.95rem;
  color: #2196f3;
  margin-bottom: 4px;
}
.popular-divider {
  width: 80%;
  height: 1px;
  background: rgba(33, 150, 243, 0.07);
  margin: 12px auto 0 auto;
}
.popular-article:last-child .popular-divider {
  display: none;
}
.ad-banner {
  width: 100%;
  margin: 18px 0;
  display: flex;
  justify-content: center;
}
.ad-content {
  width: 100%;
  max-width: 320px;
  height: 90px;
  background: linear-gradient(90deg, #e3f2fd 0%, #bbdefb 100%);
  color: #1769aa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(33,150,243,0.07);
}
.rest-articles-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 24px 0;
}
.rest-article-item {
  display: flex;
  align-items: center;
  gap: 14px;
}
.rest-article-thumb {
  width: 76px;   /* doubled from 38px */
  height: 76px;  /* doubled from 38px */
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 1px 4px rgba(33,150,243,0.08);
  flex-shrink: 0;
}
.rest-article-title {
  font-size: 1rem;
  color: #222;
  font-weight: 500;
  line-height: 1.2;
}

/* Modern section titles for Latest, Popular, and More Articles */
.section-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1769aa;
  letter-spacing: 0.5px;
  margin: 32px 0 18px 0;
  padding-left: 0.5em;
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #e3f2fd 0%, #fff 100%);
  border-radius: 8px 24px 24px 8px;
  min-height: 48px;
  box-shadow: 0 2px 8px rgba(33,150,243,0.04);
}

.section-title::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 28px;
  background: #2196f3;
  border-radius: 4px;
  margin-right: 16px;
}

.section-title .icon {
  font-size: 1.3em;
  color: #2196f3;
  margin-right: 10px;
  vertical-align: middle;
}
/* Overlay covers the content but does not remove it */
.loading-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255,255,255,0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
  transition: opacity 0.3s;
}

/* Spinner style */
.spinner {
  width: 56px;
  height: 56px;
  border: 6px solid #2196f3;
  border-top: 6px solid #e3f2fd;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>