<script>
import { ref } from "vue";
// PLUGINS
import "highlight.js/styles/nord.css";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/lib/common";
import { toClipboard } from "@soerenmartius/vue3-clipboard";
// CUSTOM HOOKS
import { useComponentToString } from "./hooks";
</script>

<script setup>
const props = defineProps({
	component: {
		type: Object,
	},
	maxPropsInline: {
		type: Number,
		default: 1,
	},
});

/* eslint-disable */
const { component, maxPropsInline } = props;
const Highlightjs = hljsVuePlugin.component;

const state = ref({ copied: false, icon: "content_copy", title: "copy to clipboard" });
const codeString = useComponentToString({ component, maxPropsInline });

const handleCopy = async () => {
	await toClipboard(codeString.value);
	const prevState = state.value;

	if (!state.value.copied) {
		state.value = { copied: true, icon: "content_paste", title: "copied!" };
	}
	setTimeout(() => (state.value = prevState), 2000);
};
</script>

<template>
	<div class="syntax-highlighter">
		<button className="copy-button" :title="state.title" @click="handleCopy" :disabled="state.copied">
			<i className="material-icons">{{ state.icon }}</i>
		</button>

		<Highlightjs :autodetect="false" language="markdown" :code="codeString" />
	</div>
</template>

<style lang="css" src="~/assets/css/syntax-highlighter.css" />
