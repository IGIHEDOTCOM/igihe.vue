<template>
  <div>
    <div
      v-for="(article, idx) in item"
      :key="idx"
      class="card mb-3 ziheruka-card"
      style="max-width: 100%;"
    >
      <img
        :src="article.img"
        class="card-img-top ziheruka-thumb"
        :alt="article.title"
      />
      <div class="card-body py-2 px-3 text-start d-flex flex-column">
        <div class="d-flex align-items-center mb-1">
          <span class="meta-divider"></span>
          <small class="text-muted ms-2">{{ article.meta }}</small>
        </div>
        <h6 class="card-title mb-0 ziheruka-title">{{ article.title }}</h6>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Array
  }
}
</script>
<style scoped>
.ziheruka-card {
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  border: 1px solid #f0f0f0;
  background: #fff;
  transition: box-shadow 0.2s;
}
.ziheruka-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
}
.ziheruka-thumb {
  width: 100%;
  height: 120px;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  background: #f5f5f5;
  margin-bottom: 0.5rem;
  display: block;
}
.meta-divider {
  display: inline-block;
  width: 3px;
  height: 18px;
  background: #111;
  border-radius: 2px;
}
.ziheruka-title {
  color:rgb(18, 18, 18);
  display:block;
  font-family:Visby, sans-serif;
  font-size:16px;
  font-weight:700;
}
</style>