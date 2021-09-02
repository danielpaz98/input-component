<script>
import { computed } from "vue";
import kebabCase from "just-kebab-case";

export default {
	name: "Input",
	inheritAttrs: false,
};
</script>

<script setup>
const emit = defineEmits(["update:value"]);
const props = defineProps({
	value: {
		type: String,
	},
	labelText: {
		type: String,
	},
	helperText: {
		type: String,
	},
	placeholder: {
		type: String,
	},
	color: {
		type: String,
	},
	size: {
		type: String,
	},
	icon: {
		type: String,
	},
	row: {
		type: String,
	},
	error: {
		type: Boolean,
	},
	disabled: {
		type: Boolean,
	},
	fullWidth: {
		type: Boolean,
	},
	endIcon: {
		type: Boolean,
	},
	multiline: {
		type: Boolean,
	},
});
// DATA
const inputId = Math.random().toString(16).slice(-4);
const classNames = computed(() => {
	const propss = Object.entries(props).reduce((acc, [key, value]) => ({ ...acc, ...{ [kebabCase(key)]: value } }), {});
	const {
		value,
		"label-text": labelText,
		"helper-text": helperText,
		placeholder,
		color,
		size,
		icon,
		row,
		...restProps
	} = propss;
	const { disabled } = restProps;

	return {
		[`input-${color}`]: color && !disabled,
		[`size-${size}`]: size,
		[`icon-${icon}`]: icon,
		[`row-${row}`]: row,
		...restProps,
	};
});
// METHODS
const handleInput = (e) => emit("update:value", e.target.value);
</script>

<template>
	<div v-if="row && row > 1 && multiline" class="input" :class="classNames">
		<textarea
			:id="$attrs.id || inputId"
			class="input-element"
			:placeholder="placeholder"
			autocomplete="off"
			:error="error"
			:disabled="disabled"
			:row="row"
			:value="value"
			:maxlength="$attrs.maxlength"
			@input="handleInput"
		/>
		<i v-if="icon" class="material-icons" :class="{ show: Boolean(icon) }">{{ icon }}</i>
		<div v-if="helperText" class="helper-text">{{ helperText }}</div>
		<label v-if="labelText" class="input-label" :for="$attrs.id || inputId">{{ labelText }}</label>
	</div>

	<div v-else class="input" :class="classNames">
		<input
			:id="$attrs.id || inputId"
			class="input-element"
			:placeholder="placeholder"
			autocomplete="off"
			:error="error"
			:disabled="disabled"
			:value="value"
			:maxlength="$attrs.maxlength"
			@input="handleInput"
		/>
		<i v-if="icon" class="material-icons" :class="{ show: Boolean(icon) }">{{ icon }}</i>
		<div v-if="helperText" class="helper-text">{{ helperText }}</div>
		<label v-if="labelText" class="input-label" :for="$attrs.id || inputId">{{ labelText }}</label>
	</div>
</template>

<style lang="css" src="~/assets/css/input.css" />
