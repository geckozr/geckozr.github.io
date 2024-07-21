<template>
  <div ref="shapesContainer" class="shapes-container"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const shapesContainer = ref<HTMLDivElement | null>(null);

let resizeTimeoutId: number | null = null;

function generateShapes() {
  const shapeTypes = ["circle", "square", "triangle", "cross"];
  const colors = ["blue", "red", "yellow", "green"];

  const numShapes = 50;
  const containerWidth = shapesContainer.value?.clientWidth || 2000;
  const containerHeight = shapesContainer.value?.clientHeight || 750;

  if (shapesContainer.value) {
    shapesContainer.value.innerHTML = "";
  }

  for (let i = 0; i < numShapes; i++) {
    const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const initialPosition = getRandomOutsidePosition(
      containerWidth,
      containerHeight
    );

    const shape = document.createElement("div");
    shape.classList.add("shape", `${type}-${color}`);
    shape.style.left = initialPosition.left;
    shape.style.top = initialPosition.top;
    shape.style.width = `${getRandomInRange(0.8, 1.5)}em`;
    shape.style.height = shape.style.width;

    shapesContainer.value?.append(shape);

    const destination = getRandomOutsideDestination(
      containerWidth,
      containerHeight
    );

    shape.animate(
      [
        { transform: "translate(0, 0)" },
        {
          transform: `translate(${
            destination.x - parseFloat(shape.style.left)
          }px, ${destination.y - parseFloat(shape.style.top)}px)`,
        },
      ],
      {
        duration: (Math.random() + 1) * 5000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "linear",
        delay: getRandomInRange(0, 220),
      }
    );
  }

  /* shapes.forEach((shape) => {
    const destination = getRandomOutsideDestination(
      containerWidth,
      containerHeight
    );

    shape.animate(
      [
        { transform: "translate(0, 0)" },
        {
          transform: `translate(${
            destination.x - parseFloat(shape.style.left)
          }px, ${destination.y - parseFloat(shape.style.top)}px)`,
        },
      ],
      {
        duration: (Math.random() + 1) * 5000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "linear",
        delay: getRandomInRange(0, 220),
      }
    );
  }); */
}

function getRandomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOutsidePosition(
  containerWidth: number,
  containerHeight: number
) {
  const position = Math.random();
  const offset = 100;

  if (position < 0.25) {
    return {
      left: `${getRandomInRange(-offset, containerWidth + offset)}px`,
      top: `-${offset}px`,
    }; // Top
  } else if (position < 0.5) {
    return {
      left: `${getRandomInRange(-offset, containerWidth + offset)}px`,
      top: `${containerHeight + offset}px`,
    }; // Bottom
  } else if (position < 0.75) {
    return {
      left: `-${offset}px`,
      top: `${getRandomInRange(-offset, containerHeight + offset)}px`,
    }; // Left
  } else {
    return {
      left: `${containerWidth + offset}px`,
      top: `${getRandomInRange(-offset, containerHeight + offset)}px`,
    }; // Right
  }
}

function getRandomOutsideDestination(
  containerWidth: number,
  containerHeight: number
) {
  const position = Math.random();
  const offset = 100;

  if (position < 0.25) {
    return {
      x: getRandomInRange(-offset, containerWidth + offset),
      y: -offset,
    }; // Top
  } else if (position < 0.5) {
    return {
      x: getRandomInRange(-offset, containerWidth + offset),
      y: containerHeight + offset,
    }; // Bottom
  } else if (position < 0.75) {
    return {
      x: -offset,
      y: getRandomInRange(-offset, containerHeight + offset),
    }; // Left
  } else {
    return {
      x: containerWidth + offset,
      y: getRandomInRange(-offset, containerHeight + offset),
    }; // Right
  }
}

const handleResize = () => {
  if (resizeTimeoutId !== null) {
    clearTimeout(resizeTimeoutId);
  }
  resizeTimeoutId = window.setTimeout(() => {
    generateShapes();
  }, 250);
};

onMounted(() => {
  generateShapes();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  if (resizeTimeoutId !== null) {
    clearTimeout(resizeTimeoutId);
  }
  window.removeEventListener("resize", handleResize);
});
</script>

<style>
.shapes-container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 0.85;
}

.shape {
  position: absolute;
  will-change: transform;

  &.circle-blue {
    background-image: url("~/public/img/shapes/circle-blue.svg");
  }
  &.cross-blue {
    background-image: url("~/public/img/shapes/cross-blue.svg");
  }
  &.square-blue {
    background-image: url("~/public/img/shapes/square-blue.svg");
  }
  &.triangle-blue {
    background-image: url("~/public/img/shapes/triangle-blue.svg");
  }
  &.circle-green {
    background-image: url("~/public/img/shapes/circle-green.svg");
  }
  &.cross-green {
    background-image: url("~/public/img/shapes/cross-green.svg");
  }
  &.square-green {
    background-image: url("~/public/img/shapes/square-green.svg");
  }
  &.triangle-green {
    background-image: url("~/public/img/shapes/triangle-green.svg");
  }
  &.circle-red {
    background-image: url("~/public/img/shapes/circle-red.svg");
  }
  &.cross-red {
    background-image: url("~/public/img/shapes/cross-red.svg");
  }
  &.square-red {
    background-image: url("~/public/img/shapes/square-red.svg");
  }
  &.triangle-red {
    background-image: url("~/public/img/shapes/triangle-red.svg");
  }
  &.circle-yellow {
    background-image: url("~/public/img/shapes/circle-yellow.svg");
  }
  &.cross-yellow {
    background-image: url("~/public/img/shapes/cross-yellow.svg");
  }
  &.square-yellow {
    background-image: url("~/public/img/shapes/square-yellow.svg");
  }
  &.triangle-yellow {
    background-image: url("~/public/img/shapes/triangle-yellow.svg");
  }
}
</style>
