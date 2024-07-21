<template>
  <nav class="lang-switcher">
    <ul>
      <li v-for="locale in availableLocales">
        <button class="gz-btn-icon" @click="setLocale(locale.value)">
          {{ locale.flag }} {{ locale.value }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const { setLocale } = useI18n();

const availableLocales = [
  {
    value: "en",
    flag: "🇬🇧",
  },
  {
    value: "it",
    flag: "🇮🇹",
  },
];
</script>

<style scoped lang="scss">
.lang-switcher {
  max-width: 1200px;
  text-align: right;
  margin: 0 auto;
  padding: 0 15px;

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    text-align: center;
    margin-left: 15px;
  }

  button {
    color: $white;
    padding: 10px 5px;
  }
}
</style>
