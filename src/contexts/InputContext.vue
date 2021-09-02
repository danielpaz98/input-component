<script>
import { reactive, provide } from "vue";

export default {
	name: "InputContextProvider",
};
</script>

<script setup>
const inputState = reactive({
	"label-text": "Label",
	placeholder: "Placeholder",
});

const setInputState = (newState) => {
	Object.assign(inputState, newState);
};

provide("InputContext", { inputState, setInputState });
</script>

<template>
	<slot />
</template>
