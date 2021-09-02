<script>
import { computed } from "vue";

export default {
	name: "RangeSlider",
	props: {
		labelText: {
			type: String,
		},
		defaultValue: {
			type: String,
		},
		value: {
			required: true,
		},
		values: {
			type: Array,
			required: true,
		},
		max: {
			type: Number,
		},
		onChange: {
			type: Function,
		},
	},
	/* eslint-disable */
	setup(props) {
		const { labelText, onChange } = props;
		const rangeValue = computed(() => props.value?.value || "?");
		const inputValue = computed(() => props.values.findIndex((value) => value === rangeValue.value));

		const handleInput = (e) => onChange({ text: labelText, value: props.values[e.target.value] });
		const handleReset = (e) => onChange({ text: labelText, value: "" });

		return {
			rangeValue,
			inputValue,
			handleInput,
			handleReset,
		};
	},
};
</script>

<template>
	<div class="range-slider">
		<label v-if="labelText" class="range-label">{{ labelText }}:</label>

		<div class="range-content">
			<input class="range-input" type="range" min="0" :max="max" :value="inputValue" @input="handleInput" />

			<div class="range-value">
				<span>{{ rangeValue }}</span>
			</div>
		</div>

		<button class="range-btn-reset" @click="handleReset">
			<i class="material-icons">close</i>
		</button>
	</div>
</template>

<style lang="css" src="~/assets/css/range-slider.css" />
