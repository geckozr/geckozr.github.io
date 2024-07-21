<template>
  <NuxtLayout name="404">
    <div class="error-404">
      <img src="/img/404.svg" alt="Pagina non trovata" />
      <h1>{{ $t("errors.404.title") }}</h1>
      <p>
        <NuxtLink to="/">{{ $t("errors.404.action") }}</NuxtLink>
      </p>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.error-404 {
  min-height: 100vh;
  display: grid;
  text-align: center;
  align-content: center;
  justify-content: center;

  & > div {
    margin: auto;
  }

  img {
    max-width: 250px;
    margin: 0 auto;
  }

  h1 {
    font-size: 32px;
    margin: 0;
  }

  p {
    font-size: 18px;
  }
}
</style>
