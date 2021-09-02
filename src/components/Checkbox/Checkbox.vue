<script>
import { computed } from "vue";

export default {
	name: "Checkbox",
};
</script>

<script setup>
const props = defineProps({
	labelText: {
		type: String,
	},
	checked: {
		type: Boolean,
		default: false,
	},
	value: {
		required: true,
	},
	onChange: {
		type: Function,
	},
});
/* eslint-disable */
// DATA
const { labelText, onChange } = props;
const inputValue = computed(() => (typeof props.value === "object" ? props.value.value : undefined));
// METHODS
const handleOnChange = (e) => onChange({ text: labelText, value: e.target.value, checked: e.target.checked });
</script>

<template>
	<div class="checkbox-option">
		<input
			:id="inputValue"
			type="checkbox"
			class="input-checkbox"
			:value="inputValue"
			:checked="checked"
			@change="handleOnChange"
		/>
		<label v-if="labelText" :for="inputValue">{{ labelText }}</label>
	</div>
</template>

<style lang="css" src="~/assets/css/checkbox.css" />
