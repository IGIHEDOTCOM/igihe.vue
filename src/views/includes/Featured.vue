<template>
  <!-- FIRST STORY -->
  <div
    v-if="newsItems.length"
    class="card mb-3 ziheruka-card"
    style="max-width: 100%;"
  >
    <img
      v-if="newsItems[0].img"
      :src="newsItems[0].img"
      class="card-img-top ziheruka-thumb"
      :alt="newsItems[0].title"
    />
    <div class="card-body py-2 px-3 text-start d-flex flex-column">
      <h1 class="card-title mb-0 ziheruka-title">{{ newsItems[0].title }}</h1>
      <div class="d-flex align-items-center mb-1">
        <span class="meta-divider"></span>
        <small class="text-muted ms-2">{{ newsItems[0].date }}</small>
      </div>
      <small class="text-muted ms-2">
        {{ newsItems[0].chapo }}
      </small>
    </div>
  </div>
  <!-- END FIRST STORY -->

  <!-- Article List with Vertical Blue Line and Dots -->
  <div class="position-relative" v-if="newsItems.length > 1">
    <div class="vertical-article-indicator d-none d-md-flex flex-column align-items-center">
      <div
        v-for="(article, idx) in newsItems.slice(1)"
        :key="'dot-article-'+idx"
        :class="['article-dot', { active: idx === hoveredArticleIndex }]"
      ></div>
    </div>
    <div
      class="article-listing-with-dots"
      @mouseleave="hoveredArticleIndex = null"
    >
      <div
        v-for="(article, idx) in newsItems.slice(1)"
        :key="'list-article-'+idx"
        class="article-list-item px-3 py-2"
        @mouseenter="hoveredArticleIndex = idx"
        :class="{ hovered: idx === hoveredArticleIndex }"
        style="cursor:pointer"
      >
        <small class="article-date">{{ article.date }}</small>
        <div class="article-title">{{ article.title }}</div>
        <hr class="article-separator" v-if="idx !== newsItems.length - 2" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const newsItems = ref([])
const hoveredArticleIndex = ref(null)

onMounted(() => {
  axios.get('https://en.igihe.com/api/articles?keyword=HomeIrambuye&limit=7')
    .then(response => {
      newsItems.value = (response.data || []).map(item => ({
        id: item.id_article,
        title: item.titre,
        date: item.date,
        img: item.image,
        chapo: item.chapo,
        meta: item.date // or any other meta info you want to show
      }))
    })
    .catch(error => {
      console.error('Failed to fetch HomeIrambuye stories:', error)
    })
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');

/* If you want to import only the .ziheruka-title style from Home.vue, 
   you can copy it directly here for scoped usage: */

.ziheruka-title {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  margin: 0 0 0.25rem 0;
  line-height: 1.2;
  color: #222;
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
  margin-left: 32px;
}
.article-list-item.hovered {
  background: #e9f0ff;
}
</style>