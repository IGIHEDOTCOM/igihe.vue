<template>
  <footer class="bg-dark text-white pt-4">
    <div class="container">
      <div class="row align-items-center">
        <!-- Links -->
        <div class="col-md-6 mb-3 mb-md-0">
          <ul class="list-inline mb-0">
            <li class="list-inline-item"><a href="#" class="footer-link">Terms of Service</a></li>
            <li class="list-inline-item"><a href="#" class="footer-link">Privacy Policy</a></li>
            <li class="list-inline-item"><a href="#" class="footer-link">Cookie Policy</a></li>
            <li class="list-inline-item"><a href="#" class="footer-link">Help</a></li>
          </ul>
        </div>

        <!-- Social Icons -->
        <div class="col-md-6 text-md-end">
          <a href="#" class="text-white me-3 social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-white me-3 social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white me-3 social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <hr class="border-light mt-4" />

      <div class="text-center pb-3 small">
        &copy; {{ new Date().getFullYear() }} Your IGIHE ltd. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
.footer-link {
  color: #adb5bd;
  text-decoration: none;
  transition: color 0.3s ease;
}
.footer-link:hover {
  color: #fff;
  text-decoration: underline;
}

.social-icon {
  font-size: 1.25rem;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #0d6efd; /* Bootstrap primary color */
}
</style>
