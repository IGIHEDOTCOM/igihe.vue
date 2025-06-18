<template>
  <div class="container-lg">

    <div class="top-ad-banners">
      <div class="ad-banner ad-banner-1"><img class="img-flex" src="https://new.igihe.com/wp-content/uploads/2025/05/ads-1-1024x137.gif" style="width:100%;"/></div>
      <div class="ad-banner ad-banner-2"><img class="img-flex" src="https://new.igihe.com/wp-content/uploads/2025/05/ads-2.gif" style="width:100%;"/></div>
    </div>

    <!-- Language Bar -->
    <div class="language-bar d-flex justify-content-start align-items-center gap-3 py-2 px-3 border-top">
      <button class="btn btn-sm btn-outline-primary d-flex align-items-center" @click="setLanguage('en')" :class="{ active: currentLang === 'en' }">
        <span class="me-2" style="font-size: 1.2rem;">🇬🇧</span> English
      </button>
      <button class="btn btn-sm btn-outline-primary d-flex align-items-center" @click="setLanguage('fr')" :class="{ active: currentLang === 'fr' }">
        <span class="me-2" style="font-size: 1.2rem;">🇫🇷</span> French
      </button>
      <button class="btn btn-sm btn-outline-primary d-flex align-items-center" @click="setLanguage('rw')" :class="{ active: currentLang === 'rw' }">
        <span class="me-2" style="font-size: 1.2rem;">🇷🇼</span> Kinyarwanda
      </button>
    </div>

    <div class="header-main">
      <div class="logo-space">
        <!-- Replace with your logo image -->
        <img src="@/assets/logo.webp" alt="Logo" />
      </div>
      <div class="side-ad-space">
        <img class="img-flex" src="https://new.igihe.com/wp-content/uploads/2025/05/ads-3-1024x154.png" style="width:100%;"/>
      </div>
    </div>

   <nav class="main-nav navbar navbar-expand-lg p-0">
  <button
    class="navbar-toggler"
    type="button"
    @click="toggleNav"
    :aria-expanded="navOpen.toString()"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div :class="['collapse', 'navbar-collapse', { show: navOpen }]">
    <ul class="nav-list navbar-nav flex-column flex-lg-row gap-3">
      <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="/category/politics">Politics</a></li>
      <li class="nav-item"><a class="nav-link" href="/category/health">Health</a></li>
      <li class="nav-item"><a class="nav-link" href="/category/sports">Sports</a></li>
      <li class="nav-item"><a class="nav-link" href="/category/entertainment">Entertainment</a></li>
      <li class="nav-item"><a class="nav-link" href="/category/technology">Technology</a></li>
      <li class="nav-item"><a class="nav-link" href="/category/culture">Culture</a></li>
      <li class="nav-item"><a class="nav-link" href="/category/tourism">Tourism</a></li>
      <li class="nav-item"><a class="nav-link" href="/category/economy">Economy</a></li>
    </ul>
  </div>
</nav>


  </div>
</template>

<script>
export default {
  name: "HeaderLayout",
  data() {
    return {
      navOpen: false,
      currentLang: 'en',
    }
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen
    },
    setLanguage(lang) {
      this.currentLang = lang
      // your language switching logic here
    }
  }
}
</script>
<style scoped>

.container {
  margin: 0 auto;
  padding: 0;  
}

/* Top Ad Banners stacked vertically with spacing */
.top-ad-banners {
  display: flex;
  flex-direction: row; /* side by side */
  gap: 10px;
  margin-bottom: 0px;
  border-bottom:none;
  overflow:hidden;
}

.ad-banner {
  flex: 1; /* both banners take equal width */
  background-color: #f0f0f0;
  color: #333;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 1px solid #ccc;
}


/* Header with logo and side ad side by side */
.header-main {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.logo-space img {
  max-height: 160px;
  width: auto;
}

/* Side ad banner */
.side-ad-space {
  overflow:hidden;
  flex-grow: 1;      /* fill remaining horizontal space */
  height: 100px;
  background-color: #d9edf7;
  color: #31708f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 1px solid #31708f;
  /* optionally add padding */
  padding: 0;
}

/* Navigation bar styling */
.main-nav {
  background-color: #fff;  
  border-radius: 4px;
  padding: 0.5rem 1rem;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-item a {
  color:grey;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
}

.nav-item a:hover {
  text-decoration: underline;
}
.language-bar{
    background:#FFF;
    margin-top:0;
}
.language-bar button.active {
  background-color: #0d6efd;
  color: white;
  border-color: #0d6efd;
}
.language-bar button {
  padding: 0.25rem 0.5rem;  /* Less vertical and horizontal padding */
  font-size: 0.85rem;        /* Smaller font size */
  line-height: 1;            /* Tighter line height */
  min-height: unset;
  transition: background-color 0.3s ease;
}
.language-bar button:hover {
  background-color: #0d6efd;
  color: white;
}
/* Override nav-list for bootstrap compatibility */
.main-nav .nav-list {
  display: flex;
  gap: 1.5rem;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  flex-wrap: wrap;
}

/* Bootstrap overrides */
.navbar-toggler {
  border: none;
  background: transparent;
  padding: 0.25rem 0.75rem;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%280, 0, 0, 0.7%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Adjust nav links */
.main-nav .nav-link {
  color: grey;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 0;
  white-space: nowrap;
}

.main-nav .nav-link:hover {
  text-decoration: underline;
}

/* Responsive styles */
@media (max-width: 991.98px) {
  /* On small screens, nav-list stack vertically */
  .main-nav .nav-list {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
