<script>
import { useAttrs } from "vue";
// COMPONENTS
import Select from "./Select.vue";
// CUSTOM HOOKS
import { useStateManager } from "./hooks";

export default {
	name: "StateManagerSelect",
	inheritAttrs: false,
};
</script>

<script setup>
const attrs = useAttrs();
const baseProps = useStateManager(attrs);
</script>

<template>
	<Select v-bind="baseProps" />
</template>
