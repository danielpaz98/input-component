<script>
import { computed } from "vue";

export default {
	name: "Select",
};
</script>

<script setup>
const props = defineProps({
	labelText: {
		type: String,
	},
	placeholder: {
		type: String,
	},
	defaultValue: {
		type: String,
	},
	value: {
		type: Object,
	},
	values: {
		type: Array,
		required: true,
	},
	block: {
		type: Boolean,
	},
	onChange: {
		type: Function,
	},
});

/* eslint-disable */
// DATA
const { labelText, placeholder, onChange } = props;
const selectValue = computed(() => props.value?.value);
const selectTitle = computed(() => selectValue.value || placeholder);
// METHODS
const handleChange = (e) => onChange({ text: labelText, value: e.target.value });
const handleReset = () => onChange({ text: labelText, value: "" });
</script>

<template>
	<div class="select-container">
		<label v-if="labelText" for="select-list" class="select-label"> {{ labelText }}: </label>

		<div class="select-content">
			<select class="select-list" :class="{ block }" :value="selectValue" :title="selectTitle" @change="handleChange">
				<option value="" hidden defaultValue>
					{{ placeholder }}
				</option>

				<option v-for="({ text, value }, index) of values" :key="index" :value="value" :title="text">
					{{ text }}
				</option>
			</select>

			<button class="select-btn-reset" @click="handleReset">
				<i class="material-icons">close</i>
			</button>
		</div>
	</div>
</template>

<style lang="css" src="~/assets/css/select.css" />
