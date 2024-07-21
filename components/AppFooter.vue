<template>
  <footer id="main-footer" class="main-footer">
    <div class="container">
      <div class="social-links">
        <a href="https://www.linkedin.com/in/giacomo-zurru-a5bb4243/">
          <img src="~/public/img/social/icon-linkedin.svg" />
        </a>
        <a href="https://github.com/geckozr">
          <img src="~/public/img/social/icon-github.svg" />
        </a>
        <a href="https://gitlab.com/giacomozr90">
          <img src="~/public/img/social/icon-gitlab.svg" />
        </a>
        <a href="https://codepen.io/geckozr">
          <img src="~/public/img/social/icon-codepen.svg" />
        </a>
      </div>
      <small>
        <span>Giacomo Zurru - &copy;{{ year }} | </span>
        <a class="privacy" href="https://www.iubenda.com/privacy-policy/389746">
          {{ $t("footer.privacy") }}
        </a>
      </small>
      <img src="/img/minilogo.svg" alt="Giacomo Zurru" title="Giacomo Zurru" />
    </div>
  </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
.main-footer {
  background-color: $dark-black;
  text-align: center;
  color: $gray;

  .social-links {
    padding: 0 0 25px;

    a {
      margin: 0 5px;
      display: inline-block;
    }

    img {
      width: 20px;
    }
  }

  img {
    display: block;
    width: 50px;
    margin: 10px auto 0;
  }

  a {
    color: $white;
  }

  .privacy {
    color: $gray;
  }
}
</style>
