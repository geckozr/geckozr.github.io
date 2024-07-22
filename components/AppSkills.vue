<template>
  <section class="skills" id="skills">
    <div class="container">
      <h2>{{ $t("skills.title") }}</h2>
      <div class="skills-grid">
        <div
          class="skill bright-side"
          :class="{ 'is-loaded': isBrightSideVisible }"
          v-element-visibility="onBrightSideVisibility"
        >
          <div class="loader"></div>
          <img
            src="~/public/img/frontend.svg"
            :title="$t('skills.frontend.altText')"
            :alt="$t('skills.frontend.altText')"
          />
          <h2>{{ $t("skills.frontend.title") }}</h2>
          <p>
            {{ $t("skills.frontend.description") }}
          </p>
          <div class="skill-logos">
            <img
              class="skill-logo"
              src="~/public/img/skills/angular.svg"
              alt="Angular"
              title="Angular"
            />
            <img
              class="skill-logo"
              src="~/public/img/skills/html5.svg"
              alt="HTML5"
              title="HTML5"
            />
            <img
              class="skill-logo"
              src="~/public/img/skills/ionic.svg"
              alt="Ionic"
              title="Ionic"
            />
          </div>
        </div>

        <div
          class="skill dark-side"
          :class="{ 'is-loaded': isDarkSideVisible }"
          v-element-visibility="onDarkSideVisibility"
        >
          <div class="loader"></div>
          <img
            src="~/public/img/backend.svg"
            :alt="$t('skills.backend.altText')"
            :title="$t('skills.backend.altText')"
          />
          <h2>{{ $t("skills.backend.title") }}</h2>
          <p>
            {{ $t("skills.backend.description") }}
          </p>
          <div class="skill-logos">
            <img
              class="skill-logo"
              src="~/public/img/skills/nodejs.svg"
              alt="NodeJs"
              title="NodeJs"
            />
            <img
              class="skill-logo"
              src="~/public/img/skills/php.svg"
              alt="PHP"
              title="PHP"
            />
            <img
              class="skill-logo"
              src="~/public/img/skills/gitlab.svg"
              alt="Gitlab CI / CD"
              title="Gitlab CI / CD"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { vElementVisibility } from "@vueuse/components";

const isBrightSideVisible = ref(false);
const isDarkSideVisible = ref(false);

function onBrightSideVisibility(state: any) {
  isBrightSideVisible.value = state;
}

function onDarkSideVisibility(state: any) {
  isDarkSideVisible.value = state;
}
</script>

<style scoped lang="scss">
.skills {
  .container {
    text-align: center;
    padding: 0;
  }

  .skills-grid {
    display: grid;
  }

  .skill {
    position: relative;
    width: 100%;
    padding: 25px;
    background-color: $white;
    color: $dark-black;
    box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.65);
    overflow: hidden;

    &:nth-child(odd) {
      text-align: left;
      justify-self: start;
    }

    &:nth-child(even) {
      text-align: right;
      justify-self: end;
    }

    .loader {
      position: absolute;
      top: 0;
      left: -40px;
      bottom: 0;
      right: -40px;
      background-color: $dark-black;
      z-index: 11;
      transform: skew(10deg, 0deg);
      transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.is-loaded {
      &.bright-side {
        .loader {
          transform: skew(10deg, 0deg) translateX(105%);
        }
      }

      &.dark-side {
        .loader {
          transform: skew(10deg, 0deg) translateX(-105%);
        }
      }
    }

    img {
      width: 65px;
    }

    img.skill-logo {
      width: auto;
      max-width: 65px;
      height: 40px;
      margin: 10px 15px 0;

      &:first-of-type {
        margin-left: 0 !important;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }

    p {
      padding-right: 50px;
    }

    &::after {
      content: "Bright side";
      text-transform: uppercase;
      position: absolute;
      transform: rotate(-90deg);
      transform-origin: 0 0;
      font-size: 14px;
      bottom: 0;
      right: -45px;
    }

    &.dark-side {
      background-color: $dark-black;
      color: $white;

      .loader {
        background-color: $white;
      }

      p {
        padding-right: 0;
        padding-left: 50px;
      }

      &::after {
        content: "Dark side";
        text-transform: uppercase;
        position: absolute;
        transform: rotate(-90deg);
        transform-origin: 0 0;
        font-size: 14px;
        bottom: 0;
        left: 15px;
        right: auto;
      }
    }
  }

  @include mq-for-size(sm) {
    .container {
      padding: 80px 15px;
    }

    .skill {
      width: 75%;
      padding: 25px;
      margin: 25px 0;
    }
  }
}
</style>
