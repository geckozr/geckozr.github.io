<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { t } = useI18n();

useHead({
  title: t("header.title"),
  meta: [{ name: "description", content: t("header.description") }],
});

// header.description
useSeoMeta({
  title: t("header.title"),
  ogTitle: t("header.title"),
  description: t("header.description"),
  ogDescription: t("header.description"),
  ogImage: "~/public/img/social/gz.png",
  twitterCard: "summary_large_image",
});
</script>
