<script>
import { useAttrs } from "vue";
// COMPONENTS
import Checkbox from "./Checkbox.vue";
// CUSTOM HOOKS
import { useStateManager } from "./hooks";

export default {
	name: "StateManagerCheckbox",
	inheritAttrs: false,
};
</script>

<script setup>
const attrs = useAttrs();
const baseProps = useStateManager(attrs);
</script>

<template>
	<Checkbox v-bind="baseProps" />
</template>
