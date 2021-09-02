<script>
import { useAttrs } from "vue";
// COMPONENTS
import RangeSlider from "./RangeSlider.vue";
// CUSTOM HOOKS
import { useStateManager } from "./hooks";

export default {
	name: "StateManagerRangeSlider",
	inheritAttrs: false,
};
</script>

<script setup>
const attrs = useAttrs();
const baseProps = useStateManager(attrs);
</script>

<template>
	<RangeSlider v-bind="baseProps" />
</template>
