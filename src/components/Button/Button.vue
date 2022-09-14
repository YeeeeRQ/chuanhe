<template>
  <button class="sx-btn" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "SxButton",
});
</script>

<script lang="ts" setup>
import "./index.scss";
type buttonType = "default" | "primary" | "success" | "warning" | "danger";
type buttonSize = "medium" | "small" | "large";
interface Props {
  type?: buttonType;
  size?: buttonSize;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "default",
  size: "medium",
  disabled: false,
});

const { type, size } = props;
const classes = computed(() => {
  return {
    [`sx-type-${type}`]: type,
    [`sx-size-${size}`]: size,
  };
});
</script>
