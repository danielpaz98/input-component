<script>
// COMPONENTS
import Checkbox from "~/components/Checkbox";

export default {
	name: "CheckboxList",
};
</script>

<script setup>
defineProps({
	values: {
		type: Array,
		required: true,
	},
	onChange: {
		type: Function,
	},
});
</script>

<template>
	<div className="checkbox-list">
		<Checkbox
			v-for="({ text, value }, index) of values"
			:key="index"
			:label-text="text"
			:value="value"
			@change="onChange"
		/>
	</div>
</template>
