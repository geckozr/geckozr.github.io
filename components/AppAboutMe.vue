<template>
  <section class="about-me">
    <div class="container">
      <!--googleoff: index-->
      <div>
        <span class="blue">&#x3C;p</span>&nbsp;<span class="green">class=</span>
        <span class="red">&#x201D;small-description&#x201D;</span>
        <span class="blue">&#x3E;</span>
      </div>
      <!--googleon: index-->
      <p>
        {{ $t("aboutMe.smallDescription") }}
        <!--googleoff: index-->
        <span class="blue">&#x3C;br/&#x3E;</span>
        <!--googleon: index-->
      </p>
      <p>
        {{ $t("aboutMe.description") }}
      </p>
      <!--googleoff: index-->
      <div>
        <span class="blue">&#x3C;/p&#x3E;</span>
        <span>&nbsp;</span>
        <span class="cursor">&nbsp;</span>
      </div>
      <!--googleon: index-->
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.about-me {
  background-color: $dark-black;
}

p {
  padding: 0 0 0 25px;
  margin: 0;
}

.red {
  color: $red;
}

.blue {
  color: $blue;
}

.green {
  color: $green;
}

.cursor {
  display: inline-block;
  width: 2px;
  background-color: $white;
  opacity: 0;
  animation-name: cursorPulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@include mq-for-size(sm) {
  p {
    padding: 0 0 0 25px;
    margin: 0;
  }

  .red {
    color: $red;
  }

  .blue {
    color: $blue;
  }

  .green {
    color: $green;
  }
}
</style>
