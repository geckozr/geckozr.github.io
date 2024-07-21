<script setup lang="ts"></script>

<template>
  <header id="main-header" class="main-header">
    <AppHeaderBackground class="background-decoration"></AppHeaderBackground>

    <AppLanguageSwitcher></AppLanguageSwitcher>
    <div class="container">
      <div class="title">
        <h1>{{ $t("header.title") }}</h1>
        <p>// {{ $t("header.subtitle") }}</p>
        <a
          href="https://www.linkedin.com/in/giacomo-zurru-a5bb4243/"
          rel="nofollow"
          class="gz-btn-inline"
          target="_blank"
        >
          {{ $t("header.contactMe") }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.main-header {
  display: grid;
  height: 450px;
  position: relative;
  background: url("~/public/img/logo.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 185px;

  .background-decoration {
    position: absolute !important;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  #canvas {
    position: absolute !important;
    z-index: -1;
  }
}

.title {
  padding: 70px 0px;
  margin: 0 auto;

  h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: $green;
    margin-top: 0;
    margin-bottom: 30px;
  }
}

@include mq-for-size(md) {
  .main-header {
    height: 750px;
  }

  .title {
    h1 {
      font-size: 60px;
    }

    p {
      font-size: 18px;
    }
  }
}
</style>
